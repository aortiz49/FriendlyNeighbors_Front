import {Component, Input, OnInit} from '@angular/core';
import {CommentP} from "../commentP";
import {humanized_time_span} from "../post-detail/post-detail.component";

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

  constructor() { }

  @Input() comments: CommentP[];


  public isCollapsed = true;

  currentComment: CommentP;

  updateComments(comments:CommentP[]): void {
    this.comments = comments;
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


  ngOnInit(){
    this.currentComment = new CommentP();
    this.isCollapsed = true;
  }
}
