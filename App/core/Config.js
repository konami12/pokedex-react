"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Se realiza la exportacion de la configuracion.
 */
exports.default = {
  /**
   * Domino en el que se desplegara nuestro pokedex.
   */
  domain: process.env.PORT ? "pokedex-taller.herokuapp.com" : "localhost",
  /**
   * Ruta en la que estaran nuestros CSS, JS y imagenes.
   */
  path_public: "./App/public",
  /**
   * Ruta en la que estaran las vistas que menejaremos
   */
  path_views: "./App/views",
  /**
   * Puerto que escuchara nuestro servidor.
   */
  port: process.env.PORT || 81,
  /**
   * Nombre del motro de vistas que se utilizara.
   */
  view_engine: "pug"
};