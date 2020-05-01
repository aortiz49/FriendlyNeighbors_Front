import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {ResidentService} from "./resident.service";
import {ResidentDetail} from "./resident-detail";
import {ToastrService} from "ngx-toastr";
import {FavorDetail} from "../favor/favorDetail";
import {PostDetail} from "../post/post-detail";
import {Resident} from "./resident";
import {Post} from "../post/post";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  neigh_id: number;
  resident_id: number;
  navigationSubscription;
  @Input() resident: ResidentDetail;
  posts: Post[];
  favors: FavorDetail[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: ResidentService,
              private toastService: ToastrService,
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

    this.resident = new ResidentDetail();

    this.neigh_id = +this.route.root.firstChild.firstChild.snapshot.paramMap.get("id");
    this.resident_id = +this.route.root.firstChild.firstChild.firstChild.firstChild.snapshot.paramMap.get("id");

    this.getResident();
    this.getFavors();
    this.getPosts();

  }

  getResident() {
    this.service.getresident(this.neigh_id, this.resident_id)
      .subscribe(residentDetail => {
        this.resident = residentDetail;

        this.resident.album = ["http://placeimg.com/640/360/any", "http://placeimg.com/640/360/any"];

        this.resident.profilePicture = "http://placeimg.com/640/360/any";
      });
  }

  getPosts() {
    this.service.getposts(this.neigh_id, this.resident_id)
      .subscribe(posts => {

        console.log(posts);
        console.log("vvvvvv");
        this.posts = posts;
        console.log(this.posts);
      });

  }

  getFavors() {
    this.service.getfavors(this.neigh_id, this.resident_id)
      .subscribe(favors => {
        this.favors = favors;
      });

  }


}
