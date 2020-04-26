import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginResgistrationComponent } from './login-resgistration.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'newLogin',
    component: LoginResgistrationComponent,
    children: [
      { path: '', component: LoginResgistrationComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  declarations: [LoginResgistrationComponent]
})
export class LoginResgistrationModule { }
