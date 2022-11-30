import { bootstrapApplication } from '@angular/platform-browser';

export class Alumno {
  nombre: string;
  clase: string;

  constructor(firstName: string, lastName: string) {
    this.nombre = firstName;
    this.clase = lastName;
  }
}
