sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sync.d14.exercise02.controller.Main", {
        // 연산자 모델 정의 후 바인딩
        onInit() {
            var oJsonData = { 
                operator: [ 
                    { op: "+" },
                    { op: "-" },
                    { op: "*" },
                    { op: "/" }
                ]
            };
            this.getView().setModel(new JSONModel(oJsonData), "Operator");
        },

        // 계산 값에 따른 status에 대한 포맷팅 함수
        fnColorFormat(sValue) {
            if(sValue) {
                if(sValue > 100)
                    return "#AAAAAA";
                else   
                    return "#333333";
            }
        },

        // 나눗셈 유효성 검증 함수
        isInvalid(op, n2) {
            return (op === "/" && n2 === 0);
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

        // 히스토리 추가
        addHistory(op, n1, n2, res) {
            var oModel = this.getView().getModel("local");
            var aHistory = oModel.getProperty("/history");
            aHistory.push({
                number1: n1,
                number2: n2,
                operator: op,
                result: res
            });
            oModel.setProperty("/history", aHistory);
        },

        // 결과값 도출 (데이터 가져오고 -> 0 나눗셈 체크하고 -> 계산 -> 히스토리 추가)
        getResult() {
            // input 데이터, selected 데이터(연산자) load
            var iNum1 = Number(this.byId("input1").getValue()),
                iNum2 = Number(this.byId("input2").getValue());
            var sOper = this.byId("select").getSelectedItem().getText();

            // 계산 전 0 나눗셈 유효성 체크
            // 0으로 나누려고 시도 시 결과 값은 0으로 할당
            if (this.isInvalid(sOper, iNum2)) {
                alert("나누는 수가 0이면 안 됩니다.");
                return;
            }

            // 계산 로직 수행
            const nResult = this.calculator(sOper, iNum1, iNum2);
            // 히스토리 데이터 update
            this.addHistory(sOper, iNum1, iNum2, nResult);

            return nResult;
        },

        // [이벤트 함수] 계산 결과 Fragment view 띄우기
        async onOpenResultDialog() {
            // JSON 객체 가져와서 결과값 도출 함수 getresult() 호출
            const nResult = this.getResult();
            
            // 계산 후 Fragment load -> open
            this.oDialog ??= await this.loadFragment({
                name: "sync.d14.exercise02.view.Result"
            });

            // Fragment에 결과 값 뿌리기
            this.byId("resultText").setText(nResult);

            this.oDialog.open();
        },

        // [이벤트 함수] 계산 결과 Fragment view 닫기
        onCloseResultDialog() {
            this.byId("resultDialog").close();
        }
    });
});
