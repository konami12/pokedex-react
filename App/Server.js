/*
 * Module dependencies
 */
import Express from "express";
/**
 * Exporta todos el archivo index de la caprpeta core
 */
import Core from "./core/";

//======================== CONSTANTES ========================//

/**
 * Se carga la referencia a la clase helpers.
 *
 * @type Class.
 */
const HELPERS = Core.Helpers;
/**
 * Se consigue los valores de la configuracion.
 *
 * @type JSON
 */
const CONFIG_APP = Core.Config;
/**
 * Referencia a express.
 *
 * @type express
 */
const SERVER = Express();

//======================= VIEW ENGINE =======================//

SERVER.set("port", CONFIG_APP.port);

//======================= VIEW ENGINE =======================//

//Se indica de donde se tomaran las vistas.
SERVER.set("views", CONFIG_APP.path_views);

//Se indica que motor utilizaremos para rendereo de vistas.
SERVER.set("view engine", CONFIG_APP.view_engine, {path:5});

//==================== ARCHIVOS STATICOS ====================//

//permite indicar donde estaran los archivos estaticos del servidor.
SERVER.use(Express.static(CONFIG_APP.path_public));

//===================== MANEJO DE RUTAS ======================//

//manejo de rutas las cuales probienen del archivo Router
SERVER.use(Core.Router);


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
SERVER.listen(SERVER.get("port"), CONFIG_APP.port, "pokedex-taller.herokuapp.com" ,(error) => {

    HELPERS.msg("Iniciando el servidor", 'i');
    if (error)
    {
        HELPERS.msg(error, 'e');
        process.exit(1);
        return;
    }//if
    else
    {
        HELPERS.msg(`Servidor listo en ${process.env.DOMAIN}`, 's');
    }
});//SERVER.listen
