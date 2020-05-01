import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from '../layout/main-layout/main-layout.component';
import {HomeComponent} from './home.component';

const routes: Routes = [
  {
    path: 'neighborhood',
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
                component: HomeComponent
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
export class HomeRoutingModule {
}
