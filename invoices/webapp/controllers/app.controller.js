// @ts-nocheck

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "dhl/invoices/Models/Model"
], 

/**
* @param {typeof sap.ui.core.mvc.Controller} Controllers
* @param {typeof sap.m.MessageToast} MessageToasts
*/
function(Controllers,MessageToasts,Model) {
    'use strict';

    return Controllers.extend("dhl.invoices.controllers.app",{

         onInit: function(){

             this.getView().setModel(Model.CreateRecipient());
         
          /** *  let oData ={
                recipient: { name: "Mundo D" }
            };
            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);*/
        },
        onShowHola: function( ){
            MessageToasts.show("Hola desde mensaje de sap.m desde Controlador");
            
           // alert("Hola Mundo desde Controlador");
        }

    });
    
});