
/**
 * Gulp file para la construccion el pokedex
 * 
  * Autor: Jmendez.
  * Versión: 1.0.0
 */
(function(){

    //=============== CONSTANTES PARA DEPENDENCIAS ===============//

    /**
     * Referencia ah gulp que nos permite
     * automatizar tareas.
     * 
     * @type gulp.
     */
    const GULP = require("gulp");
    /**
     * Plugin que gulp que nos permite realizar el
     * minificado de los archivos CSS.
     * 
     * @type gulp-clean-css.
     */
    const GULP_CLEAN_CSS = require("gulp-clean-css");
    /**
     * Plugion de gulp que nos permie realizar
     * la compilacion de archivos less.
     * 
     * @type gulp-less.
     */
    const GULP_LESS = require("gulp-less");

    //=================== CONSTANTES PARA RUTAS ==================//

    /**
     * Ruta en la que estan los archivos less.
     * 
     * @type String.
     */
    const PATH_IN_LESS = "./assets/less/style-pokedex.less";
    /**
     * Ruta de salida de la compilacion.
     * 
     * @type String.
     */
    const PATH_OUT_CSS = "./App/public/css/";

    //========================== TAREAS ==========================//

    /**
     * Tarea para compilar los archivos less.
     * 
     * @param  String   "compile-less"  Nombre de la tarea.
     * @param  Callback  function       Tearea a realizar.
     * 
     * @return void.
     */
    GULP.task("compile-less", () => {

        GULP.src(PATH_IN_LESS)
            //genera la compilacion de los archivos less
            .pipe(GULP_LESS())
            // Minifica el archivo de salida 
            .pipe(GULP_CLEAN_CSS())
            //Coloca el archivo de salida en la ruta de seada.
            .pipe(GULP.dest(PATH_OUT_CSS));
    });//compile-less

})();