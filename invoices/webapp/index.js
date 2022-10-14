sap.ui.define([
    "sap/ui/core/mvc/XMLView"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.XMLView} PEPE
     */
    function (PEPE) {
     "use strict";
        
        /**Para que el js me de mas información */
        /**alert("UI5 es correcto");
         new Text({text:"Hola Mundo desde Content"}).placeAt("content");*/
         PEPE.create({
            viewName: "dhl.invoices.view.App"
        }).then(function (oView) {
            oView.placeAt("content");

        });
    });

