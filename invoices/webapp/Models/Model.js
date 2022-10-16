//@ts-nocheck
sap.ui.define([
    "sap/ui/model/json/JSONModel"
], 
/**
* @param {typeof sap.ui.model.json.JSONModel} JSONModel
*/
function(JSONModel) {
    'use strict';
    return {
        CreateRecipient: function() {
            var oData = {
                recipient: {
                    name: "Mundo de model"
                }     
            };
            return new JSONModel(oData);
        }
    }
});