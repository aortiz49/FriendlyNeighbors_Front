import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeighborhoodListComponent } from './neighborhood-list/neighborhood-list.component';
import { Neighborhood } from './neighborhood';
import { NeighborhoodDetailComponent } from './neighborhood-detail/neighborhood-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'neighborhoods/:id',
    component: NeighborhoodDetailComponent,
    children: [
      { path: '', component: NeighborhoodDetailComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  declarations: [NeighborhoodListComponent,NeighborhoodDetailComponent],
  exports:[NeighborhoodListComponent,NeighborhoodDetailComponent]
})
export class NeighborhoodModule { }
