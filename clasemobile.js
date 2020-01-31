"use strict";
exports.__esModule = true;
var mobile = /** @class */ (function () {
    function mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    mobile.prototype.mostrarAtributos = function () {
        console.log("El nombres es " + this.name + "\n" + "El modelos es " + this.model + "\n" + "La marca es " + this.trademark + "\n" + "Capacidad de SD es: " + this.sdSize + "\n" + "El color es: " + this.color + "\n" + "Tiene 5G: " + this.is5G + "\n" + "Número de cámaras: " + this.cameraNumber + "\n" + "Su precio es: " + this.price);
    };
    return mobile;
}());
exports.mobile = mobile;
