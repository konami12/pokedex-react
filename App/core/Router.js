/*
 * Module dependencies
 */
import Express from "express";
import Helpers from "./Helpers";
import Api from "./Api";

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
                    votacion    : [`${URL_1}votacion/:pokemon_name`, `${URL_2}/votacion/:pokemon_name`],
                    api         : [`${URL_1}api/:method?/:filter?`, `${URL_2}/api/:method?/:filter?`]
                  };


//===================== MANEJO DE RUTAS ======================//

/**
 * Ruta global para el manejo de variables globales.
 *
 * @type Callback.
 */
ROUTER.use( (req, res, next) => {
    //Declaracion de la variable global
    global.DOMAIN = process.env.DOMAIN;
    /*Uso del midelware de expresss
     se realiza el salto a la siguiente ruta. */
    next();
});

//============================================================//

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
    response.render("home", {title : "Home Page"});
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
    //se realiza la busqueda de pokemons por tipo.
    let pokemons = Api.type(request.params.pokemon_type);
    //status de la respuesta
    response.status(200);
    //respuesta de la petcion
    response.render("home", {title : `Tipo ${request.params.pokemon_type}`});
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
    //se relaiza la peticion de pokemon por nombre.
    let pokemon = Api.name(request.params.pokemon_name);
    //status de la respuesta
    response.status(200);
    //respuesta de la petcion
    response.render("home", {title : `Pokemon ${request.params.pokemon_name}`});
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
    response.render("home", {title : `Votando por ${request.params.pokemon_name}`});
});

//============================================================//

/**
 * Rutas para el manejo del api.
 *
 * @param  Array    Rutas a resolver.
 * @param  Callback Envia la respuesta del servidor.
 *
 * @return void.
 */
ROUTER.get(FULL_URLS.api, (request, response, next) => {

    //cargamos el metodo seleccionado.
    const METHOD = Api[request.params.method];

    //cargamos el filtro.
    const PARAM  = request.params.filter;

    //validamos que el metodo exista en la clase api, en
    //el caso de que no exista se pasa el flujo a la siguiente funcion.
    (METHOD) ? response.status : next("route");

    //validamos que el metodo sea tipo function para enviar el parametro que
    //se mando por la url.
    let data = (typeof METHOD === "function")? METHOD(PARAM) : METHOD;

    //se mandda el status
    response.status(200);
    //se manda la rrespuesta obtenida.
    response.json(data);
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
    let pokemon = Api.random;

    response.render("error", {url : url, title : "Error - 404", pokemon : pokemon.img, name : pokemon.name});
});

//============================================================//

/**
 * Se exporta el router.
 */
export default ROUTER;
