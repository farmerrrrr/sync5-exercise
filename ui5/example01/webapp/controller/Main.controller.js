sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
function (Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("sync.d14.example01.controller.Main", {
        onInit: function () {

        },

        onPress() {
            const nameQuery = this.byId("nameInput").getValue()
            const genderQuery = this.byId("genderSelect").getSelectedItem().getText();
           // const deptQuery = this.byId()
    
            if(nameQuery)
                var nameFilter = new Filter("name", FilterOperator.Contains, nameQuery);
                
            if(genderQuery)
                var genderFilter = new Filter("gender", FilterOperator.Contains, genderQuery);

            //if(deptQuery)
      
            var oFilter = new Filter({
                filters: [
                    nameFilter,
                    genderFilter
                ],
                and: true
            })

            const oList = this.byId("table");
            const oBinding = oList.getBinding("rows");
            oBinding.filter(oFilter);
        }
    });
});
