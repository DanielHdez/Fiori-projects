
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], 

/**
* @param {typeof sap.ui.core.mvc.Controller} Controlador
*/
function(Controlador) {
    'use strict';

    return Controlador.extend("dhl.invoices.controllers.app",{
        
        onShowHola: function( ){
            alert("Hola Mundo desde Controlador");
        }

    });
    
});