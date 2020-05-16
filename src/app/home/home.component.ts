import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {ResidentService} from "./resident.service";
import {ResidentDetail} from "./resident-detail";
import {ToastrService} from "ngx-toastr";
import {FavorDetail} from "../favor/favorDetail";
import {Post} from "../post/post";
import {PostListComponent} from "../post/post-list/post-list.component";

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
  @ViewChild(PostListComponent, {static: true}) postsList: PostListComponent;
  toggle1: boolean;
  toggle2: boolean;

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
    this.toggle1 = true;
    this.toggle2 = false;


  }

  getResident() {

    this.service.getresident(this.neigh_id, this.resident_id)
      .subscribe(residentDetail => {
        this.resident = residentDetail;

        this.resident.album = ["http://placeimg.com/500/500/any", "http://placeimg.com/500/500/arch", "http://placeimg.com/500/500/nature", "http://placeimg.com/500/500/tech", "http://placeimg.com/500/500/tech/sepia", "http://placeimg.com/500/500/animals/sepia", "http://placeimg.com/500/500/animals", "http://placeimg.com/500/500/people", "http://placeimg.com/500/500/people/grayscale", "http://placeimg.com/500/500/people/sepia", "http://placeimg.com/500/500/tech/sepia", "http://placeimg.com/500/500/arch/grayscale"];

        this.resident.profilePicture = "http://placeimg.com/640/360/any";
        // @ts-ignore
        this.resident.birthDate = new Date();
        this.resident.yearJoined = "2001";

      });


  }


  updatePosts() {
    this.service.getposts(this.neigh_id, this.resident_id)
      .subscribe(posts => {

        this.posts = posts;

        console.log(this.posts);

        this.postsList.updatePosts(this.posts);
      });

  }


  getPosts() {
    this.service.getposts(this.neigh_id, this.resident_id)
      .subscribe(posts => {

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


  toggle11() {
    this.toggle1 = !this.toggle1;

    console.log("---------------------------------------------------");
    console.log(this.resident.preferences);
    console.log(this.resident.address);
    console.log(this.resident.email);
  }

  toggle12() {
    this.toggle2 = !this.toggle2;
  }


}
