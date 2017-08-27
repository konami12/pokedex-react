"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _core = require("./core/");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//======================== CONSTANTES ========================//

/**
 * Se carga la referencia a la clase helpers.
 *
 * @type Class.
 */
/*
 * Module dependencies
 */
var HELPERS = _core2.default.Helpers;
/**
 * Se consigue los valores de la configuracion.
 *
 * @type JSON
 */

/**
 * Exporta todos el archivo index de la caprpeta core
 */
var CONFIG_APP = _core2.default.Config;
/**
 * Referencia a express.
 *
 * @type express
 */
var SERVER = (0, _express2.default)();

//======================= VIEW ENGINE =======================//

//Se indica de donde se tomaran las vistas.
SERVER.set("views", CONFIG_APP.path_views);

//Se indica que motor utilizaremos para rendereo de vistas.
SERVER.set("view engine", CONFIG_APP.view_engine, { path: 5 });

//==================== ARCHIVOS STATICOS ====================//

//permite indicar donde estaran los archivos estaticos del servidor.
SERVER.use(_express2.default.static(CONFIG_APP.path_public));

//===================== MANEJO DE RUTAS ======================//

//manejo de rutas las cuales probienen del archivo Router
SERVER.use(_core2.default.Router);

//====================== INICIALIZACION ======================//

/**
 * Inicializacion sel server.
 *
 * @param Integer   PORT     Puerto por que estara escuhcando el server.
 * @param String    Domain   Domino del pokédex.
 * @param Callback  function Tearea a realizar.
 *
 * return void.
 */
SERVER.listen(CONFIG_APP.port, CONFIG_APP.domain, function (error) {

  HELPERS.msg("Iniciando el servidor", 'i');
  if (error) {
    HELPERS.msg(error, 'e');
    process.exit(1);
    return;
  } //if
  else {
      HELPERS.msg("Servidor listo en " + process.env.DOMAIN, 's');
    }
}); //SERVER.listen