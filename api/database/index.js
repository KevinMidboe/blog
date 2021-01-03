const configuration = require(`${__base}/config/configuration`).getInstance();
const PostgresDatabase = require(`${__base}/database/postgres`);

const user = configuration.get("database", "user");
const password = configuration.get("database", "password");
const host = configuration.get("database", "host");
const dbName = configuration.get("database", "database");

let postgresDB = new PostgresDatabase(user, password, host, dbName);

postgresDB.connect();

class Database {
};

Database.connect = () => postgresDB.connect();

Database.query = (sql, values) => postgresDB.query(sql, values);
Database.update = (sql, values) => postgresDB.update(sql, values);
Database.get = (sql, values) => postgresDB.get(sql, values);
Database.all = (sql, values) => postgresDB.all(sql, values);

module.exports = Database;
