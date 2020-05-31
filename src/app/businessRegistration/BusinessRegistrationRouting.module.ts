import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../neighborhoodLayout/main-layout/main-layout.component';
import { BusinessRoutingComponent } from '../business/business-routing/business-routing.component';
import { BusinessRegistrationComponent } from './businessRegistration.component';


const routes: Routes = [
  {
    path: 'neighborhoods/:id/newBusiness',
    component: BusinessRegistrationComponent,
    children: [
      { path: '', component: BusinessRegistrationComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRegistrationRoutingModule { }
