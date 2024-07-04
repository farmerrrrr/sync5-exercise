sap.ui.define([
    "sap/m/Text"
], (Text) => {
	"use strict";

    new Text({
        text: "Hello World"
    }).placeAt("content");      // index.html line 22 body id
});