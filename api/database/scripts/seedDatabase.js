const path = require("path");
const fs = require("fs");
const fsPromises = require("fs/promises");

if (global.__base == undefined)
  global.__base = path.join(__dirname, "../..");

const db = require("../index.js");

class SeedStep {
  constructor(filepath) {
    this.filepath = filepath;
    this.filename = filepath.split("/").pop();
  };

  readData() {
    this.data = JSON.parse(fs.readFileSync(this.filepath, 'utf-8'));
  };

  get isApplied() {
    const query = `SELECT * FROM seed WHERE filename = $1`;
    return db.query(query, [ this.filename ])
      .then(resp => resp == 1 ? true : false)
  }

  commitStepToDb() {
    const query = `INSERT INTO seed (filename) VALUES ($1)`;
    return db.query(query, [ this.filename ]);
  }

  async applySeedData() {
    if (await this.isApplied) {
      console.log(`⚠️  Step: ${this.filename}, already applied.`);
      return
    }

    console.log(`Seeding ${this.filename}:`);

    const seedSteps = this.data.map(data => {
      const { model, pk, fields } = data;
      const columns = Object.keys(fields);
      const values = Object.values(fields);
      const parameterKeys = Array.from({length: values.length}, (v, k) => `$${k + 1}`);

      const query = `INSERT INTO ${ model }
        (${ columns.join(',') })
        VALUES
        (${ parameterKeys.join(',') })`;

      return db.query(query, values)
    });

    const table = this.data[0].model;
    return Promise.all(seedSteps)
      .then(objects => console.log(`🌱 ${objects.length} object(s) applied to ${ table }.`))
      .then(_ => this.commitStepToDb());
  }
}

/**
 * UTILS
 */
const readSeedFiles = () => {
  const seedFolder = path.join(__base, "database/seeds/");
  console.log(`Reading seeds from folder: ${seedFolder}\n`);

  return fsPromises.readdir(seedFolder)
    .then(files => files.map(filePath => {
      const seedStep = new SeedStep(path.join(seedFolder, filePath));
      seedStep.readData();
      return seedStep;
    }))
    .catch(console.log)
};

const runAllSteps = (seedSteps) => {
  return seedSteps.reduce(async (prevPromise, step) => {
    await prevPromise;
    return step.applySeedData();
  }, Promise.resolve());

  return Promise.all(promises);
}

/**
 * Runner
 */
readSeedFiles()
  .then(seedSteps => runAllSteps(seedSteps))
  .finally(_ => process.exit(0));
