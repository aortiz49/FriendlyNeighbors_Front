import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import { PostCommentComponent } from './post-comment/post-comment.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
    ],
  declarations: [PostListComponent, , PostCommentComponent],
  exports: [PostListComponent]
})
export class PostModule { }
