import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeighborhoodListComponent } from './neighborhood-list/neighborhood-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NeighborhoodListComponent],
  exports:[NeighborhoodListComponent]
})
export class NeighborhoodModule { }
