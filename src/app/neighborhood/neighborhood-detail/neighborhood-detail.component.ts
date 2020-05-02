import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NeighborhoodService } from '../neighborhood.service';
import { Neighborhood } from '../neighborhood';

@Component({
  selector: 'app-neighborhood-detail',
  templateUrl: './neighborhood-detail.component.html',
  styleUrls: ['./neighborhood-detail.component.css'],
})
export class NeighborhoodDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private neighborhoodService: NeighborhoodService
  ) {}

  neighId: number;
  neighborhood: Neighborhood;

  getNeighborhood(id: number): Neighborhood {
    this.neighborhoodService
      .getNeighborhoodById(id)
      .subscribe((neighborhood) => {
        this.neighborhood = neighborhood;
      });
    return this.neighborhood;
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
  }
}
