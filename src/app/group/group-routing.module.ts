import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {GroupListComponent} from "./group-list/group-list.component";
import { MainLayoutComponent } from '../neighborhoodLayout/main-layout/main-layout.component';


const routes: Routes = [
  {
    path: 'neighborhoods/:id/groups',
    component: MainLayoutComponent,
    children: [{ path: '', component: GroupListComponent }],
  }
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule {
}
