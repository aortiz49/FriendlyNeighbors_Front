import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SimpleFavorListComponent } from './simple-favor-list/simple-favor-list.component';
import { SimpleEventListComponent } from './simple-event-list/simple-event-list.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [UsersComponent, SimpleFavorListComponent, SimpleEventListComponent]
})
export class UsersModule { }
