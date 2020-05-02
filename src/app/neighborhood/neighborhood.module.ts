import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  declarations: [NeighborhoodDetailComponent],
  exports:[NeighborhoodDetailComponent]
})
export class NeighborhoodModule { }
