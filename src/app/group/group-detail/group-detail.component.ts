import {Component, Input, OnInit} from '@angular/core';
import {Group} from "../group";
import {GroupService} from "../group.service";
import {ResidentDetail} from "../../home/resident-detail";
import {ActivatedRoute} from "@angular/router";
import {GroupDetail} from "../group-detail";

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css', './group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit {

  constructor(private  service: GroupService,
              private route: ActivatedRoute) {
  }

  @Input() group: GroupDetail;
  @Input() group_id: number;
  @Input() neigh_id: number;
  toggle1: boolean;
  toggle2: boolean;

  ngOnInit() {
    this.group = new GroupDetail();

    this.neigh_id = +this.route.root.firstChild.firstChild.snapshot.paramMap.get("id");
    this.group_id = +this.route.root.firstChild.firstChild.firstChild.firstChild.snapshot.paramMap.get("id");
    this.getDetail();
    this.toggle1 = true;
    this.toggle2 = false;

  }

  getDetail(): void {

    this.service.getgroup(this.neigh_id, this.group_id)
      .subscribe(o => {
        this.group = o;

      });
  }

  toggle11() {
    this.toggle1 = !this.toggle1;
  }

  toggle12() {
    this.toggle2 = !this.toggle2;
  }

  isEmpty(atr): boolean {

    let rta: boolean;

    if (atr == undefined) {
      rta = true;
    } else if (atr == null) {
      rta = true;
    } else if (atr.toString() == '') {
      rta = true;
    }
    return rta;
  }

}

