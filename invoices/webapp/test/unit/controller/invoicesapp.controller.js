/*global QUnit*/

sap.ui.define([
	"dhl/invoices/controller/invoicesapp.controller"
], function (Controller) {
	"use strict";

	QUnit.module("invoicesapp Controller");

	QUnit.test("I should test the invoicesapp controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
