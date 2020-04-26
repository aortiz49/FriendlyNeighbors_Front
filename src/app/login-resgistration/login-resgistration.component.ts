import { Component, OnInit } from '@angular/core';
import { NeighborhoodService } from '../neighborhood/neighborhood.service';
import { Neighborhood } from '../neighborhood/neighborhood';

@Component({
  selector: 'app-login-resgistration',
  templateUrl: './login-resgistration.component.html',
  styleUrls: ['./login-resgistration.component.css']
})
export class LoginResgistrationComponent implements OnInit {

  constructor(private neighborhoodService: NeighborhoodService) { }

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
