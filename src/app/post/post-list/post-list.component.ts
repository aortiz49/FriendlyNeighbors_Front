import {Component, Input, OnInit} from '@angular/core';

import {PostService} from "../post.service";
import {Business} from "../../business/business";
import {Resident} from "../../resident/resident";
import {Post} from "../post";
import {PostDetail} from "../post-detail";


declare var $: any;

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css'],
})

export class PostListComponent implements OnInit {

    constructor(private  postService: PostService) {

    }

  @Input() neigh_id: number;

  public show: boolean;

  public toggle() {
    this.show = !this.show;
  }


  public posts: PostDetail[];

  getAllPosts(){
    this.postService.getposts(this.neigh_id).subscribe(bs => {
        this.posts = bs;
      }
    )
  }

  ngOnInit() {

    this.show = false;
    this.getAllPosts();
  }


}



