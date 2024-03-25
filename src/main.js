import { Cliente } from './Cliente.js';

const cliente = new Cliente('Juan Pérez', 100000, 20000);

const impuesto = cliente.calcularImpuesto();

console.log(`Nombre del cliente: ${cliente.nombre}`);
console.log(`Monto bruto anual: $${cliente.montoBrutoAnual}`);
console.log(`Deducciones: $${cliente.deducciones}`);
console.log(`Impuesto anual a pagar: $${impuesto}`);
