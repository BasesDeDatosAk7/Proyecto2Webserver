const usuarioDb = require('../db_apis/usuario.js');

async function get(req, res, next) {
  try {
    const context = {};

    context.id = parseInt(req.params.id, 10);

    const rows = await usuarioDb.find(context);

    if (req.params.id) {
      if (rows.length === 1) {
        res.status(200).json(rows[0]);
      } else {
        res.status(404).end();
      }
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.get = get;

function getUsuarioFromRec(req) {
  const usuario = {
    idUsuario: req.body.idUsuario,
    idPais: req.body.idPais,
    idCiudad: req.body.idCiudad,
    nombre: req.body.nombre,
    email: req.body.email,
    clave: req.body.clave,
    pistasUsadas: req.body.pistasUsadas
  };

  return usuario;
}

async function post(req, res, next) {
  try {
    let usuario = getUsuarioFromRec(req);
    usuario = await usuarioDb.create(usuario);
    res.status(201).json(usuario);
  } catch (err) {
    next(err);
  }
}

module.exports.post = post;
