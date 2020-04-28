import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {PostService} from "../../post/post.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {PostDetail} from "../../post/post-detail";
import {Post} from "../../post/post";
import {PostCommentComponent} from "../../post/post-comment/post-comment.component";
import {PostCommentCreateComponent} from "../../post/post-comment-create/post-comment-create.component";
import {humanized_time_span} from "../../post/post-detail/post-detail.component";
import {Favor} from "../../favor/favor";
import {FavorService} from "../../favor/favor.service";

@Component({
  selector: 'app-simple-favor-list',
  templateUrl: './simple-favor-list.component.html',
  styleUrls: ['./simple-favor-list.component.css']
})
export class SimpleFavorListComponent implements OnInit {

  constructor(private  favorService: FavorService,
              private toastrService: ToastrService) {
  }

  favors: Array<Favor>;
  @Input() favor_id: number;
  @Input() neighborhood_id: number;
  @Output() init = new EventEmitter();




  getFavors(): void {
    this.favorService.getFavors(this.neighborhood_id)
      .subscribe(posts => {
        this.favors = posts;
      });
  }


  ngOnInit() {
    this.init.emit();
    console.log("Initiated: on demand")

    this.getFavors();
    this.toastrService.success('Post initiated: on demand');

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


    return humanized_time_span(date.replace("[UTC]", ""), new Date().toLocaleDateString(), custom_date_formats, null);
  }


}
