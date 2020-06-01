import { Component, OnInit } from '@angular/core';
import { NeighborhoodService } from '../neighborhood/neighborhood.service';
import { Neighborhood } from '../neighborhood/neighborhood';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { Login } from './login';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Resident } from '../resident/resident';
import { delay } from 'rxjs/operators';

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
  resident: Resident;
  incorrect: number = 0;
  active: boolean = true;

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
  }

  getLogin(neighId: number, username: string): void {
    this.loginService
      .getLoginByUsername(this.neighborhoods[0].id, username)
      .subscribe((login) => {
        this.login = login;
        this.resident = this.login.resident;
        console.log(this.resident);

        this.authenticateLogin(this.LoginForm.get('password').value);
      });
  }

  authenticateLogin(password: string): void {
    const toastrConfig: Partial<IndividualConfig> = {
      timeOut: 1800,
    };

    const toastrConfig2: Partial<IndividualConfig> = {
      timeOut: 9000,
    };

    if (this.login.password === password) {
      this.toastr.success(
        `Welcome back, ${this.resident.nickname} \ud83d\udc95`,
        'Authenticated',
        toastrConfig
      );
      setTimeout(() => {
        this.router.navigateByUrl(
          `/neighborhoods/${this.resident.neighborhood.id}`
        );
      }, 2300);
      this.LoginForm.reset();
    } else {
      this.incorrect++;
      if (this.incorrect === 3) {
        this.incorrect = 0;
        this.active = false;
        this.toastr.error(
          `Too many incorrect attempt! Locked out for 5 seconds. 	\uD83D\uDE25p`,
          'Authentication Failed'
        );
        setTimeout(() => {
          this.active = true;
          this.toastr.success('Unblocked!');
        }, 5000);
      } else {
        this.toastr.error(
          `Incorrect password, try again. Attempt ${this.incorrect}`,
          'Authentication Failed',
          toastrConfig
        );
      }
      this.LoginForm.reset();
    }
  }

  ngOnInit() {
    this.neighborhoodService.getNeighborhoods().subscribe((neighborhoods) => {
      this.neighborhoods = neighborhoods;
    });
  }
}
