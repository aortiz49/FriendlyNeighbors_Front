import { Component, OnInit } from '@angular/core';
import { Business } from '../business';
import { BusinessService } from '../business.service';
import { BusinessDetail } from '../business-detail';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css'],
})
export class BusinessListComponent implements OnInit {
  constructor(
    private bussinessService: BusinessService,
    private route: ActivatedRoute
  ) {}
  neighId: number;
  selectedBusiness: BusinessDetail;
  selected = false;
  public businesses: Array<Business>;
  public filteredBusinesses: Array<Business>;

  RateForm = new FormGroup({
    rating: new FormControl(null),
  });

  onSubmit(): void {
  this.filteredBusinesses = [];

    console.log(this.RateForm.get('rating').value);
    console.log(this.businesses);

    for (let index = 0; index < this.businesses.length; index++) {
      if (this.businesses[index].rating >= this.RateForm.get('rating').value) {
        this.filteredBusinesses.push(this.businesses[index]);
        console.log('\n' + this.businesses[index].name);
      }
    }
  }

  getAllBusiness() {
    console.log('In de getAllBusiness');

    this.bussinessService.getbusinesses(this.neighId).subscribe((bs) => {
      this.businesses = bs;
      this.filteredBusinesses = bs;
    });
  }

  onSelected(c: BusinessDetail): void {
    this.selected = true;
    this.selectedBusiness = c;
  }

  nothingSelected(): void {
    this.selected = false;
  }

  ngOnInit() {
    this.neighId = +this.route.snapshot.paramMap.get('id');
    this.getAllBusiness();
  }
}
