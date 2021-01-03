const path = require("path");
const fs = require("fs");
const fsPromises = require("fs/promises");

if (global.__base == undefined)
  global.__base = path.join(__dirname, "../..");

const db = require("../index.js");

const posts = `posts.sql`;
const seed = `seed.sql`;

// TODO this is not used
const schemas = [
  posts,
  seed
];


const handleExit = (error=undefined) => {
  if (error != undefined) {
    console.log(`🚫 Exited with error: ${error}`);
    process.exit(1);
  }

  console.log("✅ Exited setup successfully!");
  process.exit(0);
};


const readSchemaFiles = () => {
  const schemaFolder = path.join(__base, "database/schemas");
  console.log("Reading schemas from folder:", schemaFolder);

  return fsPromises.readdir(schemaFolder)
    .then(files => files.map(filename => {
      const filePath = path.join(schemaFolder, filename);
      return fs.readFileSync(filePath, 'utf-8');
    }))
}

const applyAll = schemas => {
  schemas = schemas.reverse();

  return schemas.reduce(async (prevPromise, schema) => {
    const tableName = schema.split("CREATE TABLE IF NOT EXISTS ").pop().split(" (")[0];
    console.log(`✏️  Applying schema: ${tableName}`);

    await prevPromise;
    return db.query(schema);
  }, Promise.resolve());
}



/**
 * Runner
 */
readSchemaFiles()
  .then(schemas => applyAll(schemas))
  .catch(err => handleExit(err))
  .then(_ => process.exit(0))



// db.connect()
//   .then(client => setup(client, schemas))

module.exports = db;
