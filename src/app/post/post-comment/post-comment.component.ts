import {Component, Input, OnInit} from '@angular/core';
import {CommentP} from "../commentP";

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

  constructor() { }

  @Input() comments: CommentP[];


  public isCollapsed = true;


  updateComments(comments:CommentP[]): void {
    this.comments = comments;
  }

  ngOnInit(){
    this.isCollapsed = true;
  }

}
