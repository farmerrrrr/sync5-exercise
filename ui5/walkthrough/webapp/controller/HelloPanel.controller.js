sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    // Controller.extend() 으로 controller.HelloPanel에 대한 내용 확장
    return Controller.extend("ui5.walkthrough.controller.HelloPanel", {
        onShowHello() {
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg", [sRecipient]);

            MessageToast.show(sMsg);
        },

        // fragment view를 찾아 로딩이 완료되면 oDialog 객체를 생성
        async onOpenDialog() {
            // 이미 만들어져 있을 경우 객체 생성 X (?? 연산자)
            this.oDialog ??= await this.loadFragment({
                name: "ui5.walkthrough.view.HelloDialog"
            });

            this.oDialog.open();
        },

        onCloseDialog() {
            this.byId("helloDialog").close();
        }
    });
});