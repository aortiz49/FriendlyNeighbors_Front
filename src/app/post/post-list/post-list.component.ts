import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../post";
import {PostService} from "../post.service";
import {PostFilterPipe} from "../../shared/post-title-filter.pipe";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, NavigationEnd, Router, UrlTree} from "@angular/router";
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


  @Input() posts: Post[];
  @Input() originals: Post[];
  navigationSubscription;
  invocationSubscription: Subscription;
  @Input() neigh_id: number;
  @Input() notRouted: boolean;
  @Input() postsByInput: boolean;
  @Input() searchModel: string;
  @Input() url: string;
  tree: UrlTree;

  ngOnInit() {
    this.url = this.router.url;
    this.tree = this.router.parseUrl(this.url);
    this.neigh_id = +this.tree.root.children['primary'].segments[1].path;

    if (!this.postsByInput) {

      if (!this.notRouted) {
        if (this.posts === undefined) {
          this.getGenericPostsByURL();
        }
        if (this.originals === undefined) {
          this.getCopyOfPostsByURL();
        }
      } else {
        this.getPosts();
        this.getCopyOfPosts();
      }
    } else {
       this.sortDescDate();
    }

    this.toastrService.success('Post list component initiated');
  }

  updatePosts(posts) {
    this.posts = posts;
    this.sortDescDate();
  }

  ngOnChanges() {

    this.filter(this.searchModel);
    this.ngOnInit();
  }

  getGenericPostsByURL() {
    this.postService.getPostsGeneric(this.url).subscribe(cs => {
      this.posts = cs;
      this.sortDescDate();
    }, err => {

      this.toastrService.error(JSON.stringify(err), 'Error');
    });


  }


  getPosts() {
    this.postService.getposts(this.neigh_id).subscribe(cs => {
      this.posts = cs;
      this.sortDescDate();
    }, err => {

      this.toastrService.error(JSON.stringify(err), 'Error');
    });


  }

  getCopyOfPosts() {
    this.postService.getposts(this.neigh_id).subscribe(cs => {
      this.originals = cs;
    }, err => {

      this.toastrService.error(JSON.stringify(err), 'Error');
    });
  }

  sortAsc() {
    this.posts.sort((t1, t2) => {
      const name1 = t1.title;
      const name2 = t2.title;
      if (name1 > name2) {
        return 1;
      }
      if (name1 < name2) {
        return -1;
      }
      return 0;
    });

  }

  sortDesc() {
    this.posts.sort((t1, t2) => {
      const name1 = t1.title;
      const name2 = t2.title;
      if (name1 > name2) {
        return -1;
      }
      if (name1 < name2) {
        return 1;
      }
      return 0;
    });

  }

  sortDescDate() {
    this.posts.sort((t1, t2) => {
      const name1 = t1.publishDate;
      const name2 = t2.publishDate;

      if (name1 < name2) {
        return 1;
      }
      if (name1 > name2) {
        return -1;
      }
      return 0;
    });

  }


  getCopyOfPostsByURL()
    :
    void {
    this.postService.getPostsGeneric(this.url)
      .subscribe(originals => {
        this.originals = originals
      }, err => {
        this.toastrService.error(JSON.stringify(err), 'Error');
      });

  }

  filter(value: string) {
    this.posts = this.filterPipe.transform(this.originals, value);
  }


  updateSpacers(id) {
    delay(100);
    document.getElementById(id + 's').remove();
  }


}

