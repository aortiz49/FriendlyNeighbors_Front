import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NeighborhoodModule } from '../neighborhood/neighborhood.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BusinessRegistrationComponent } from './businessRegistration.component';
import { ResidentModule } from '../resident/resident.module';
import { BusinessRoutingModule } from '../business/business-routing/business-routing.module';
import { BusinessRegistrationRoutingModule } from './BusinessRegistrationRouting.module';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NeighborhoodModule,
    ResidentModule,
    ReactiveFormsModule,
    BusinessRegistrationRoutingModule
  ],
  declarations: [BusinessRegistrationComponent],
  exports: [BusinessRegistrationComponent]
})
export class BusinessRegistrationModule { }
