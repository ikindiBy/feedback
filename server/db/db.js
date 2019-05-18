const pgp = require("pg-promise")();
const db = pgp("postgres://ypunemqs:1GC0ntzSm7CbKOitJOuyh88Pl3vxNXWM@isilo.db.elephantsql.com:5432/ypunemqs");

module.exports = db;