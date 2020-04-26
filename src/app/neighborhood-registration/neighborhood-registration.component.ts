import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neighborhood-registration',
  templateUrl: './neighborhood-registration.component.html',
  styleUrls: ['./neighborhood-registration.component.css'],
})
export class NeighborhoodRegistrationComponent implements OnInit {
  // list of localities acceptable
  localities: Array<string> = [
    'Antonio Narinño',
    'Barrios Unidos',
    'Bosa',
    'Chapinero',
    'Ciudad Bolívar',
    'Engativá',
    'Fontibón',
    'Kennedy',
    'La Candelaria',
    'Los Mártires',
    'Puente Aranda',
    'Rafael Uribe Uribe',
    'San Cristóbal',
    'Santa Fe',
    'Suba',
    'Sumapaz',
    'Teusaquillo',
    'Tunjuelito',
    'Usaquén',
    'Usme'
  ];

  constructor() {}

  ngOnInit() {}
}
