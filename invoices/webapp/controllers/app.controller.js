// @ts-nocheck

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
   // "dhl/invoices/Models/Model",
   // "sap/ui/model/resource/ResourceModel"
], 

/**
* @param {typeof sap.ui.core.mvc.Controller} Controllers
* @param {typeof sap.m.MessageToast} MessageToasts
*/
function(Controllers,MessageToasts,Model,ResourceModel,Text) {
    'use strict';
    return Controllers.extend("dhl.invoices.controllers.app",{

         onInit: function(){
            // Modelo de los datos
          //   this.getView().setModel(Model.CreateRecipient());
            
            //Modelo de traducciones 

            //var i18nModel= new ResourceModel({bundleName : "dhl.invoices.i18n.i18n"})
           // this.getView().setModel(i18nModel,"i18n");
          /** *  let oData ={
                recipient: { name: "Mundo D" }
            };
            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);*/
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