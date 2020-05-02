import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  neighId: number;

  ngOnInit() {
    this.neighId = +this.route.snapshot.paramMap.get('id');

    console.log(+this.route.snapshot.paramMap.get('id'));
  }
}
