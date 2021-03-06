const userDb = require('../db_apis/user.js');

function getParamsFromRec(req) {
  const params = {
    nombre: req.body.nombre,
    clave: req.body.clave
  };
  return params;
}

async function post(req, res, next) {
  try {
    const status = await userDb.login(getParamsFromRec(req));

    res.status(201).json(status);

    console.log(res);

  } catch (err) {
    next(err);
  }
}

module.exports.post = post;
