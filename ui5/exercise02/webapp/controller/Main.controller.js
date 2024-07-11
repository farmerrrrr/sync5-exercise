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
      
            console.log(this.getView().getModel("Operator"));
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

        // 결과값 도출 (데이터 가져오고 -> 0 나눗셈 체크하고 -> 계산)
        getResult() {
            // input 데이터, selected 데이터(연산자) load
            var oModel = this.getView().getModel();
            var iNum1 = Number(oModel.getProperty('/number1')),
                iNum2 = Number(oModel.getProperty('/number2'));
            var sOper = this.byId("select").getSelectedItem().getText();

            // 계산 전 0 나눗셈 유효성 체크
            // 0으로 나누려고 시도 시 결과 값은 0으로 할당
            if (this.isInvalid(sOper, iNum2)) {
                alert("나누는 수가 0이면 안 됩니다.");
                obj.setProperty('/result', 0);
                return;
            }

            // 계산 로직 수행
            const result = this.calculator(sOper, iNum1, iNum2);
            oModel.setProperty('/result', result);
        },

        // // 내부 연산자 설정 함수
        // setOperator(op) {
        //     this.getView().getModel().setProperty('/operator', op);
        // },

        // // [이벤트 함수] 버튼 설정 이벤트 함수 연산자별 분리
        // onSetOperator_add() {
        //     this.setOperator("+");
        // },
        // onSetOperator_sub() {
        //     this.setOperator("-");
        // },
        // onSetOperator_mul() {
        //     this.setOperator("*");
        // },
        // onSetOperator_div() {
        //     this.setOperator("/");
        // },

        // [이벤트 함수] 계산 결과 Fragment view 띄우기
        async onOpenResultDialog() {
            // JSON 객체 가져와서 결과값 도출 함수 getresult() 호출
            this.getResult();
            
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
