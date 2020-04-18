import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PostModule} from "./post/post.module";
import {ResidentModule} from "./resident/resident.module";
import {BusinessModule} from "./business/business.module";
import {NotificationModule} from "./notification/notification.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PostModule,
    ResidentModule,
    BusinessModule,
    NotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
