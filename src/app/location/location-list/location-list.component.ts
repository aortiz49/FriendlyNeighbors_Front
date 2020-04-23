import { Component, OnInit } from "@angular/core";
import { Location } from '../location';
import {LocationService} from '../location.service'

@Component({
  selector: "app-location-list",
  templateUrl: "./location-list.component.html",
  styleUrls: ["./location-list.component.css"],
})
export class LocationListComponent implements OnInit {
  constructor(private locationService: LocationService) {}

  locations: Array<Location>;

  getLocations(): void {
    this.locationService.getLocations().subscribe((locations) => {
      this.locations = locations;
    });
  }

  ngOnInit() {
    this.getLocations();
  }
}
