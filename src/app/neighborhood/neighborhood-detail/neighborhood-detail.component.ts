import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neighborhood-detail',
  templateUrl: './neighborhood-detail.component.html',
  styleUrls: ['./neighborhood-detail.component.css']
})
export class NeighborhoodDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
   closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
}
