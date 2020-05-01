import { Component, OnInit } from '@angular/core';
import { NeighborhoodService } from '../neighborhood/neighborhood.service';
import { Neighborhood } from '../neighborhood/neighborhood';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { Login } from './login';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Resident } from '../resident/resident';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private neighborhoodService: NeighborhoodService,
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  neighborhoods: Array<Neighborhood>;
  login: Login;
  resident:Resident;

  LoginForm = new FormGroup({
    neighborhood: new FormControl(null),
    username: new FormControl(null),
    password: new FormControl(null),
  });

  onSubmit(): void {
    var username: string = this.LoginForm.value.username;
    var password: string = this.LoginForm.value.password;
    var neighborhood: number = this.LoginForm.value.neighborhood;

    this.getLogin(neighborhood, username);
    this.authenticateLogin(password);
  }

  getLogin(neighId: number, username: string): void {
    this.loginService
      .getLoginByUsername(this.neighborhoods[0].id, username)
      .subscribe((login) => {
        this.login = login;
        this.resident = login.resident;
        var test = this.login;
        console.log(test);
        this.toastr.success(`Welcome back, ${this.resident.nickname}`,"Authenticated");
      });
  }

  authenticateLogin(password: string): void {
    const toastrConfig: Partial<IndividualConfig> = {
      timeOut: 1800,
    };





  }

  ngOnInit() {
    this.neighborhoodService.getNeighborhoods().subscribe((neighborhoods) => {
      this.neighborhoods = neighborhoods;
    });
  }
}
