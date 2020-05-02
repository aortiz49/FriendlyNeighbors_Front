import {Component, Input, OnInit} from '@angular/core';
import {Business} from "../../business/business";
import {PostService} from "../../post/post.service";
import {Post} from "../../post/post";
import {ResidentService} from "../resident.service";
import {Resident} from "../resident";
import {ResidentDetail} from "../resident-detail";

@Component({
  selector: 'app-resident-list',
  templateUrl: './resident-list.component.html',
  styleUrls: ['./resident-list.component.css']
})
export class ResidentListComponent implements OnInit {

  constructor(private  residentService: ResidentService) {

  }

  @Input() neigh_id: number;

  public residents: ResidentDetail[];

  public show: boolean;

  public toggle() {
    this.show = !this.show;
  }


  getAllPosts() {
    this.residentService.getresidents(this.neigh_id).subscribe(bs => {
        this.residents = bs;
      }
    )
  }

  ngOnInit() {
    this.show = false;
    this.getAllPosts();
  }
}
