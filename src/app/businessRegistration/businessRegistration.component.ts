import { Component, OnInit } from '@angular/core';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { NeighborhoodService } from '../neighborhood/neighborhood.service';
import { BusinessService } from '../business/business.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Neighborhood } from '../neighborhood/neighborhood';
import { FormGroup, FormControl } from '@angular/forms';
import { Resident } from '../resident/resident';
import { ResidentService } from '../home/resident.service';
import { Business } from '../business/business';
import { ResidentDetail } from '../home/resident-detail';



@Component({
  selector: 'app-businessRegistration',
  templateUrl: './businessRegistration.component.html',
  styleUrls: ['./businessRegistration.component.css']
})
export class BusinessRegistrationComponent implements OnInit {

  constructor(
    private toastr:ToastrService,
    private neighborhoodService: NeighborhoodService,
    private residentService: ResidentService,
    private businessService: BusinessService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  neighborhoods: Array<Neighborhood>;
  residents: Array<ResidentDetail>;
  selectedNeighborhoodId: number;
  selectedNeighborhood: Neighborhood;
  neighId: number;

  businessForm = new FormGroup({
    name: new FormControl(null),
    address: new FormControl(null),
    openTime: new FormControl(null),
    closeTime: new FormControl(null),
    latitude: new FormControl(null),
    longitude: new FormControl(null),
    neighborhood: new FormControl(null),
    owner: new FormControl(null),
    rating: new FormControl(null),
  });


  getResidents(): void {
    this.residentService.getresidents(this.neighId).subscribe((residents) => {
      this.residents = residents;
    });  }

  onSubmit(): void {
    console.log(
      'Name:' +
        this.businessForm.get('name').value +
        '\n' +
        'Address:' +
        this.businessForm.get('address').value +
        '\n' +
        'Open Time:' +
        this.businessForm.get('openTime').value +
        '\n' +
        'Close Time:' +
        this.businessForm.get('closeTime').value +
        '\n' +
        'Latitude:' +
        this.businessForm.get('latitude').value +
        '\n' +
        'Longitude:' +
        this.businessForm.get('longitude').value +
        '\n' +
        'Neighborhood:' +
        this.businessForm.get('neighborhood').value +
        '\n' +
        'Owner:' +
        this.businessForm.get('owner').value +
        '\n' +
        'Rating:' +
        this.businessForm.get('rating').value
    );
    this.addBusiness();

  }

  converTimeTo12Hr(time: string): string {
    var hour = +time.split(':')[0];
    var minute = +time.split(':')[1];

    var time: string;
    var end: string;

    if (hour >= 0 && hour <= 11) {
      end = ' AM';
      if (hour === 0) {
        hour += 12;
      }
    } else {
      if (hour > 12) {
        hour -= 12;
      }
      end = ' PM';
    }
    if (minute >= 0 && minute <= 9) {
      time = `${hour}:0${minute + end}`;
    } else {
      time = `${hour}:${minute + end}`;
    }

    console.log(time);
    return time;
  }

  addBusiness(): void {
    var name: string = this.businessForm.value.name;
    var address: string = this.businessForm.value.address;
    var openTime: string = this.businessForm.value.openTime;
    var closeTime: string = this.businessForm.value.closeTime;
    var latitude: number = this.businessForm.value.latitude;
    var longitude: number = this.businessForm.value.longitude;
    var neighborhood: number = this.neighId;
    var owner: number = this.businessForm.value.owner;
    var rating: number = this.businessForm.value.rating;

    openTime = this.converTimeTo12Hr(openTime);
    closeTime = this.converTimeTo12Hr(closeTime);

    var business: Business = new Business(
      name,
      address,
      openTime,
      closeTime,
      latitude,
      longitude,
      rating
      );

    console.log(business);
    const toastrConfig: Partial<IndividualConfig> = {
      timeOut: 1800,
    };
    var businessName = this.businessForm.value.name;

    var observable = this.businessService
      .addBusiness(neighborhood, business, 1)
      .subscribe(
        () => {
          this.businessForm.reset();
          this.businessForm.controls.neighborhood.setValue('Choose...');
          this.toastr.success(
            `The business "${businessName}" was added to the neighborhood.`,
            'Success',
            toastrConfig
          );
          setTimeout(() => {
            this.router.navigateByUrl(
              `/neighborhoods/${this.neighId}`
            );          }, 1300);
        },
        () => {
          this.businessForm.reset();
        }
      );
  }

  ngOnInit() {
    this.neighId = +this.route.snapshot.paramMap.get('id');
    this.getResidents();

  }

}
