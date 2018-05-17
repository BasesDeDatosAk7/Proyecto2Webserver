const registerDb = require('../db_apis/register.js');

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
    let usuario = getUsuarioFromRec(req);
    usuario = await registerDb.create(usuario);
    res.status(201).json(usuario);
  } catch (err) {
    next(err);
  }
}

module.exports.post = post;
