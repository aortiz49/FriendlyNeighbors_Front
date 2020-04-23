import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeighborhoodListComponent } from './neighborhood/neighborhood-list/neighborhood-list.component';

const routes: Routes = [
  { path: 'neighborhoods', component: NeighborhoodListComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
