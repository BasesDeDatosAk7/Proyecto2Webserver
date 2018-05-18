const userDb = require('../db_apis/user.js');

function getParamsFromRec(req) {
  const params = {
    nombre: req.body.nombre,
    concurso: req.body.concurso
  };
  return params;
}

async function post(req, res, next) {
  try {
    await userDb.abandonContest(getParamsFromRec(req));
    res.status(201).json({ "status" : "contest abandoned" });
  } catch (err) {
    next(err);
  }
}

module.exports.post = post;
