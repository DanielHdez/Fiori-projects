//@ts-nocheck
sap.ui.define([

    "sap/ui/core/UIComponent",
    "dhl/invoices/Models/Model",
    "sap/ui/model/resource/ResourceModel",
    "./controllers/HolaDialogo"
],

    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     * 
     */

    function (UIComponent, Model, ResourceModel, HolaDialogo) {

        return UIComponent.extend("dhl.invoices.Component", {

            metadata: {
                manifest: "json",
                // rootView: {
                //     "viewName": "dhl.invoices.view.App",
                //     "type": "XML",
                //     "async": true,
                //     "id": "app"
                // }
            },

            init: function () {
                //Llamamos al init
                UIComponent.prototype.init.apply(this, arguments);
                // Modelo de los datos
                this.setModel(Model.CreateRecipient());

                //Modelo de traducciones 

                var i18nModel = new ResourceModel({ bundleName: "dhl.invoices.i18n.i18n" })
                this.setModel(i18nModel, "i18n");

                this._HolaDialogo = new HolaDialogo(this.getRootControl());

            },

            exit: function(){
                this._HolaDialogo.destroy();
                delete this._HolaDialogo;
            },

            onOpenHelloDialog :function(){
                this._HolaDialogo.open();
            }


        });

    });