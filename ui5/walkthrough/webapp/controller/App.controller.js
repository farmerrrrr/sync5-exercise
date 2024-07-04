sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    // Controller.extend() 으로 controller.App에 대한 내용 확장
    return Controller.extend("ui5.walkthrough.controller.App", {
        onShowHello() {
            alert("Hello World");
        }
    });
});