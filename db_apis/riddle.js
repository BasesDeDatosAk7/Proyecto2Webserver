const oracledb = require('oracledb');
const database = require('../services/database.js');

const getAcertijoQuery =
 `SELECT * FROM USUARIO`;

async function getAcertijo(context) {
  const result = await database.simpleExecute(getAcertijoQuery, {});
  return result.rows;
}

module.exports.getAcertijo = getAcertijo;
