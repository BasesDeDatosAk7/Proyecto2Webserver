const oracledb = require('oracledb');
const database = require('../services/database.js');

const createSql =
 `BEGIN
    NEW_USUARIO(:nombre,:email,:clave,:ciudad);
  END;`;

async function create(emp) {
  const employee = Object.assign({}, emp);

  console.log(employee);

  const result = await database.simpleExecute(createSql, employee);

//  return employee;
}

module.exports.create = create;
