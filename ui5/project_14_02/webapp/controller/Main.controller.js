sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("sync.d14.project1402.controller.Main", {
        onInit: function () {

        },

        onClick() {
            var sValue = this.byId("idInput").getValue();
            this.byId("idText").setText(sValue);
        }
    });
});
