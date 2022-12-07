// @ts-nocheck
sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"

],
    /**
       * @param {typeof sap.ui.base.ManagedObject} ManagedObject
       * @param {typeof sap.ui.core.Fragment"} Fragment
       */

    function (ManagedObject, Fragment) {
        "use strict"

    
        return ManagedObject.extend("dhl.invoices.controllers.HolaDialogo", {
            constructor: function (oView) {
                this._oView = oView;

            },
            exit: function () {
                delete this._oView;

            },
            open: function () {
                const oView = this._oView;

                if (!oView.byId("HolaDialogo")) {

                    let oFragmentController = {
                        onCloseDialogo: function () {
                            oView.byId("HolaDialogo").close();
                        }
                    };
                    Fragment.load({
                        id: oView.getId(),
                        name: "dhl.invoices.view.HolaDialogo",
                        controller: oFragmentController
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else {
                    oView.byId("HolaDialogo").open();
                }
            }
        });
    });