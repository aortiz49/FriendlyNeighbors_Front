import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResidentListComponent} from "./resident-list/resident-list.component";



@NgModule({
  declarations: [ResidentListComponent],
  exports: [
    ResidentListComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class ResidentModule { }
