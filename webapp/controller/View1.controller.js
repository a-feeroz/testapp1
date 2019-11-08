sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.sap.StudentDetails_SimpleForm.controller.View1", {
		onInit: function () {

		},
		//Checkinga nd adding the fragment in the controller

		onSelectionDepartment: function (oEvent) {
			if (!this._Value) {
				this._Value = sap.ui.xmlfragment("idDeptFrag", "com.sap.StudentDetails_SimpleForm.view.Department", this);
				this.getView().addDependent(this._Value);
			}
			this._Value.open();

		},
		//Department Selection from Value Help
		onSelectionChange: function (oEvent) {
			var SelectedItem = oEvent.getSource().getSelectedItem();
			var SelectedItemValue = SelectedItem.getTitle();
			this.getView().byId("idDepSelection").setValue(SelectedItemValue);
			this._Value.close();

		},

		onSearch: function (oEvent) {
			var sQuery = oEvent.getParameter("query");
			var oFilter = new sap.ui.model.Filter("DepartmentName", sap.ui.model.FilterOperator.Contains, sQuery);

			//var path = oEvent.getSource().getParent().getParent().getContent()[1].getItems()[0].getBindingContextPath().slice(0,14);
			var oList = sap.ui.core.Fragment.byId("idDeptFrag", "idList");

			var oBinding = oList.getBinding("items");
			oBinding.filter(oFilter);

		}

	});
});