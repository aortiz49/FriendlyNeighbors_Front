import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeighborhoodRegistrationComponent } from './neighborhood-registration.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'newNeighborhood',
    component: NeighborhoodRegistrationComponent,
    children: [
      { path: '', component: NeighborhoodRegistrationComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  declarations: [NeighborhoodRegistrationComponent],
  exports: [NeighborhoodRegistrationComponent]
})
export class NeighborhoodRegistrationModule { }
