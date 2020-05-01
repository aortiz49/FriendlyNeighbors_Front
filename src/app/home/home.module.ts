import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SimpleFavorListComponent } from './simple-favor-list/simple-favor-list.component';
import { SimpleEventListComponent } from './simple-event-list/simple-event-list.component';
import {PostModule} from "../post/post.module";
import { SimpleFavorComponent } from './simple-favor-list/simple-favor/simple-favor.component';
import { SimpleEventComponent } from './simple-event-list/simple-event/simple-event.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    PostModule
  ],
  exports: [
    SimpleFavorListComponent,
    SimpleEventListComponent
  ],
  declarations: [HomeComponent, SimpleFavorListComponent, SimpleEventListComponent, SimpleFavorComponent, SimpleEventComponent, GalleryComponent, InfoComponent]
})
export class HomeModule { }
