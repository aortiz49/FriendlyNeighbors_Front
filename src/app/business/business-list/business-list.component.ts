import { Component, OnInit } from '@angular/core';
import { Business } from '../business';
import { BusinessService } from '../business.service';
import { BusinessDetail } from '../business-detail';


@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent implements OnInit {

  constructor(private bussinessService: BusinessService) {

  }
  selectedBusiness:BusinessDetail;
  selected=false;
  public businesses:Array<Business>;

  getAllBusiness(){
    this.bussinessService.getbusinesses().subscribe(bs => {
        this.businesses = bs;
      }
    )
  }

  onSelected(c:BusinessDetail):void{
    this.selected = true;
    this.selectedBusiness = c;
  }

  ngOnInit() {
      this.getAllBusiness();
  }

}
