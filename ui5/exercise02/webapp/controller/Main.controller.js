sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sync.d14.exercise02.controller.Main", {
        isDivision(op) {
            return op === "/";
        },

        calculator(op, n1, n2) {
            switch (op) {
                case "+": return n1 + n2;
                case "-": return n1 - n2;
                case "*": return n1 * n2;
                case "/": return n1 / n2;
            }
        },

        getResult(obj) {
            var iNum1 = Number(obj.number1), iNum2 = Number(obj.number2);
            var sOper = obj.operator;

            if (this.isDivision(sOper)) 
                if (iNum2 === 0) {
                    alert("나누는 수가 0이면 안 됩니다.");
                    return;
                }

            obj.result = this.calculator(sOper, iNum1, iNum2);
        },

        setOperator(op) {
            var oModel = this.getView().getModel();
            oModel.oData.operator = op;
        },

        onSetOperator_add() {
            this.setOperator("+");
        },
        onSetOperator_sub() {
            this.setOperator("-");
        },
        onSetOperator_mul() {
            this.setOperator("*");
        },
        onSetOperator_div() {
            this.setOperator("/");
        },

        async onOpenResultDialog() {
            this.getResult(this.getView().getModel().oData);
            this.oDialog ??= await this.loadFragment({
                name: "sync.d14.exercise02.view.Result"
            });
            this.oDialog.open();
        },

        onCloseResultDialog() {
            this.byId("resultDialog").close();
        }
    });
});
