import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '../location';
import { LocationService } from '../location.service';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css'],
})
export class LocationDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService,
    private toastr: ToastrService,
    private router: Router

  ) {}

  neighId: number;
  locId: number;
  location: Location;
  name:string;
  openTime: string;
  closeTime:string;

  getLocation() {
    this.locationService.getLocationById(this.neighId,this.locId).subscribe((location) => {
      this.location = location;
      this.name = location.name;
    });
  }

  deletePlace(): void{
    const toastrConfig: Partial<IndividualConfig> = {
      timeOut: 1800,
    };


    this.locationService.deleteLocationById(this.neighId,this.locId).subscribe((location) => {

    });

    this.toastr.success(
      `Location ${this.location.name} was deleted.`,
      'Delete Location',
      toastrConfig
    );
    setTimeout(() => {
      this.router.navigateByUrl(
        `/neighborhoods/${this.neighId}`
      );
    }, 2300);
  }

  ngOnInit() {
    this.neighId = +this.route.snapshot.paramMap.get('id');
    this.locId = +this.route.snapshot.paramMap.get('lid');
    this.getLocation();
  }
}
