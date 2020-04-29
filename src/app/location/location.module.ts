import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NeighborhoodModule } from '../neighborhood/neighborhood.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LocationComponent } from './location.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NeighborhoodModule,
    ReactiveFormsModule,
  ],
  declarations: [LocationComponent],
  exports: [LocationComponent,FormsModule,ReactiveFormsModule],
})
export class LocationModule {}
