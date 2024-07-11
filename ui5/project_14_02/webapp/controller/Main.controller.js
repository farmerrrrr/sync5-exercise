sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sync.d14.project1402.controller.Main", {
        onInit() {
            // list에 배열 데이터로 모델 생성 -> 뷰에 미리 바인딩
            var oJsonData = { 
                list: [
                    { gender: "M", text: "남자" },
                    { gender: "F", text: "여자" }
                ]
            };

            // 모델 생성 후 뷰에 바인딩
            this.getView().setModel(new JSONModel(oJsonData));
            this.byId("idSelect").bindElement("/");
        },

        onClick() {
            var sValue = this.byId("idInput").getValue();
            this.byId("idText").setText(sValue);
        }
    });
});
