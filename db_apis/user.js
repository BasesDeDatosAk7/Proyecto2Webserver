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
    `BEGIN
      :ret := CHECK_USUARIO(:usuario, :clave);
     END;`;

  const binds = {ret:  { dir: oracledb.BIND_OUT, type: oracledb.STRING, maxSize: 40 }};

  await database.simpleExecute(userLoginSql, binds,
    function (err, result) {
      if (err) { console.error(err.message); return; }
      console.log(result.outBinds);
    });

  console.log(result.outBinds);

  return result;
}

module.exports.login = login;

async function enrollUser(emp) {
  const userEnrollSql = `BEGIN
                          REGISTER_PARTICIPANTE(:concurso, :nombre);
                         END;`;
  const params = Object.assign({},emp);
  await database.simpleExecute(userEnrollSql,params);
}

module.exports.enrollUser = enrollUser;

async function resetHints(emp) {
  const resetHintsSql = `BEGIN
                          RESET_PISTAS(:nombre);
                         END;`;
  const params = Object.assign({},emp);
  await database.simpleExecute(resetHintsSql,params);
}

module.exports.resetHints = resetHints;

async function abandonContest(emp) {
  const abandonContestSql = `BEGIN
                              SET_ABANDONO(:nombre, :concurso);
                             END;`;
  const params = Object.assign({},emp);
  await database.simpleExecute(abandonContestSql,params);
}

module.exports.abandonContest = abandonContest;

async function passRiddle(emp) {
  const passRiddleSql = `BEGIN
                         CHECK_RESPUESTA(:nombre, :concurso);
                        END;`;
  const params = Object.assign({},emp);
  await database.simpleExecute(passRiddleSql,params);
}

module.exports.passRiddle = passRiddle;
