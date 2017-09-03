/*
 * Module dependencies.
 */
import Api from "./Api";
import Config from "./Config";
import Helpers from "./Helpers";
import Router from "./Router";
//===================================================//

/**
 * Variable de entorno.
 */
process.env.DOMAIN = `http://${Config.domain}:${Config.port}`;

//===================================================//

/**
 * Export modules.
 */
export default {
    Api,
    Config,
    Helpers,
    Router
};
