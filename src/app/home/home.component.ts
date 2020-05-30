import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {ResidentService} from "./resident.service";
import {ResidentDetail} from "./resident-detail";
import {ToastrService} from "ngx-toastr";
import {FavorDetail} from "../favor/favorDetail";
import {Post} from "../post/post";
import {PostListComponent} from "../post/post-list/post-list.component";
import {Resident} from "./resident";
import {SimpleAuthService} from "../simple-auth-service/simple-auth.service";

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
  residents: Resident[];
  posts: Post[];
  favors: FavorDetail[];
  @ViewChild(PostListComponent, {static: true}) postsList: PostListComponent;
  toggle1: boolean;
  toggle2: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: ResidentService,
              private toastService: ToastrService,
              private authService: SimpleAuthService
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
    this.getResidents();
    this.toggle1 = true;
    this.toggle2 = false;


  }

  getResident() {

    this.service.getresident(this.neigh_id, this.resident_id)
      .subscribe(residentDetail => {
        this.resident = residentDetail;
        this.resident.profilePicture = "http://placeimg.com/500/500/any";
        // @ts-ignore
        this.resident.joinDate = new Date();
        this.resident.livingSince = "2001";

      });


  }

  getResidents() {
    this.service.getresidents(this.neigh_id)
      .subscribe(residentDetail => {
        this.residents = residentDetail;
        this.residents[0].profilePicture = "http://placeimg.com/500/500/any";
        this.residents[1].profilePicture = "http://placeimg.com/500/500/any";
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
  }


  toggle12() {
    this.toggle2 = !this.toggle2;
  }

  isEmpty(atr): boolean {

    let rta: boolean;

    if (atr == undefined) {
      rta = true;
    } else if (atr == null) {
      rta = true;
    } else if (atr.toString() == '') {
      rta = true;
    }
    return rta;
  }

  canEdit(): boolean {
    let b: boolean;
    b = false;
    this.authService.isOwner(this.resident.id).subscribe(value => {
      b = value;
    });
    return b;
  }


}
