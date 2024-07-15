/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "sync/d14/chart01/model/models",
        "sap/ui/model/json/JSONModel"
    ],
    function (UIComponent, Device, models, JSONModel) {
        "use strict";

        return UIComponent.extend("sync.d14.chart01.Component", {
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
                    data: [
                        { Category: "Category 1", Value: 10 },
                        { Category: "Category 2", Value: 20 },
                        { Category: "Category 3", Value: 30 },
                        { Category: "Category 4", Value: 40 }
                    ]
                };

                this.setModel(new JSONModel(oData));
            }
        });
    }
);