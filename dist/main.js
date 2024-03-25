"use strict";

var _Cliente = require("./Cliente.js");
var cliente = new _Cliente.Cliente('Juan Pérez', 100000, 20000);
var impuesto = cliente.calcularImpuesto();
console.log("Nombre del cliente: ".concat(cliente.nombre));
console.log("Monto bruto anual: $".concat(cliente.montoBrutoAnual));
console.log("Deducciones: $".concat(cliente.deducciones));
console.log("Impuesto anual a pagar: $".concat(impuesto));