import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostModule } from './post/post.module';
import { ResidentModule } from './resident/resident.module';
import { BusinessModule } from './business/business.module';
import { NotificationModule } from './notification/notification.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NeighborhoodModule } from './neighborhood/neighborhood.module';
import { LandingModule } from './landing/landing.module';
import { Routes, RouterModule } from '@angular/router';
import { NeighborhoodListComponent } from './neighborhood/neighborhood-list/neighborhood-list.component';
import { LandingComponent } from './landing/landing.component';
import { LayoutModule } from './layout/layout.module';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RegistrationModule } from './registration/registration.module';
import { UsersModule } from './users/users.module';
import { AccountSettingsModule } from './account-settings/account-settings.module';
import { NeighborhoodRegistrationModule } from './neighborhood-registration/neighborhood-registration.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'neighborhoods', component: NeighborhoodListComponent },
  { path: 'main', component: LandingComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    LandingModule,
    BrowserModule,
    BrowserAnimationsModule,
    PostModule,
    ResidentModule,
    BusinessModule,
    NotificationModule,
    NeighborhoodModule,
    HttpClientModule,
    LayoutModule,
    LoginModule,
    DashboardModule,
    RegistrationModule,
    NeighborhoodRegistrationModule,
    UsersModule,
    AccountSettingsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
