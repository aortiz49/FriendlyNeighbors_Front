import { NgModule } from '@angular/core';
import {GroupListComponent} from "../group-list/group-list.component";
import {RouterModule, Routes} from "@angular/router";
import {GroupDetailComponent} from "./group-detail.component";
import { MainLayoutComponent } from 'src/app/neighborhoodLayout/main-layout/main-layout.component';



const routes: Routes = [
  {
    path: 'neighborhoods/:id/groups/:gid',
    component: MainLayoutComponent,
    children: [{ path: '', component: GroupDetailComponent }],
  }
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupDetailRoutingModule {
}
