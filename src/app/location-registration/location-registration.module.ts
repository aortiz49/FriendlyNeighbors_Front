import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationRegistrationComponent } from './location-registration.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'newLocation',
    component: LocationRegistrationComponent,
    children: [
      { path: '', component: LocationRegistrationComponent }
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LocationRegistrationComponent]
})
export class LocationRegistrationModule { }
