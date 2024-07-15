sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("sync.d14.example02.controller.Main", {
        onInit: function () {

        },
        async onOpenChart() {
            this.oDialog ??= await this.loadFragment({
                name: "sync.d14.example02.view.Dialog"
            });

            this.oDialog.open();
        },

        onCloseDialog() {
            this.byId("chartDialog").close();
        }
    });
});
