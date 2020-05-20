import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "../../home-layout/main-layout/main-layout.component";
import {HomeComponent} from "../home.component";
import {ExtendedGalleryComponent} from "./extended-gallery.component";


const routes: Routes = [
  {
    path: 'neighborhoods',
    component: MainLayoutComponent,
    children: [
      {
        path: ':id',
        children: [
          {
            path: 'residents',
            children: [
              {
                path: ':id',
                children: [
                  {
                    path: 'gallery',
                    component: ExtendedGalleryComponent
                  }

                ]


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
export class ExtendedGalleryModuleModule {
}
