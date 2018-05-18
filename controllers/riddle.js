const usuarioDb = require('../db_apis/riddle.js');

function getParamsFromRec(req) {
  const params = {
    usuario: req.body.usuario,
    concurso: req.body.concurso
  };

  return params;
}

async function post(req, res, next) {
  try {
    let params = getParamsFromRec(req);
    const rows  = await usuarioDb.getAcertijo(params);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}

module.exports.post = post;
