/*
 * Module dependencies.
 */
import Helpers from "./Helpers";
import Config from "./Config";
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
export default {Helpers, Config, Router};