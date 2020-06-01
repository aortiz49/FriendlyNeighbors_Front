import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavorRegistrationComponent } from './favor-registration.component';

const routes: Routes = [
  {
    path: 'neighborhoods/:id/newFavor',
    component: FavorRegistrationComponent,
    children: [
      { path: '', component: FavorRegistrationComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavorRegistrationRoutingModule { }
