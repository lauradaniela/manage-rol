import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { LoginComponent } from './login/login.component';
import { AwardsComponent } from './awards/awards.component';
import { ListAwardsComponent } from './awards/list-awards/list-awards.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { ListUsersComponent } from './users/list-users/list-users.component';

// Services
import { AwardService } from './services/award/award.service';
import { UserService } from './services/user/user.service';
import { AddAwardComponent } from './awards/add-award/add-award.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AwardsComponent,
    ListAwardsComponent,
    UsersComponent,
    AddUserComponent,
    ListUsersComponent,
    AddAwardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [
    UserService,
    AwardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
