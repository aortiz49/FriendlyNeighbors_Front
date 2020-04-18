import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PostModule} from "./post/post.module";
import {ResidentModule} from "./resident/resident.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PostModule,
    ResidentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
