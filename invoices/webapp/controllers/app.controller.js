// @ts-nocheck

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], 

/**
* @param {typeof sap.ui.core.mvc.Controller} Controllers
* @param {typeof sap.m.MessageToast} MessageToasts
* @param {typeof sap.ui/model.json.JSONModel} JSONModel
*/
function(Controllers,MessageToasts,JSONModel) {
    'use strict';

    return Controllers.extend("dhl.invoices.controllers.app",{

         onInit: function( ){
            let oData ={
                recipient: { name: "Mundo D" }
            };
            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },
        onShowHola: function( ){
            MessageToasts.show("Hola desde mensaje de sap.m desde Controlador");
            
           // alert("Hola Mundo desde Controlador");
        }

    });
    
});