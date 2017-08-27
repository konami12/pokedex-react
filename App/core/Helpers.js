"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Module dependencies
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _cliColor = require("cli-color");

var _cliColor2 = _interopRequireDefault(_cliColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Permite manejar el mensaje de log.
 * 
 * @type console.log.
 */
var LOG = console.log;

//============================================================//

/**
 * Buscador ui-reflex.
 *
 * @category   Pokeddex
 * @package    App/Helpers.
 */

var Helpers = function () {
    function Helpers() {
        _classCallCheck(this, Helpers);
    }

    _createClass(Helpers, null, [{
        key: "msg",

        /**
         * Permite el envio de mensajes
         * 
         * @param  String text Mensaje que se desea mostrar.
         * @param  String type (Optional) Tipo de mensaje 
         *
         * e = error
         * s = succses
         * w = warning
         * default = info
         * 
         * @return void.
         */
        value: function msg(text) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

            var log = "";
            var msg = "";
            var lon = text.length < 90 ? 100 - text.length : 0;
            switch (type) {
                case "e":
                    log = _cliColor2.default.xterm(15).bgXterm(124).bold;
                    msg = " ERROR   ";
                    break;
                case "s":
                    log = _cliColor2.default.xterm(15).bgXterm(34).bold;
                    msg = " SUCCESS ";
                    break;
                case "w":
                    log = _cliColor2.default.xterm(232).bgXterm(214).bold;
                    msg = " WARNING ";
                    break;
                default:
                    log = _cliColor2.default.xterm(15).bgXterm(12).bold;
                    msg = " INFO    ";
                    break;
            }
            for (var i = 0; i < lon; i++) {
                text += " ";
            }
            LOG(log(" [" + msg + "] => " + text));
        } //msg

    }]);

    return Helpers;
}(); //Helpers

/**
 * Se exporta la Clase Helpers
 */


exports.default = Helpers;