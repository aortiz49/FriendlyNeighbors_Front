import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NeighborhoodService } from '../neighborhood.service';
import { Neighborhood } from '../neighborhood';
import { Resident } from 'src/app/resident/resident';
import { ResidentService } from 'src/app/resident/resident.service';

@Component({
  selector: 'app-neighborhood-detail',
  templateUrl: './neighborhood-detail.component.html',
  styleUrls: ['./neighborhood-detail.component.css'],
})
export class NeighborhoodDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private neighborhoodService: NeighborhoodService,
    private residentService: ResidentService

  ) {}

  neighId: number;
  neighborhood: Neighborhood;
  name: string;
  people: Array<Resident> = [];

  getNeighborhood(id: number): Neighborhood {
    this.neighborhoodService
      .getNeighborhoodById(id)
      .subscribe((neighborhood) => {
        this.neighborhood = neighborhood;
        this.name = neighborhood.name;

        console.log(neighborhood);
      });
    return this.neighborhood;
  }

  getResidents(neighborhood: number): Array<Resident> {
    this.residentService
      .getresidents(neighborhood)
      .subscribe((people) => {
        this.people = people;
        console.log(people);
      });
    return this.people;
  }

  openNav() {
    document.getElementById('mySidebar').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  closeNav() {
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  }

  ngOnInit() {
    this.neighId = +this.route.snapshot.paramMap.get('id');
    this.getNeighborhood(this.neighId);
    this.getResidents(this.neighId);
  }
}
