import { Component, OnInit } from "@angular/core";
import { Neighborhood } from '../neighborhood';
import {NeighborhoodService} from '../neighborhood.service'
import { NeighborhoodRegistrationComponent } from 'src/app/neighborhood-registration/neighborhood-registration.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: "app-neighborhood-list",
  templateUrl: "./neighborhood-list.component.html",
  styleUrls: ["./neighborhood-list.component.css"],
})
export class NeighborhoodListComponent implements OnInit {
  constructor(private neighborhoodService: NeighborhoodService) {}

  neighborhoods: Array<Neighborhood>;

  getNeighborhoods(): void {
    this.neighborhoodService.getNeighborhoods().subscribe((neighborhoods) => {
     // this.neighborhoods = neighborhoods.slice(0,4);
      this.neighborhoods = neighborhoods;

    });
  }


  ngOnInit() {
    this.getNeighborhoods();
  }
}
