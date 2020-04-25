import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessListComponent } from './business-list/business-list.component';
import { BusinessDetailComponent } from './business-detail/business-detail.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BusinessListComponent, BusinessDetailComponent],
  exports:[BusinessListComponent]
})
export class BusinessModule { }
