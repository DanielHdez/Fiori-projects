sap.ui.define([ 
   "sap/m/Text"
],  
/**
 * 
 * @param {typeof sap.m.Text} Text 
 */
    function(Text){

       /**alert("UI5 es correcto"); */ 
        new Text({text:"Hola Mundo desde Content"}).placeAt("content");

});