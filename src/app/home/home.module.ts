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
import { ExtendedGalleryComponent } from './extended-gallery/extended-gallery.component';
import { SimpleResidentListComponent } from './simple-resident-list/simple-resident-list.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    PostModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    SimpleFavorListComponent,
    SimpleEventListComponent,
    SimpleResidentListComponent,
    ExtendedGalleryComponent
  ],
  declarations: [HomeComponent, SimpleFavorListComponent, SimpleEventListComponent, SimpleFavorComponent, SimpleEventComponent, GalleryComponent, InfoComponent, ExtendedGalleryComponent, SimpleResidentListComponent]
})
export class HomeModule { }
