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

    console.log(status);

    res.status(201).json({ status: status});

    console.log(res);

  } catch (err) {
    next(err);
  }
}

module.exports.post = post;
