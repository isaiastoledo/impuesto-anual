export class Cliente {
    constructor(nombre, montoBrutoAnual, deducciones) {
      this.nombre = nombre;
      this.montoBrutoAnual = montoBrutoAnual;
      this.deducciones = deducciones;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(nombre) {
      this._nombre = nombre;
    }
  
    get montoBrutoAnual() {
      return this._montoBrutoAnual;
    }
  
    set montoBrutoAnual(montoBrutoAnual) {
      this._montoBrutoAnual = montoBrutoAnual;
    }
  
    get deducciones() {
      return this._deducciones;
    }
  
    set deducciones(deducciones) {
      this._deducciones = deducciones;
    }
  
    calcularImpuesto() {
      return (this.montoBrutoAnual - this.deducciones) * 0.21;
    }
  }
  