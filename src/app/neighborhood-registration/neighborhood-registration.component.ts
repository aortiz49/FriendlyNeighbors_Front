import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { NeighborhoodService } from '../neighborhood/neighborhood.service';
import { Neighborhood } from '../neighborhood/neighborhood';
import { ToastrNotificationService } from '../utility/toastr-notification.service';

@Component({
  selector: 'app-neighborhood-registration',
  templateUrl: './neighborhood-registration.component.html',
  styleUrls: ['./neighborhood-registration.component.css'],
})
export class NeighborhoodRegistrationComponent implements OnInit {
  constructor(
    private toastr: ToastrNotificationService,
    private neighborhoodService: NeighborhoodService
  ) {}

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
    'Usme',
  ];

  neighborhoodForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    numberOfResidents: new FormControl('', [Validators.required]),
    locality: new FormControl('', [Validators.required]),
  });

  onSubmit(): void {
    console.log(
      'Name:' +
        this.neighborhoodForm.get('name').value +
        '\n' +
        'Locality:' +
        this.neighborhoodForm.get('locality').value +
        '\n' +
        'Capacity:' +
        this.neighborhoodForm.get('numberOfResidents').value
    );

    this.addNeighborhood();
  }

  addNeighborhood(): void {
    var name: string = this.neighborhoodForm.value.name;
    var numberOfResidents: number = this.neighborhoodForm.value
      .numberOfResidents;
    var locality: string = this.neighborhoodForm.value.locality;
    var neigh = new Neighborhood(3000, name, locality, numberOfResidents);

    this.neighborhoodService.addNeighborhood(neigh).subscribe();
  }

  ngOnInit() {}

  showToaster(){
    this.toastr.successMessage("Neighborhood created successfully!","Notification")
  }

  showHtmlToaster(){
    this.toastr.showHTMLMessage("<h2>Data shown successfully !!</h2>", "Notification")
  }
}
