import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-persona',
  templateUrl: './datos-persona.component.html',
  styleUrls: ['./datos-persona.component.css']
})
export class DatosPersonaComponent implements OnInit {
  persona = {
    nombre: 'Pepito',
    fechaNacimiento: new Date(1990, 3, 15), 
    salario: 1000.0,
    profesion: 'INGENIERO EN SISTEMAS',
    porcentajeIngles: 0.8066
  };

  constructor() { }

  ngOnInit(): void {
  }
}
