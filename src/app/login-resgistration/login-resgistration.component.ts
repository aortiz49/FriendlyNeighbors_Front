import { Component, OnInit } from '@angular/core';
import { NeighborhoodService } from '../neighborhood/neighborhood.service';
import { Neighborhood } from '../neighborhood/neighborhood';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-resgistration',
  templateUrl: './login-resgistration.component.html',
  styleUrls: ['./login-resgistration.component.css'],
})
export class LoginResgistrationComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private neighborhoodService: NeighborhoodService
  ) {}

  neighborhoods: Array<Neighborhood>;

  chosenNeighborhood: Neighborhood;

  residentLoginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    govId: new FormControl(''),
    neighborhood: new FormControl(''),
  });

  onSubmit(): void {
    console.log(
      'Username:' +
        this.residentLoginForm.get('username').value +
        '\n' +
        'Password:' +
        this.residentLoginForm.get('password').value +
        '\n' +
        'GovId:' +
        this.residentLoginForm.get('govId').value +
        '\n' +
        'Neighborhood:' +
        this.residentLoginForm.get('neighborhood').value
    );
    this.addResidentLogin()
  }

  getNeighborhoods(): void {
    this.neighborhoodService.getNeighborhoods().subscribe((neighborhoods) => {
      // this.neighborhoods = neighborhoods.slice(0,4);
      this.neighborhoods = neighborhoods;
    });
  }

  getNeighborhood(name: String): Neighborhood {
    this.neighborhoodService
      .getNeighborhoodByName(name)
      .subscribe((chosenNeighborhood) => {
        // this.neighborhoods = neighborhoods.slice(0,4);
        this.chosenNeighborhood = chosenNeighborhood;
      });
    return this.chosenNeighborhood;
  }

  addResidentLogin(): void {
    var username: string = this.residentLoginForm.value.username;
    var password: string = this.residentLoginForm.value.password;
    var govId: string = this.residentLoginForm.value.govId;
    var neighborhood: string = this.residentLoginForm.value.neighborhood;

    var neighEntity: Neighborhood = this.getNeighborhood(neighborhood);

    const toastrConfig: Partial<IndividualConfig> = {
      timeOut: 1800,
    };


  }

  ngOnInit() {
    this.getNeighborhoods();
  }
}
