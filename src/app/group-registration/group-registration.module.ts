import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupRegistrationComponent } from './group-registration/group-registration.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [GroupRegistrationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class GroupRegistrationModule { }
