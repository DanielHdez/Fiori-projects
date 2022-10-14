sap.ui.define([
    "sap/ui/core/mvc/XMLView"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.XMLView} XMLView
     * @param {{ placeAt: (arg0: string) => void; }} oView
     */
    function (XMLView) {
     "use strict";
        
        /**Para que el js me de mas información */
        /**alert("UI5 es correcto");
         new Text({text:"Hola Mundo desde Content"}).placeAt("content");*/
         XMLView.create({
            viewName: "dhl.invoices.view.App"
        }).then(
function (oView) {
            oView.placeAt("content");

        });
    });

