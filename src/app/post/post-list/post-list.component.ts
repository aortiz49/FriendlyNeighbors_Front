import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../post";
import {PostService} from "../post.service";
import {PostFilterPipe} from "../../shared/post-title-filter.pipe";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {PostCommentComponent} from "../post-comment/post-comment.component";
import {SpacerComponent} from "../spacer/spacer.component";
import {delay} from "rxjs/operators";
import {MethodInvocationService} from "../../shared/method-invocation.service";


declare var $: any;

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostFilterPipe],

})


export class PostListComponent implements OnInit, OnChanges {

  constructor(private  postService: PostService,
              private toastrService: ToastrService,
              private filterPipe: PostFilterPipe,
              private router: Router,
              private route: ActivatedRoute,
              private cdr: ChangeDetectorRef,
              private invocationService: MethodInvocationService) {
    //This is added so we can refresh the view when one of the bikes in
    //the "Other bikes" list is clicked
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });

    this.invocationSubscription = this.invocationService.getClickEvent().subscribe(() => {
      this.filter(this.searchModel);
    });

  }


  posts: Array<Post>;
  originals: Array<Post>;
  navigationSubscription;
  invocationSubscription: Subscription;
  @Input() neigh_id: number;
  @Input() notRouted: boolean;
  @Input() searchModel: string;


  ngOnInit() {

    if (!this.notRouted) this.neigh_id = +this.route.root.firstChild.firstChild.snapshot.paramMap.get("id");

    if (this.posts === undefined) {
      this.getPostList();
    }
    if (this.originals === undefined) {
      this.getCopyOfPosts();
    }

    this.toastrService.success('Se registró correctamente');
  }

  ngOnChanges() {

    this.filter(this.searchModel);
    this.ngOnInit();
  }

  getPostList() {
    this.postService.getposts(this.neigh_id).subscribe(cs => {
      this.posts = cs;
    }, err => {

      this.toastrService.error(JSON.stringify(err), 'Error');
    });
  }

  getCopyOfPosts()
    :
    void {
    this.postService.getposts(this.neigh_id)
      .subscribe(originals => {
        this.originals = originals
      }, err => {
        this.toastrService.error(JSON.stringify(err), 'Error');
      });

  }

  filter(value: string) {
    this.posts = this.filterPipe.transform(this.originals, value);
  }

  sortAlphDesc() {
    this.posts.sort((t1, t2) => {
      const name1 = t1.title.toLowerCase();
      const name2 = t2.title.toLowerCase();
      if (name1 > name2) {
        return -1;
      }
      if (name1 < name2) {
        return 1;
      }
      return 0;
    });
  }

  updateSpacers(id) {
    delay(100);
    document.getElementById(id + 's').remove();
  }


}


function

SidebarCollapse() {
  $('.menu-collapsed').toggleClass('d-none');
  $('.sidebar-submenu').toggleClass('d-none');
  $('.submenu-icon').toggleClass('d-none');
  $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');

  // Treating d-flex/d-none on separators with title
  var SeparatorTitle = $('.sidebar-separator-title');
  if (SeparatorTitle.hasClass('d-flex')) {
    SeparatorTitle.removeClass('d-flex');
  } else {
    SeparatorTitle.addClass('d-flex');
  }

  // Collapse/Expand icon
  $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
}


