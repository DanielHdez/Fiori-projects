// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../Models/InvoiceFormater",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"

    
],

    /**
    * @param {typeof sap.ui.core.mvc.Controller} Controllers
    * @param {typeof sap.ui.model.json.JSONModel} JSONModel
    * @param {typeof sap.ui.model.Filter} Filter
    * @param {typeof sap.ui.model.FilterOperator} FilterOperator
    */
    function (Controller, JSONModel,InvoiceFormater, Filter, FilterOperator) {
        'use strict';
      
      return Controller.extend("dhl.invoices.controllers.InvoiceListControl",{
        formatter: InvoiceFormater,
        onInit: function(){
          var objViewModel = new JSONModel({
            usd: "USD",
            eur: "EUR"

          });
          this.getView().setModel(objViewModel, "currency");     
        },
        onFilterInvoices: function(oEvent){
          const ArrayFilter = [];
          const sQuery= oEvent.getParameter("query");
          if  (sQuery) {
            //ArrayFilter.push(new Filter("ProductName", "EQ", sQuery));
            ArrayFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
          };

          const oList = this.getView().byId("lista");
          const oBinding = oList.getBinding("items");
          oBinding.filter(ArrayFilter);
        }

      });

        });