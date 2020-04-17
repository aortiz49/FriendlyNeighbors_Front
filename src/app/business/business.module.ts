import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessListComponent } from './business-list/business-list.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BusinessListComponent],
  exports:[BusinessListComponent]
})
export class BusinessModule { }
