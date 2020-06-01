import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../neighborhoodLayout/main-layout/main-layout.component';
import { BusinessRoutingComponent } from '../business/business-routing/business-routing.component';
import { LocationRegistrationComponent } from './location-registration.component';


const routes: Routes = [
  {
    path: 'neighborhoods/:id/newLocation',
    component: LocationRegistrationComponent,
    children: [
      { path: '', component: LocationRegistrationComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRegistrationRoutingModule { }
