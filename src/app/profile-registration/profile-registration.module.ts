import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRegistrationComponent } from './profile-registration.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'newProfile',
    component: ProfileRegistrationComponent,
    children: [
      { path: '', component: ProfileRegistrationComponent }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfileRegistrationComponent]
})
export class ProfileRegistrationModule { }
