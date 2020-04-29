import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostListComponent} from "../post-list/post-list.component";
import {MainLayoutComponent} from "../../layout/main-layout/main-layout.component";


const routes: Routes = [
  {
    path: 'posts',
    component: MainLayoutComponent,
    children: [
      {
        path: ':id', component: PostListComponent

      }

    ]

  }


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostListRoutingModule {
}
