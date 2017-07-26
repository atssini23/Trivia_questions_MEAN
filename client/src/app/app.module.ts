import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { AppRoutingModule } from './app-routing.module'; // <--- Routing rules imported

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersLoginComponent } from './users/users-login/users-login.component'; //make sure its the right child
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component'; //make sure its right child

import { UserService } from "./users/user.service";
import { BucketListService } from "./bucket-list/bucket-list.service"

import { BucketListComponent } from './bucket-list/bucket-list.component' //made not created

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersLoginComponent,
    UsersDashboardComponent,
    BucketListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
		HttpModule, // <-- Include module in our AppModules
    AppRoutingModule // <--- Our routing rules

  ],
  providers: [UserService, BucketListService], //added 
  bootstrap: [AppComponent]
})
export class AppModule { }
