// @ts-nocheck

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], 

/**
* @param {typeof sap.ui.core.mvc.Controller} Controllers
* @param {typeof sap.m.MessageToast} MessageToasts
*/
function(Controllers,MessageToasts) {
    'use strict';

    return Controllers.extend("dhl.invoices.controllers.app",{
        
        onShowHola: function( ){
            MessageToasts.show("Hola desde mensaje de sap.m desde Controlador");
            
           // alert("Hola Mundo desde Controlador");
        }

    });
    
});