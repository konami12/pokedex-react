/*
 * Module dependencies
 */
import Colors from "cli-color";
/**
 * Permite manejar el mensaje de log.
 * 
 * @type console.log.
 */
const LOG = console.log;

//============================================================//

/**
 * Buscador ui-reflex.
 *
 * @category   Pokeddex
 * @package    App/Helpers.
 */
class Helpers
{
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
    static msg(text, type = "")
    {
        let log = "";
        let msg = "";
        let lon = (text.length < 90) ? (100 - text.length) : 0;
        switch (type) 
        {
            case "e":
                log = Colors.xterm(15).bgXterm(124).bold;
                msg = " ERROR   ";
            break;
            case "s":
                log = Colors.xterm(15).bgXterm(34).bold;
                msg = " SUCCESS ";
            break;
            case "w":
                log = Colors.xterm(232).bgXterm(214).bold;
                msg = " WARNING ";
            break;
            default:
                log = Colors.xterm(15).bgXterm(12).bold;
                msg = " INFO    ";
            break;
        }
        for (let i = 0 ; i < lon ; i++){text += " ";}
        LOG(log(" [" + msg + "] => " + text ));
    }//msg

}//Helpers

/**
 * Se exporta la Clase Helpers
 */
export default Helpers;