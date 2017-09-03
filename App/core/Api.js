/**
 * Base de datos
 */
import DB from "../dataBase/";

/**
 * Se generar el evneto formatString para el formateo de los parametros.
 *
 * @return string
 */
String.prototype.formatString = function() {
    var ascii   = 0;
    var char    = '';
    var request = '';
    var special = {'á' : 'a', 'é' : 'e',
                   'í' : 'i', 'ó' : 'o',
                   'ú' : 'u', 'ñ' : 'n',
                   '♀' : 'f', '♂': 'm'};
    var string  = this.toLowerCase();

    for (let i in string)
    {
        char = string[i];
        char = (typeof special[char] !== "undefined") ?  special[char] : char;
        if (typeof char !== "function")
        {
            ascii    = char.charCodeAt();
            request += (ascii == 32 || (ascii >= 48  && ascii <= 57) || (ascii >= 97 && ascii <= 122)) ? char : "";
        }
    }
    request = request.split(" ").filter(Boolean);
    return request.join("");
}//String.prototype.formatString = function ()

//====================================================================//

const MIN = 1;
const MAX = DB.length;

//====================================================================//
/**
 * Api para el pokedex.
 *
 * @category   Pokeddex
 * @package    App/Helpers.
 */
class Api
{
    /**
     * Lista todos los pokemons.
     *
     * @type Array.
     */
    static get all()
    {
        return Api.images(DB);
    }//all

    //====================================================================//

    /**
     * Permite generarl la ruta relativa para accedear a la imagen.
     *
     * @param  JSON data Listado de pokemons.
     *
     * @return JSON.
     */
    static images(data) {
        return data.map( item => {
            item.img = `img/pokemons/${item.name.formatString()}.jpg`;
            return item;
        });
    }//images

    //====================================================================//

    static get random() {
        let index   = Math.floor(Math.random() * (MAX - MIN)) + MIN;
        let pokemon = Api.images([ DB[index] ]);
        return pokemon[0];
    }//random

    //====================================================================//

    /**
     * Permite el manjeo de las respuestas.
     *
     * @param  Array result  Respuesta del metodo.
     * @param  String param  Parametro de busqueda.
     *
     * @return Array.
     */
    static request(result, param)
    {
        let response = { request : "bad",  msg : "❌ => Proporcione el parametro de busqueda" };

        if (result.length > 0 )
            response = {request : "success", data :  Api.images(result)};
        else
            response.msg = `🔍 => La busqueda de ${param} no arrojo resultados`;

        return response;
    }//request

    //====================================================================//

    /**
     * Permite la busqueda de un pokemon por coincidencias en el nombre
     * y por nombre completo.
     *
     * @param String param Nombre del pokemon
     *
     * @return Array
     */
    static name(param = null)
    {
        let filterPokemon = param;

        if (param !== null)
        {
            let filter    = param.formatString();
            filterPokemon = DB.reduce( (pokemons, pokemon) => {
                let name = pokemon.name.formatString();
                (name.indexOf(filter) >= 0) && pokemons.push(pokemon);
                return pokemons;
            }, []);
        }//if(param !== null)

        return Api.request(filterPokemon, param);
    }//name

    //====================================================================//

    /**
     * Permite realizar el filtrado de pokemons por tipo.
     *
     * @param  String param Tipo de pokemons a buscar.
     *
     * @return Array.
     */
    static type(param = null)
    {
        let filterPokemon = param;
        if (param !== null)
        {
            let filter    = param.formatString();
            filterPokemon = DB.reduce( (pokemons, pokemon) => {
                let type = pokemon.type.map( item => item.formatString() );
                (type.indexOf(filter) >= 0) && pokemons.push(pokemon);
                return pokemons;
            }, []);
        }//if (param !== null)

        return Api.request(filterPokemon, param);
    }//type
}//Api

//====================================================================//

/**
 * Se exporta la Clase Api
 */
export default Api;
