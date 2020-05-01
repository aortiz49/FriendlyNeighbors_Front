import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

import {Favor} from "../../favor/favor";
import {FavorService} from "../../favor/favor.service";
import {delay} from "rxjs/operators";


@Component({
  selector: 'app-simple-favor-list',
  templateUrl: './simple-favor-list.component.html',
  styleUrls: ['./simple-favor-list.component.css']
})
export class SimpleFavorListComponent implements OnInit {

  constructor(private  favorService: FavorService,
              private toastrService: ToastrService,
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


  @Input() favors: Array<Favor>;
  @Input() type: string;
  @Input() neighborhood_id: number;

  navigationSubscription;


    updateSpacers(id) {
    delay(100);
    document.getElementById(id + 'f' + this.type).remove();
  }


  ngOnInit() {

    this.toastrService.success("SimpleFavor list on");

    if (this.type == 'color1') {



        var items: any = document.getElementsByClassName('color1');
      for (let i = 0; i < items.length; i++) {
        let element = items[i];
        element.style.background = '#ff0065';
      }


    } else if (this.type == 'color2') {

      var items: any = document.getElementsByClassName('color2');
      for (let i = 0; i < items.length; i++) {
        let element = items[i];
        element.style.background = '#23f761';
      }
    }

  }

}
