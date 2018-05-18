const userDb = require('../db_apis/user.js');

function getParamsFromRec(req) {
  const params = {
    nombre: req.body.nombre
  };
  return params;
}

async function post(req, res, next) {
  try {
    await userDb.resetHints(getParamsFromRec(req));
    res.status(201).json({ "status" : "hits used reset" });
  } catch (err) {
    next(err);
  }
}

module.exports.post = post;
