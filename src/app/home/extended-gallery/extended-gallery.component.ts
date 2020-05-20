import {Component, Input, OnInit} from '@angular/core';
import {ResidentService} from "../resident.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-extended-gallery',
  templateUrl: './extended-gallery.component.html',
  styleUrls: ['./extended-gallery.component.css']
})
export class ExtendedGalleryComponent implements OnInit {

  @Input() album: string[];
  @Input() emptyMessage: string;
  navigationSubscription;

  neigh_id: number;
  resident_id: number;

  constructor(private service: ResidentService,
              private router: Router,
              private route: ActivatedRoute,) {

    //This is added so we can refresh the view when one of the bikes in
    //the "Other bikes" list is clicked
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });

  }

  ngOnInit() {
  }


}
