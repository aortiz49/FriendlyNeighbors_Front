import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NeighborhoodService } from '../neighborhood/neighborhood.service';
import { Neighborhood } from '../neighborhood/neighborhood';
import { FormGroup, FormControl } from '@angular/forms';
import { ResidentService } from '../resident/resident.service';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { Resident } from '../resident/resident';

@Component({
  selector: 'app-profile-registration',
  templateUrl: './profile-registration.component.html',
  styleUrls: ['./profile-registration.component.css'],
})
export class ProfileRegistrationComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private neighborhoodService: NeighborhoodService,
    private residentService: ResidentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  neighborhood: Neighborhood;
  neighId: number;

  residentProfileForm = new FormGroup({
    name: new FormControl(null),
    nickname: new FormControl(null),
    email: new FormControl(null),
    phone: new FormControl(null),
    address: new FormControl(null),
  });

  getNeighborhood(id: number): Neighborhood {
    this.neighborhoodService
      .getNeighborhoodById(id)
      .subscribe((neighborhood) => {
        this.neighborhood = neighborhood;
      });
    return this.neighborhood;
  }

  addResidentProfile(): void {
    var name: string = this.residentProfileForm.value.name;
    var nickname: string = this.residentProfileForm.value.nickname;
    var email: string = this.residentProfileForm.value.email;
    var phone: string = this.residentProfileForm.value.phone;
    var address: string = this.residentProfileForm.value.address;

    var resident: Resident = new Resident(
      address,
      email,
      name,
      nickname,
      phone
    );

    console.log(resident);
    const toastrConfig: Partial<IndividualConfig> = {
      timeOut: 1800,
    };
    var residentName = this.residentProfileForm.value.username;

    var observable = this.residentService
      .addResident(this.neighId, resident)
      .subscribe(
        () => {
          this.residentProfileForm.reset();
          this.residentProfileForm.controls.neighborhood.setValue('Choose...');
          this.toastr.success(
            'The resident ' + residentName + ' was added.',
            'Success',
            toastrConfig
          );
          setTimeout(() => {
            this.router.navigateByUrl(
              `/neighborhoods/${this.neighId}/newProfile`
            );
          }, 2300);
        },
        () => {
          this.residentProfileForm.reset();
        }
      );
  }

  onSubmit(): void {
    this.addResidentProfile();
  }

  ngOnInit() {
    this.neighId = +this.route.snapshot.paramMap.get('id');
    console.log(this.neighId);
  }
}
