const userDb = require('../db_apis/user.js');

function getUsuarioFromRec(req) {
  const usuario = {
    nombre: req.body.nombre,
    email: req.body.email,
    clave: req.body.clave,
    ciudad: req.body.ciudad
  };
  return usuario;
}

async function post(req, res, next) {
  try {
    await userDb.registerUser(getUsuarioFromRec(req));
    res.status(201).json({ status: "user created" });
  } catch (err) {
    next(err);
  }
}

module.exports.post = post;
