import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostService} from "../post.service";
import {ToastrService} from "ngx-toastr";
import {Post} from "../post";
import {CommentP} from "../commentP";
import {NgForm} from "@angular/forms";
import {PostDetail} from "../post-detail";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(private postService: PostService, private toastrService: ToastrService) {
  }

  @Input() post: PostDetail;
  @Input() residen_id: number;
  @Input() neigh_id: number;

  @Output() updatePost = new EventEmitter();


  postComment(reviewForm: NgForm): PostDetail {



    this.postService.createpost(this.neigh_id, this.post, this.residen_id)
      .subscribe(() => {
        reviewForm.resetForm();
        this.updatePost.emit();
        this.toastrService.success("Post was successfully created", 'Post added');
      }, err => {
        this.toastrService.error(err, 'Error');
      });
    return this.post;
  }



  ngOnInit() {
        this.post = new PostDetail();

  }

  ngOnChanges(): void {

  }
}
