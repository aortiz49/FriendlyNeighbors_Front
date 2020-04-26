import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { PostModule } from './post/post.module';
import { ResidentModule } from './resident/resident.module';
import { BusinessModule } from './business/business.module';
import { NotificationModule } from './notification/notification.module';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './utility/HttpErrorInterceptorService.service';
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

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'neighborhoods', component: NeighborhoodListComponent },
  { path: 'main', component: LandingComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-left',
      preventDuplicates: true
    }),
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
    AccountSettingsModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ]
})
export class AppModule {}
