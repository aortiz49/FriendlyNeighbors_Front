// import {Component, OnInit} from '@angular/core';
// import {IndividualConfig, ToastrService} from "ngx-toastr";
// import {NeighborhoodService} from "../../neighborhood/neighborhood.service";
// import {ResidentService} from "../../resident/resident.service";
// import {LoginService} from "../../login/login.service";
// import {ActivatedRoute, Router} from "@angular/router";
// import {Neighborhood} from "../../neighborhood/neighborhood";
// import {Resident} from "../../resident/resident";
// import {Login} from "../../login/login";
// import {FormControl, FormGroup} from "@angular/forms";
// import {GroupService} from "../../group/group.service";
//
// @Component({
//   selector: 'app-group-registration',
//   templateUrl: './group-registration.component.html',
//   styleUrls: ['./group-registration.component.css']
// })
// export class GroupRegistrationComponent implements OnInit {
//   constructor(
//     private toastr: ToastrService,
//     private neighborhoodService: NeighborhoodService,
//     private service: GroupService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {
//   }
//
//   neighId: number;
//
//   residentProfileForm = new FormGroup({
//     name: new FormControl(null),
//     description: new FormControl(null),
//     email: new FormControl(null),
//     phone: new FormControl(null),
//     address: new FormControl(null),
//   });
//
//   getNeighborhood(id: number): Neighborhood {
//     this.neighborhoodService
//       .getNeighborhoodById(id)
//       .subscribe((neighborhood) => {
//         this.neighborhood = neighborhood;
//       });
//     return this.neighborhood;
//   }
//
//   addResidentProfile(): void {
//     var name: string = this.residentProfileForm.value.name;
//     var nickname: string = this.residentProfileForm.value.nickname;
//     var email: string = this.residentProfileForm.value.email;
//     var phone: string = this.residentProfileForm.value.phone;
//     var address: string = this.residentProfileForm.value.address;
//
//     var login: Login = this.login;
//
//     var resident: Resident = new Resident(
//       address,
//       email,
//       name,
//       nickname,
//       phone,
//       login
//     );
//
//     console.log(resident);
//     const toastrConfig: Partial<IndividualConfig> = {
//       timeOut: 1800,
//     };
//
//     var observable = this.service
//       .addResident(this.neighId, resident)
//       .subscribe(
//         (resident) => {
//           this.resident = resident;
//           this.residentProfileForm.reset();
//           this.toastr.success(
//             'The resident ' + name + ' was added.',
//             'Success',
//             toastrConfig
//           );
//           setTimeout(() => {
//             this.router.navigateByUrl(
//               `/neighborhoods/${this.neighId}/residents/${this.resident.id}`
//             );
//
//           }, 2300);
//         },
//         () => {
//           this.residentProfileForm.reset();
//         }
//       );
//   }
//
//   onSubmit(): void {
//     this.addResidentProfile();
//   }
//
//   ngOnInit() {
//     this.neighId = +this.route.snapshot.paramMap.get('id');
//     this.loginId = +this.route.snapshot.paramMap.get('log');
//     this.loginService
//       .getLoginById(this.neighId, this.loginId)
//       .subscribe((login) => {
//         this.login = login;
//       });
//   }
// }
