import {Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {PostListComponent} from "../../post/post-list/post-list.component";
import {MethodInvocationService} from "../../shared/method-invocation.service";


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, OnChanges {

  searchModel: string;
  searchType: string;

  update(): void {

  }

  constructor( private toastrService: ToastrService,
               private invocationService: MethodInvocationService) {
    console.log('Main layout constructor called');
  }

  ngOnInit() {
    this.searchModel = "";
  }



  ngOnChanges(changes: SimpleChanges): void {

  }

  clickMe(){
    this.invocationService.sendClickEvent();
  }


  setType(t){
    this.searchType = t;
  }

  test(){
    this.toastrService.success(this.searchModel);
    this.toastrService.success(this.searchType);

  }

}
