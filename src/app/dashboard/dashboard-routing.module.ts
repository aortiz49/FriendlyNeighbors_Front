import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from '../layout/main-layout/main-layout.component';
import {DashboardComponent} from './dashboard.component';
import { LoginComponent } from '../login/login.component';
import { NeighborhoodDetailComponent } from '../neighborhood/neighborhood-detail/neighborhood-detail.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: MainLayoutComponent,
    children: [
      { path: '', component: NeighborhoodDetailComponent }
        ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
