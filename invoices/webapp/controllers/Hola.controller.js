// @ts-nocheck

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
],

    /**
    * @param {typeof sap.ui.core.mvc.Controller} Controllers
    * @param {typeof sap.m.MessageToast} MessageToasts
    * @param {typeof sap.ui.core.Fragment"} Fragment
    */
    function (Controllers, MessageToasts, Fragment) {
        'use strict';
        return Controllers.extend("dhl.invoices.controllers.Hola", {

            onInit: function () {

            },
            onShowHola: function () {

                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var srecipient = this.getView().getModel().getProperty("/recipient/name");
                var mensaje = oBundle.getText("Holamsg", [srecipient]);
                // MessageToasts.show("Hola desde mensaje de sap.m desde Controlador");
                MessageToasts.show(mensaje);

                // alert("Hola Mundo desde Controlador");
            },
            onOpenDialog: function () {
                const oView = this.getView();
            if (!this.byId("HolaDialogo")){
                Fragment.load({
                    id: oView.getId(),
                    name: "dhl.invoices.view.HolaDialogo",
                    controller: this
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    oDialog.open();
                });
            } else {
                this.byId("HolaDialogo").open();
            }

            },

            onCloseDialogo: function(){
                this.byId("HolaDialogo").close();

            }

        });

    });