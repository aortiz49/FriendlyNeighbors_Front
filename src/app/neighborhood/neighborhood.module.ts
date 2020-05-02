import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Neighborhood } from './neighborhood';
import { NeighborhoodDetailComponent } from './neighborhood-detail/neighborhood-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ResidentsListComponent } from './residents-list/residents-list.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path: 'neighborhoods/:id', component: NeighborhoodDetailComponent},
  { path: 'neighborhoods/:id/residents', component: ResidentsListComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule],
  declarations: [NeighborhoodDetailComponent,ResidentsListComponent],
  exports: [NeighborhoodDetailComponent,ResidentsListComponent,RouterModule],
})
export class NeighborhoodModule {}
