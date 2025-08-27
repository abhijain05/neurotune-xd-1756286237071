sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/m/MessageBox",
	"sap/ui/core/library"
], function(Controller, JSONModel, MessageToast, MessageBox, coreLibrary) {
	"use strict";

	const MessageType = coreLibrary.MessageType;

	return Controller.extend("converted.productdetailview.controller.ProductDetailView", {
		onInit: function() {
			// Load mock data
			this._loadData();
		},

		_loadData: function() {
			const oProductModel = new JSONModel();
			oProductModel.loadData("model/mockData/products.json");
			oProductModel.attachRequestCompleted(this._onDataLoadSuccess.bind(this));
			oProductModel.attachRequestFailed(this._onDataLoadError.bind(this));
			this.getView().setModel(oProductModel, "products");
		},

		_onDataLoadSuccess: function() {
			MessageToast.show("Product data loaded successfully!");
		},

		_onDataLoadError: function(oEvent) {
			const oError = oEvent.getParameter("error");
			MessageBox.error(`Error loading product data: ${oError.message}`);
		},


		//More methods would be added below for the button functionality which is to large to fit into the context of this response
	});
});

