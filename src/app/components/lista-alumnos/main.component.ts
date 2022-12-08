import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../model/alumno';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}
  public fecha = new Date();
  public cambiarColor = false;
  public mostrarLista = false;
  public filtroClase = false;

  alumnos: Alumno[] = [
    new Alumno('Lionel Messi', 'G.O.A.T'),
    new Alumno('Rodrigo De Paul', 'Mediocampo'),
    new Alumno('Emiliano Martinez', 'Arquero'),
    new Alumno('Enzo Fernandez', 'Mediocampo'),
    new Alumno('Nicolas Otamendi', 'Defensor'),
    new Alumno('Gonzalo Montiel', 'Defensor'),
    new Alumno('Marcos Acuña', 'Defensor'),
    new Alumno('Lisandro Martinez', 'Defensor'),
    new Alumno('Alexis Mac Allister', 'Mediocampo'),
    new Alumno('Guido Rodriguez', 'Mediocampo'),
    new Alumno('Angel Di Maria', 'Delantero'),
  ];
  ngOnInit(): void {
    setInterval(() => {
      this.fecha = new Date();
    }, 5000);
  }
}
