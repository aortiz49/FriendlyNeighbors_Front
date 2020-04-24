import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from '../layout/main-layout/main-layout.component';
import {DashboardComponent} from './dashboard.component';
import { LoginComponent } from '../login/login.component';
import { NeighborhoodListComponent } from '../neighborhood/neighborhood-list/neighborhood-list.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: MainLayoutComponent,
    children: [
      { path: '', component: NeighborhoodListComponent }
        ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
