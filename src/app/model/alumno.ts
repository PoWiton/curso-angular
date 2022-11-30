import { bootstrapApplication } from '@angular/platform-browser';

export class Alumno {
  nombre: string;
  clase: string;

  constructor(firstName: string, lastName: string) {
    this.nombre = firstName;
    this.clase = lastName;
  }

  prueba() {
    if (this.clase === 'Delantero') {
      let clases = document.getElementById('clase-color');
      clases?.classList.add('list-group-item-danger');
    } else if (this.clase === 'Defensor') {
      alert('asd');
    } else if (this.clase === 'Mediocampo') {
      alert('asdd');
    } else if (this.clase === 'G.O.A.T') {
      alert('asdaaaaa');
    } else if (this.clase === 'Arquero') {
      alert('asd');
    }
  }
}
