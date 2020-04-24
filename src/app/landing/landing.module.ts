import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { Routes, RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';

const routes: Routes = [
  {
    path: 'main',
    component: LandingComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
  ],
  declarations: [LandingComponent],
  exports: [LandingComponent]
})
export class LandingModule { }
