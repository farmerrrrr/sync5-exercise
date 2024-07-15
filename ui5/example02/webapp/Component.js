/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "sync/d14/example02/model/models",
        "sap/ui/model/json/JSONModel"
    ],
    function (UIComponent, Device, models, JSONModel) {
        "use strict";

        return UIComponent.extend("sync.d14.example02.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                var oData = {
                    list: [
                        { area: "A Area", product: "A Product", result: "10" },
                        { area: "B Area", product: "B Product", result: "20" },
                        { area: "C Area", product: "C Product", result: "30" },
                        { area: "D Area", product: "D Product", result: "40" },
                        { area: "E Area", product: "E Product", result: "50" }
                    ]
                };
                this.setModel(new JSONModel(oData), "data");
            }
        });
    }
);