const express  = require('express');
const router   = new express.Router();
const register = require('../controllers/register')
const login    = require('../controllers/login')
const riddle   = require('../controllers/riddle')
const enroll   = require('../controllers/enroll')
const hints    = require('../controllers/hints')
const abandon  = require('../controllers/abandon')

router.get('/test', function (req, res) {
  res.send('[{"status":"active"},{"status":"deactivated"}]');
});

router.route('/register')
  /// registra un nuevo usuario
  /// json{nombre, email, clave, ciudad}
  /// NEW_USUARIO
  .post(register.post);

router.route('/login')
  /// logea un usuario en la base de datos
  /// json{nombre clave}
  /// CHECK_USUARIO
  .post(login.post);

router.route('/riddle')
    .post(riddle.post);

router.route('/hints')
/// resetea el contador de pistas de un usuario
/// json{nombre}
/// RESET_PISTAS
    .post(hints.post);

router.route('/contest/passed')
/// el usuario cumplio con el acertijo
/// json{nombre, concurso}
/// CHECK_RESPUESTA
    .post(passed.post);

router.route('/contest/enroll')
/// inscribe un usuario en un concurso
/// json{nombre, concurso}
/// REGISTER_PARTICIPANTE
    .post(enroll.post);

router.route('/contest/abandon')
/// retira el usuario de un concurso
/// json{nombre, concurso}
/// SET_ABANDONO
    .post(abandon.post);

router.route('/contest/win')
/// retira el usuario de un concurso
/// json{nombre, concurso}
/// SET_GANADOR
    .post(win.post);

/*
router.route('/concurso')
  .put(concurso.put);
*/

module.exports = router;
