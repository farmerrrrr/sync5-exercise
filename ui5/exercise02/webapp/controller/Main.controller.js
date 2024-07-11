sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sync.d14.exercise02.controller.Main", {
        // 나눗셈 체크 함수
        isDivision(op) {
            return op === "/";
        },

        // 계산 함수
        calculator(op, n1, n2) {
            switch (op) {
                case "+": return n1 + n2;
                case "-": return n1 - n2;
                case "*": return n1 * n2;
                case "/": return n1 / n2;
            }
        },

        // 결과값 도출 (데이터 가져오고 -> 0 나눗셈 체크하고 -> 계산)
        getResult(obj) {
            // input 데이터 load
            var iNum1 = Number(obj.number1), iNum2 = Number(obj.number2);
            var sOper = obj.operator;

            // 계산 전 0 나눗셈 체크
            if (this.isDivision(sOper)) 
                if (iNum2 === 0) {
                    alert("나누는 수가 0이면 안 됩니다.");
                    return;
                }

            // 계산 로직 수행
            obj.result = this.calculator(sOper, iNum1, iNum2);
        },

        // 내부 연산자 설정 함수
        setOperator(op) {
            var oModel = this.getView().getModel();
            oModel.oData.operator = op;
        },

        // [이벤트 함수] 버튼 설정 이벤트 함수 연산자별 분리
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

        // [이벤트 함수] 계산 결과 Fragment view 띄우기
        async onOpenResultDialog() {
            // JSON 객체 가져와서 결과값 도출 함수 getresult() 호출
            this.getResult(this.getView().getModel().oData);
            
            // 계산 후 Fragment load -> open
            this.oDialog ??= await this.loadFragment({
                name: "sync.d14.exercise02.view.Result"
            });
            this.oDialog.open();
        },

        // [이벤트 함수] 계산 결과 Fragment view 닫기
        onCloseResultDialog() {
            this.byId("resultDialog").close();
        }
    });
});
