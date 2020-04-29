import { Component, OnInit } from '@angular/core';
import { NeighborhoodService } from '../neighborhood/neighborhood.service';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { Neighborhood } from '../neighborhood/neighborhood';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-location-registration',
  templateUrl: './location-registration.component.html',
  styleUrls: ['./location-registration.component.css']
})
export class LocationRegistrationComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private neighborhoodService: NeighborhoodService,
    private loginService: LoginService,
    private router: Router
  ) { }

  neighborhoods: Array<Neighborhood>;

  locationForm = new FormGroup({
    name: new FormControl(null),
    address: new FormControl(null),
    openTime: new FormControl(null),
    closeTime: new FormControl(null),
    latitude: new FormControl(null),
    longitude: new FormControl(null),
    neighborhood: new FormControl(null),
  });

  getNeighborhoods(): void {
    this.neighborhoodService.getNeighborhoods().subscribe((neighborhoods) => {
      // this.neighborhoods = neighborhoods.slice(0,4);
      this.neighborhoods = neighborhoods;
    });
  }

  onSubmit(): void {
    console.log(
      'Name:' +
        this.locationForm.get('name').value +
        '\n' +
        'Address:' +
        this.locationForm.get('address').value +
        'Open Time:' +
        this.locationForm.get('openTime').value +
        'Close Time:' +
        this.locationForm.get('openTime').value +
        '\n' +
        'Latitude:' +
        this.locationForm.get('latitude').value +
        '\n' +
        'Longitude:' +
        this.locationForm.get('longitude').value+
        'Neighborhood:' +
        this.locationForm.get('neighborhood').value
    );

    console.log("done")
  }

  ngOnInit() {
    this.getNeighborhoods();
  }

}
