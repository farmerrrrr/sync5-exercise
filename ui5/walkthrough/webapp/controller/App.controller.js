sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {
    "use strict";

    // Controller.extend() 으로 controller.App에 대한 내용 확장
    return Controller.extend("ui5.walkthrough.controller.App", {
        onInit(){
            const oData = {
                recipient: {
                    name: "World"
                }
            };
            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onShowHello() {
            MessageToast.show("Hello World");
        }
    });
});