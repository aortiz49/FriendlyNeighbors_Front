import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostModule } from './post/post.module';
import { ResidentModule } from './resident/resident.module';
import { BusinessModule } from './business/business.module';
import { NotificationModule } from './notification/notification.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NeighborhoodModule } from './neighborhood/neighborhood.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PostModule,
    ResidentModule,
    BusinessModule,
    NotificationModule,
    NeighborhoodModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
