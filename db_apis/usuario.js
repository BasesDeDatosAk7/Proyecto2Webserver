const oracledb = require('oracledb');
const database = require('../services/database.js');

const baseQuery =
 `select idUsuario "idUsuario",
    idPais "idPais",
    idCiudad "idCiudad",
    nombre "nombre",
    email "email",
    clave "clave",
    pistasUsadas "pistasUsadas"
  from usuario`;

async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
    binds.idUsuario = context.id;

    query += `\nwhere idUsuario = :idUsuario`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;

const createSql =
 `insert into usuario (
   idPais,
   idCiudad,
   nombre,
   email,
   clave,
   pistasUsadas
 ) values (
   :idPais,
   :idCiudad,
   :nombre,
   :email,
   :clave,
   :pistasUsadas
 ) returning idUsuario into :idUsuario`;

async function create(usr) {
  const usuario = Object.assign({}, usr);

  usuario.idUsuario = {
  dir: oracledb.BIND_OUT,
    type: oracledb.NUMBER
  }

  const result = await database.simpleExecute(createSql, usuario);

  usuario.idUsuario = result.outBinds.idUsuario[0];

  return usuario;
}
/*
async function create(emp) {
  const employee = Object.assign({}, emp);

  employee.employee_id = {
    dir: oracledb.BIND_OUT,
    type: oracledb.NUMBER
  }

  const result = await database.simpleExecute(createSql, employee);

  employee.employee_id = result.outBinds.employee_id[0];

  return employee;
}
*/
module.exports.create = create;
