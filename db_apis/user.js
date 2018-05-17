const oracledb = require('oracledb');
const database = require('../services/database.js');

async function registerUser(emp) {
  const registerUserSql =
   `BEGIN
      NEW_USUARIO(:nombre,:email,:clave,:ciudad);
    END;`;
  const user = Object.assign({},emp);
  await database.simpleExecute(registerUserSql,user);
}

module.exports.registerUser = registerUser;

async function login(emp) {

  const userLoginSql =
    `select *
     from usuario
     where idUsuario = 0
     returning email into :email`;

  const employee = Object.assign({}, emp);
  console.log(employee);
  const result = await database.simpleExecute(userLoginSql, employee);
  console.log(employee);
  employee.email = result.outBinds.email[0];
  console.log(employee);

  return employee;
}

module.exports.login = login;
