import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupDetailComponent } from './group-detail/group-detail.component';
import {GroupRoutingModule} from "./group-routing.module";
import { SimpleResidentComponent } from './simple-resident/simple-resident.component';
import { GroupListComponent } from './group-list/group-list.component';
import {GroupDetailRoutingModule} from "./group-detail/group-detail-routing.module";
import {PostModule} from "../post/post.module";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {HomeModule} from "../home/home.module";



@NgModule({
  declarations: [GroupDetailComponent, SimpleResidentComponent, GroupListComponent],
  imports: [
    CommonModule,
    GroupRoutingModule,
    GroupDetailRoutingModule,
    PostModule,
    FormsModule,
    SharedModule,
    HomeModule,

  ]
})
export class GroupModule { }
