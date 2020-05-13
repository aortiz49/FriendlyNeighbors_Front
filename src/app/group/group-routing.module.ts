import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "../home-layout/main-layout/main-layout.component";
import {HomeComponent} from "../home/home.component";
import {GroupListComponent} from "./group-list/group-list.component";


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
              component: GroupListComponent,


            }

          ]
        }
      ]
    }
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule {
}
