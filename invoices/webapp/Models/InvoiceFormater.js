sap.ui.define([], 
    function () {
    return{
        invoiceStatus: function(sStatus){
         const ResourceBundle = this.getView().getModel("i18n").getResourceBundle();
         switch (sStatus) {
            case 'A': return ResourceBundle.getText("invoiceStatusA");
            case 'B': return ResourceBundle.getText("invoiceStatusB");
            case 'C': return ResourceBundle.getText("invoiceStatusC");
            default:return sStatus;
         }   
        }
    } 
});