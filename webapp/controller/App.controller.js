sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function(Controller, UIComponent) {
	"use strict";

	return Controller.extend("converted.productdetailview.controller.App", {
		onInit: function() {
			// Get the router instance
			const oRouter = UIComponent.getRouterFor(this);

			// Initialize routing with error handling
			if (oRouter) {
				oRouter.attachBypassed(function(oEvent) {
					const sHash = oEvent.getParameter("hash");
					console.warn(`Route bypassed: ${sHash}`);
					// Handle the bypassed route, e.g., navigate to a default view
				});

        // Navigate to main view if no hash is present
				if (!window.location.hash || window.location.hash === "#") {
					oRouter.navTo("RouteMain");
				}
			} else {
				console.error("Router not found in App controller");
			}
		}
	});
});
