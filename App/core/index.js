"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Helpers = require("./Helpers");

var _Helpers2 = _interopRequireDefault(_Helpers);

var _Config = require("./Config");

var _Config2 = _interopRequireDefault(_Config);

var _Router = require("./Router");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//===================================================//

/**
 * Variable de entorno.
 */
process.env.DOMAIN = "//" + _Config2.default.domain + ":" + _Config2.default.port;

//===================================================//

/**
 * Export modules.
 */
/*
 * Module dependencies.
 */
exports.default = { Helpers: _Helpers2.default, Config: _Config2.default, Router: _Router2.default };