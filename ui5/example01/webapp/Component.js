/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "sync/d14/example01/model/models",
        "sap/ui/model/json/JSONModel"
    ],
    function (UIComponent, Device, models, JSONModel) {
        "use strict";

        return UIComponent.extend("sync.d14.example01.Component", {
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
                        { name: "James", dept: "Human Resources", gender: "남" },
                        { name: "James", dept: "Human Resources", gender: "여" },
                        { name: "Mary", dept: "Customer Service", gender: "여" },
                        { name: "Jin", dept: "Customer Service", gender: "남" },
                        { name: "Lee", dept: "Customer Service", gender: "남" }
                    ]
                };
                this.setModel(new JSONModel(oData), "data");

                var oGenderData = {
                    gender: [
                        { gender: "남" },
                        { gender: "여" }
                    ]
                };

                this.setModel(new JSONModel(oGenderData), "gender");
            }
        });
    }
);