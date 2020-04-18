import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { PostCommentCreateComponent } from './post-comment-create/post-comment-create.component';
import { PostCommentEditComponent } from './post-comment-edit/post-comment-edit.component';
import { PostCommentDeleteComponent } from './post-comment-delete/post-comment-delete.component';
import { PostDeleteComponent } from './post-delete/post-delete.component';
import {SpacerComponent} from "./spacer/spacer.component";
import {AppModule} from "../app.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
    ],
  declarations: [SpacerComponent, PostListComponent, PostDetailComponent, PostCommentComponent, PostCommentCreateComponent, PostCommentEditComponent, PostCommentDeleteComponent, PostDeleteComponent],
  exports: [PostListComponent]
})
export class PostModule { }
