/*
 * Module dependencies
 */
import Express from "express";
import Helpers from "./Helpers";

//======================== CONSTANTES ========================//

/**
 * Referencia al manejador de rutas en express
 * 
 * @type Express.router
 */
const ROUTER = Express.Router();
/**
 * Rutas generales.
 * 
 * @type Array.
 */
const URL_1 = '/';
const URL_2 = '/pokedex';
/**
 * Listad de rutas.
 * 
 * @type JSON
 */
const FULL_URLS = {
                    home        : [URL_1, URL_2], 
                    filter_type : [`${URL_1}type/:pokemon_type`, `${URL_2}/type/:pokemon_type`],
                    filter_name : [`${URL_1}pokemon/:pokemon_name`, `${URL_2}/pokemon/:pokemon_name`],
                    votacion    : [`${URL_1}votacion/:pokemon_name`, `${URL_2}/votacion/:pokemon_name`]
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
ROUTER.get(FULL_URLS.home, (request, response) => {
    //mensaje que se mostrara en consola.
    Helpers.msg("Solicitando Homepage", 's');
    //status de la respuesta
    response.status(200);
    //respuesta de la petcion
    response.render("home", {title : "Home Page", path : process.env.DOMAIN});
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
ROUTER.get(FULL_URLS.filter_type, (request, response) => {
    //mensaje que se mostrara en consola.
    Helpers.msg(`Filtrado pokemons por ${request.params.pokemon_type}`, 's');
    //status de la respuesta
    response.status(200);
    //respuesta de la petcion
    response.render("home", {title : `Tipo ${request.params.pokemon_type}`, path : process.env.DOMAIN});

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
ROUTER.get(FULL_URLS.filter_name, (request, response) => {
    //mensaje que se mostrara en consola.
    Helpers.msg(`Buscando a ${request.params.pokemon_name}`, 's');
    //status de la respuesta
    response.status(200);
    //respuesta de la petcion
    response.render("home", {title : `Pokemon ${request.params.pokemon_name}`, path : process.env.DOMAIN});
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
ROUTER.get(FULL_URLS.votacion, (request, response) => {
    //mensaje que se mostrara en consola.
    Helpers.msg(`Votando por  ${request.params.pokemon_name}`, 's');
    //status de la respuesta
    response.status(200);
    //respuesta de la petcion
    response.render("home", {title : `Votando por ${request.params.pokemon_name}`, path : process.env.DOMAIN});
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
ROUTER.use((request, response) => {
    let url = `${process.env.DOMAIN}${request.url}`;
    //mensaje que se mostrara en consola.
    Helpers.msg(`solicitando ${request.path}`, 'e');
    //status de la respuesta
    response.status(404);
    //respuesta de la petcion
    response.render("error", {url : url, title : "Error - 404", path : process.env.DOMAIN});
});

//============================================================//

/**
 * Se exporta el router.
 */
export default ROUTER;