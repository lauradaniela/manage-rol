import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AwardsComponent } from './awards/awards.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'awards', component: AwardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
