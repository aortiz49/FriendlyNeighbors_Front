import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {PostService} from "../post.service";
import {ToastrService} from "ngx-toastr";
import {Post} from "../post";
import {NgForm} from "@angular/forms";
import {CommentP} from "../commentP";
import {ImageService} from "../../shared/file-picker/image.service";
import {FilePickerComponent} from "../../shared/file-picker/file-picker.component";

@Component({
  selector: 'app-post-comment-create',
  templateUrl: './post-comment-create.component.html',
  styleUrls: ['./post-comment-create.component.css']
})
export class PostCommentCreateComponent implements OnInit, OnChanges {

  constructor(private postService: PostService, private toastrService: ToastrService) {
  }

  @Input() post: Post;

  comment: CommentP;

  public isCollapsed = true;

  @Output() updateComment = new EventEmitter();


  postComment(reviewForm: NgForm): CommentP {

    console.log(this.comment)

    this.postService.createcomment(this.post.author.neighborhood.id, this.post.id, this.post.author.id, this.comment)
      .subscribe(() => {
        reviewForm.resetForm();
        this.updateComment.emit();
        this.toastrService.success("Comment was successfully created", 'Comment added');
      }, err => {
        this.toastrService.error(err, 'Error');
      });
    return this.comment;
  }


  ngOnInit() {
    this.comment = new CommentP();
    // @ts-ignore
    this.comment.date = new Date();
    this.isCollapsed = true;
  }

  ngOnChanges(): void {

  }

}
