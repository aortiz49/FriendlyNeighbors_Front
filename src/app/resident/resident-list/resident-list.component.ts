import { Component, Input, OnInit } from '@angular/core';
import { Business } from '../../business/business';
import { PostService } from '../../post/post.service';
import { Post } from '../../post/post';
import { ResidentService } from '../resident.service';
import { Resident } from '../resident';
import { ResidentDetail } from '../resident-detail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resident-list',
  templateUrl: './resident-list.component.html',
  styleUrls: ['./resident-list.component.css'],
})
export class ResidentListComponent implements OnInit {
  constructor(
    private residentService: ResidentService,
    private route: ActivatedRoute
  ) {}

  neighId: number;

  public residents: Resident[];

  getResidents() {
    this.residentService.getresidents(this.neighId).subscribe((residents) => {
      this.residents = residents;
    });
  }

  ngOnInit() {
    this.neighId = +this.route.snapshot.paramMap.get('id');
    this.getResidents();
  }
}
