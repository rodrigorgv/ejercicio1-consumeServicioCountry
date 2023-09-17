import { Component, OnInit } from '@angular/core';
import { RestCountriesService } from './rest-countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  paises: any[] = [];

  constructor(private restCountriesService: RestCountriesService) {}

  ngOnInit(): void {
    this.loadPaises();
  }

  loadPaises(): void {
    this.restCountriesService.getPaises().subscribe(data => {
      this.paises = data;
      console.log('Datos de países:', this.paises); // Imprime los datos en la consola
    });
  }
}
