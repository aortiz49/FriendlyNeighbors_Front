import {Component, Input, OnInit} from '@angular/core';
import {ResidentService} from "../resident.service";
import {ActivatedRoute, NavigationEnd, Router, UrlTree} from "@angular/router";

@Component({
  selector: 'app-extended-gallery',
  templateUrl: './extended-gallery.component.html',
  styleUrls: ['./extended-gallery.component.css']
})
export class ExtendedGalleryComponent implements OnInit {

  @Input() album: string[];
  @Input() emptyMessage: string;
  @Input() notRouted: boolean;
  navigationSubscription;

  neigh_id: number;
  resident_id: number;
  private tree: UrlTree;

  constructor(private service: ResidentService,
              private router: Router,
              private route: ActivatedRoute,
  ) {

    //This is added so we can refresh the view when one of the bikes in
    //the "Other bikes" list is clicked
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });

  }

  ngOnInit() {

    if (!this.notRouted) {

      this.tree = this.router.parseUrl(this.router.url);
      this.neigh_id = +this.tree.root.children['primary'].segments[1].path;
      this.resident_id = +this.tree.root.children['primary'].segments[3].path;
      this.service.getresident(this.neigh_id, this.resident_id).subscribe(value => this.album = value.album);
    }
    this.tree = this.router.parseUrl(this.router.url);
      this.neigh_id = +this.tree.root.children['primary'].segments[1].path;
    this.resident_id = +this.tree.root.children['primary'].segments[3].path;
    this.service.getresident(this.neigh_id, this.resident_id).subscribe(value => this.album = value.album);


  }


}
