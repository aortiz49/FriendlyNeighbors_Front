import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NeighborhoodModule } from '../neighborhood/neighborhood.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LocationComponent } from './location.component';
import { MainLayoutComponent } from '../neighborhoodLayout/main-layout/main-layout.component';
import { LocationListComponent } from './location-list/location-list.component';

const routes: Routes = [
  {
    path: 'neighborhoods/:id/locations',
    component: MainLayoutComponent,
    children: [{ path: '', component: LocationListComponent }],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    NeighborhoodModule,
    ReactiveFormsModule,
  ],
  declarations: [LocationComponent,LocationListComponent],
  exports: [LocationComponent,FormsModule,ReactiveFormsModule,LocationListComponent],
})
export class LocationModule {}
