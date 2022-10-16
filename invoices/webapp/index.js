// @ts-nocheck
sap.ui.define([
    "sap/ui/core/ComponentContainer"
],
    /**
     * 
     * @param {typeof sap.ui.core.ComponentContainer} ComponentContainer
     */
    function (ComponentContainer) {

        new ComponentContainer({
            name: "dhl.invoices",
            settings: {
                id: "invoices"
            },
            async: true

        }).placeAt("content");
    });

