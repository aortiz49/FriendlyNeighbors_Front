import {Component, Input, OnInit} from '@angular/core';
import {Group} from "../group";
import {GroupService} from "../group.service";
import {ResidentDetail} from "../../home/resident-detail";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {

  constructor(private  service: GroupService,
              private route: ActivatedRoute) {
  }

  @Input() group: Group;
  @Input() group_id: number;
  @Input() neigh_id: number;

  ngOnInit() {
    this.group = new Group();

    this.neigh_id = +this.route.root.firstChild.firstChild.snapshot.paramMap.get("id");
    this.group_id = +this.route.root.firstChild.firstChild.firstChild.firstChild.snapshot.paramMap.get("id");
    this.getDetail();

  }

  getDetail(): void {

    this.service.getgroup(this.neigh_id, this.group_id)
      .subscribe(o => {
        this.group = o;

      });
  }


}
