import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeighborhoodListComponent } from './neighborhood-list/neighborhood-list.component';
import { Neighborhood } from './neighborhood';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NeighborhoodListComponent],
  exports:[NeighborhoodListComponent]
})
export class NeighborhoodModule { }
