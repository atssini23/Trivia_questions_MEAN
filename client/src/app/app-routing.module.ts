import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersLoginComponent } from "./users/users-login/users-login.component"
import { UsersDashboardComponent } from "./users/users-dashboard/users-dashboard.component"
import { BucketListComponent } from './bucket-list/bucket-list.component';

const routes: Routes = [
  { path: "login", component: UsersLoginComponent },
  { path: "dashboard", component: UsersDashboardComponent },
  { path: "", pathMatch: "full", redirectTo: "/login"},
  { path: "user/:id", component: BucketListComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }