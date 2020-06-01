import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NeighborhoodModule } from '../neighborhood/neighborhood.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ResidentModule } from '../resident/resident.module';
import { FavorRegistrationRoutingModule } from './favorRegistrationRouting.module';
import { FavorRegistrationComponent } from './favor-registration.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NeighborhoodModule,
    ResidentModule,
    ReactiveFormsModule,
    FavorRegistrationRoutingModule
  ],
  declarations: [FavorRegistrationComponent],
  exports: [FavorRegistrationComponent]
})
export class FavorRegistrationModule { }
