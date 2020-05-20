import {Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {PostListComponent} from "../../post/post-list/post-list.component";
import {MethodInvocationService} from "../../shared/method-invocation.service";
import {ActivatedRoute, Router, UrlTree} from "@angular/router";
import {ResidentService} from "../../home/resident.service";
import {PostCommentComponent} from "../../post/post-comment/post-comment.component";
import {HomeComponent} from "../../home/home.component";
import {Sidebar} from "primeng/primeng";


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, OnChanges {

  searchModel: string;
  searchType: string;
  neigh_id: number;
  resident_id: number;

  @ViewChild(PostListComponent, {static: true}) posts: PostListComponent;
  @ViewChild(HomeComponent, {static: true}) home: HomeComponent;
  private tree: UrlTree;

  update(): void {
  }

  constructor(private toastrService: ToastrService,
              private invocationService: MethodInvocationService,
              private route: ActivatedRoute,
              private service: ResidentService,
              private router: Router,
  ) {
    console.log('Main layout constructor called');
  }

  ngOnInit() {
    console.log(this.route.root.snapshot.url);
    this.searchModel = "";

    this.tree = this.router.parseUrl(this.router.url);
    this.neigh_id = +this.tree.root.children['primary'].segments[1].path;
    this.resident_id = +this.tree.root.children['primary'].segments[3].path;

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  clickMe() {
    this.invocationService.sendClickEvent();
  }


  setType(t) {
    this.searchType = t;
  }

  test() {
    this.toastrService.success(this.searchModel);
    this.toastrService.success(this.searchType);
  }
}
