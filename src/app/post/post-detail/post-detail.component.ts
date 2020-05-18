import {AfterContentChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, Pipe, ViewChild} from '@angular/core';
import {PostService} from "../post.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Post} from "../post";
import {PostCommentComponent} from "../post-comment/post-comment.component";
import {PostCommentCreateComponent} from "../post-comment-create/post-comment-create.component";
import {PostDetail} from "../post-detail";
import {Observable} from "rxjs";
import {CommentP} from "../commentP";
import {Resident} from "../../home/resident";


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit, OnDestroy, AfterContentChecked {


  constructor(private  postService: PostService,
              private toastrService: ToastrService,
              private router: Router,
              private route: ActivatedRoute,
              private cdRef: ChangeDetectorRef) {
    //This is added so we can refresh the view when one of the bikes in
    //the "Other bikes" list is clicked
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  postDetail: PostDetail;
  others: Array<Post>;
  navigationSubscription;
  @Input() post_id: number;
  @Input() neighborhood_id: number;
  @Output() init = new EventEmitter();
  viewers: Resident[];
  searchModel: string;

  @ViewChild(PostCommentComponent, {static: true}) commentComponent: PostCommentComponent;
  @ViewChild(PostCommentCreateComponent, {static: true}) commentCreateComponent: PostCommentCreateComponent;


  toggleComments(): void {
    if (this.commentCreateComponent.isCollapsed == false) {
      this.commentCreateComponent.isCollapsed = true;
    }
    this.commentComponent.isCollapsed = !this.commentComponent.isCollapsed;
  }

  toggleCreateComments(): void {
    if (this.commentComponent.isCollapsed == false) {
      this.commentComponent.isCollapsed = true;
    }
    this.commentCreateComponent.isCollapsed = !this.commentCreateComponent.isCollapsed;
  }

  updateComments(): void {
    this.getPostDetail();

    this.commentComponent.updateComments(this.postDetail.comments);
    this.commentComponent.isCollapsed = false;
    this.commentCreateComponent.isCollapsed = true;
  }

  addLike(): void {

    this.postService.getpostDetail(this.neighborhood_id, this.post_id)
      .subscribe(postDetail => {
        postDetail.numberOfLikes++;
        this.postService.updatepost(this.neighborhood_id, postDetail).subscribe();
      });

    this.getPostDetail();

  }


  getPostDetail(): void {

    this.postService.getpostDetail(this.neighborhood_id, this.post_id)
      .subscribe(postDetail => {
        this.postDetail = postDetail;

        this.postDetail.album = ["http://placeimg.com/640/360/any", "http://placeimg.com/640/360/any"];

        this.postDetail.author.profilePicture = "http://placeimg.com/640/360/any";
      });
  }


  getOtherPosts(): void {
    this.postService.getposts(this.neighborhood_id)
      .subscribe(posts => {
        this.others = posts;
        this.others = this.others.filter(posts => posts.id !== this.post_id);
      });
  }

  getViewers(): void {
    this.postService.getViewers(this.neighborhood_id, this.post_id)
      .subscribe(residents => {
        this.viewers = residents;
      });

  }

  ngOnInit() {
    this.init.emit();
    console.log("Initiated: on demand")

    this.postDetail = new PostDetail();
    this.getPostDetail();
    this.getOtherPosts();
    this.updateComments();
    this.toastrService.success('Post initiated: on demand');
    this.getViewers();

  }

  ngOnDestroy(): void {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }



  getDate(date: string): string {

    var custom_date_formats = {
      past: [
        {ceiling: 60, text: "$seconds seconds ago"},
        {ceiling: 3600, text: "$minutes minutes ago"},
        {ceiling: 86400, text: "$hours hours ago"},
        {ceiling: 2629744, text: "$days days ago"},
        {ceiling: 31556926, text: "$months months ago"},
        {ceiling: null, text: "$years years ago"}
      ],
      future: [
        {ceiling: 60, text: "in $seconds seconds"},
        {ceiling: 3600, text: "in $minutes minutes"},
        {ceiling: 86400, text: "in $hours hours"},
        {ceiling: 2629744, text: "in $days days"},
        {ceiling: 31556926, text: "in $months months"},
        {ceiling: null, text: "in $years years"}
      ]
    }


    return humanized_time_span(date.toString().replace("[UTC]", ""), new Date().toLocaleDateString(), custom_date_formats, null);
  }


  ngAfterContentChecked(): void {
    this.cdRef.detectChanges();
  }


}


export function humanized_time_span(date, ref_date, date_formats, time_units) {
  //Date Formats must be be ordered smallest -> largest and must end in a format with ceiling of null
  date_formats = date_formats || {
    past: [
      {ceiling: 60, text: "$seconds seconds ago"},
      {ceiling: 3600, text: "$minutes minutes ago"},
      {ceiling: 86400, text: "$hours hours ago"},
      {ceiling: 2629744, text: "$days days ago"},
      {ceiling: 31556926, text: "$months months ago"},
      {ceiling: null, text: "$years years ago"}
    ],
    future: [
      {ceiling: 60, text: "in $seconds seconds"},
      {ceiling: 3600, text: "in $minutes minutes"},
      {ceiling: 86400, text: "in $hours hours"},
      {ceiling: 2629744, text: "in $days days"},
      {ceiling: 31556926, text: "in $months months"},
      {ceiling: null, text: "in $years years"}
    ]
  };
  //Time units must be be ordered largest -> smallest
  time_units = time_units || [
    [31556926, 'years'],
    [2629744, 'months'],
    [86400, 'days'],
    [3600, 'hours'],
    [60, 'minutes'],
    [1, 'seconds']
  ];

  date = new Date(date);
  ref_date = ref_date ? new Date(ref_date) : new Date();
  var seconds_difference = (ref_date - date) / 1000;

  var tense = 'past';
  if (seconds_difference < 0) {
    tense = 'future';
    seconds_difference = 0 - seconds_difference;
  }

  function get_format() {
    for (var i = 0; i < date_formats[tense].length; i++) {
      if (date_formats[tense][i].ceiling == null || seconds_difference <= date_formats[tense][i].ceiling) {
        return date_formats[tense][i];
      }
    }
    return null;
  }

  function get_time_breakdown() {
    var seconds = seconds_difference;
    var breakdown = {};
    for (var i = 0; i < time_units.length; i++) {
      var occurences_of_unit = Math.floor(seconds / time_units[i][0]);
      seconds = seconds - (time_units[i][0] * occurences_of_unit);
      breakdown[time_units[i][1]] = occurences_of_unit;
    }
    return breakdown;
  }

  function render_date(date_format) {
    var breakdown = get_time_breakdown();
    var time_ago_text = date_format.text.replace(/\$(\w+)/g, function () {
      return breakdown[arguments[1]];
    });
    return depluralize_time_ago_text(time_ago_text, breakdown);
  }

  function depluralize_time_ago_text(time_ago_text, breakdown) {
    for (var i in breakdown) {
      if (breakdown[i] == 1) {
        var regexp = new RegExp("\\b" + i + "\\b");
        time_ago_text = time_ago_text.replace(regexp, function () {
          return arguments[0].replace(/s\b/g, '');
        });
      }
    }
    return time_ago_text;
  }

  return render_date(get_format());
}
