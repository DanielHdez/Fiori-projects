// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],

    /**
    * @param {typeof sap.ui.core.mvc.Controller} Controllers
    * @param {typeof sap.ui.model.json.JSONModel} JSONModel
    */
    function (Controller, JSONModel) {
        'use strict';
      return Controller.extend("dhl.invoices.controllers.InvoiceListControl",{

        onInit: function(){
          var objViewModel = new JSONModel({
            usd: "USD",
            eur: "EUR"

          });
          this.getView().setModel(objViewModel, "currency");     
        }

      });

        });