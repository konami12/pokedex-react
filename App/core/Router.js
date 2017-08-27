"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _Helpers = require("./Helpers");

var _Helpers2 = _interopRequireDefault(_Helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//======================== CONSTANTES ========================//

/**
 * Referencia al manejador de rutas en express
 * 
 * @type Express.router
 */
/*
 * Module dependencies
 */
var ROUTER = _express2.default.Router();
/**
 * Rutas generales.
 * 
 * @type Array.
 */
var URL_1 = '/';
var URL_2 = '/pokedex';
/**
 * Listad de rutas.
 * 
 * @type JSON
 */
var FULL_URLS = {
  home: [URL_1, URL_2],
  filter_type: [URL_1 + "type/:pokemon_type", URL_2 + "/type/:pokemon_type"],
  filter_name: [URL_1 + "pokemon/:pokemon_name", URL_2 + "/pokemon/:pokemon_name"],
  votacion: [URL_1 + "votacion/:pokemon_name", URL_2 + "/votacion/:pokemon_name"]
};

//===================== MANEJO DE RUTAS ======================//

/**
 * Home page.
 * 
 * @param  Array    Rutas a resolver.
 * @param  Callback Envia la respuesta del servidor.
 * 
 * @return void.
 */
ROUTER.get(FULL_URLS.home, function (request, response) {
  //mensaje que se mostrara en consola.
  _Helpers2.default.msg("Solicitando Homepage", 's');
  //status de la respuesta
  response.status(200);
  //respuesta de la petcion
  response.render("home", { title: "Home Page", path: process.env.DOMAIN });
});

//============================================================//

/**
 * Filtrado de pokemons por tipo.
 * 
 * @param  Array    Rutas a resolver.
 * @param  Callback Envia la respuesta del servidor.
 * 
 * @return void.
 */
ROUTER.get(FULL_URLS.filter_type, function (request, response) {
  //mensaje que se mostrara en consola.
  _Helpers2.default.msg("Filtrado pokemons por " + request.params.pokemon_type, 's');
  //status de la respuesta
  response.status(200);
  //respuesta de la petcion
  response.render("home", { title: "Tipo " + request.params.pokemon_type, path: process.env.DOMAIN });
});

//============================================================//

/**
 * Buscando pokemon por nombre.
 * 
 * @param  Array    Rutas a resolver.
 * @param  Callback Envia la respuesta del servidor.
 * 
 * @return void.
 */
ROUTER.get(FULL_URLS.filter_name, function (request, response) {
  //mensaje que se mostrara en consola.
  _Helpers2.default.msg("Buscando a " + request.params.pokemon_name, 's');
  //status de la respuesta
  response.status(200);
  //respuesta de la petcion
  response.render("home", { title: "Pokemon " + request.params.pokemon_name, path: process.env.DOMAIN });
});

//============================================================//

/**
 * Vota por tu pokemos favorito.
 * 
 * @param  Array    Rutas a resolver.
 * @param  Callback Envia la respuesta del servidor.
 * 
 * @return void.
 */
ROUTER.get(FULL_URLS.votacion, function (request, response) {
  //mensaje que se mostrara en consola.
  _Helpers2.default.msg("Votando por  " + request.params.pokemon_name, 's');
  //status de la respuesta
  response.status(200);
  //respuesta de la petcion
  response.render("home", { title: "Votando por " + request.params.pokemon_name, path: process.env.DOMAIN });
});

//============================================================//

/**
 * Error 404, este se ejecuta siempre que no se pueda resolver algunas de las rutas
 * definidas con anterioridad
 * 
 * @param  Callback   Envia la respuesta del servidor.
 * 
 * @return void.
 */
ROUTER.use(function (request, response) {
  var url = "" + process.env.DOMAIN + request.url;
  //mensaje que se mostrara en consola.
  _Helpers2.default.msg("solicitando " + request.path, 'e');
  //status de la respuesta
  response.status(404);
  //respuesta de la petcion
  response.render("error", { url: url, title: "Error - 404", path: process.env.DOMAIN });
});

//============================================================//

/**
 * Se exporta el router.
 */
exports.default = ROUTER;