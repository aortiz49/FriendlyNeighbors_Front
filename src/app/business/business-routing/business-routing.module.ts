import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessListComponent } from '../business-list/business-list.component';
import { MainLayoutComponent } from 'src/app/neighborhoodLayout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: 'neighborhoods/:id/businesses',
    component: MainLayoutComponent,
    children: [ { path: '', component: BusinessListComponent } ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BusinessRoutingModule { }
