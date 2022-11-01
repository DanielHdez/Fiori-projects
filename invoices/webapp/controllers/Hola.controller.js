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
    return Controllers.extend("dhl.invoices.controllers.Hola",{

         onInit: function(){
          
        },
        onShowHola: function( ){
            
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var srecipient =  this.getView().getModel().getProperty("/recipient/name");
            var mensaje = oBundle.getText("Holamsg",[srecipient]);
          // MessageToasts.show("Hola desde mensaje de sap.m desde Controlador");
            MessageToasts.show(mensaje);
            
           // alert("Hola Mundo desde Controlador");
        }

    });
    
});