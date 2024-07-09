sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("sync.d14.fe01.controller.Main", {
        onClick: function () {
            let msg = this.getView().getModel().getProperty("/msg");
            if(!msg)
                msg = "메세지를 입력바랍니다."
            MessageToast.show(msg);
        }
    });
});
