import { Component, OnInit } from '@angular/core';
import { Business } from '../business';
import { BusinessService } from '../business.service';


@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent implements OnInit {

  constructor(private bussinessService: BusinessService) {

  }

  public businesses:Array<Business>;

  getAllBusiness(){
    this.bussinessService.getbusinesses().subscribe(bs => {
        this.businesses = bs;
      }
    )
  }

  ngOnInit() {
      this.getAllBusiness();
  }

}
