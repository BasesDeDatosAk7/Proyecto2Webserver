const userDb = require('../db_apis/user.js');

function getParamsFromRec(req) {
  const params = {
    concurso: req.body.concurso,
    nombre: req.body.nombre

  };
  return params;
}

async function post(req, res, next) {
  try {
    await userDb.enrollUser(getParamsFromRec(req));
    res.status(201).json({ "status" : "user enrolled" });
  } catch (err) {
    next(err);
  }
}

module.exports.post = post;
