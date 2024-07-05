sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], (Controller, MessageToast, JSONModel, ResourceModel) => {
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

            // view에 리소스 모델(언어) 연결
            const i18nModel = new ResourceModel({
                bundleName: "ui5.walkthrough.i18n.i18n"
            })
            this.getView().setModel(i18nModel, "i18n");
        },

        onShowHello() {
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg", [sRecipient]);

            MessageToast.show(sMsg);
        }
    });
});