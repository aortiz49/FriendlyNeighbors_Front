import { NgModule } from '@angular/core';
import {MainLayoutComponent} from "../../layout/main-layout/main-layout.component";
import {GroupListComponent} from "../group-list/group-list.component";
import {RouterModule, Routes} from "@angular/router";
import {GroupDetailComponent} from "./group-detail.component";



const routes: Routes = [
  {
    path: 'neighborhoods',
    component: MainLayoutComponent,
    children: [
      {
        path: ':id',
        children: [
          {
            path: 'groups',
            children: [
              {
                path: ':id',
                component: GroupDetailComponent
              }

            ]

          }

        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupDetailRoutingModule {
}
