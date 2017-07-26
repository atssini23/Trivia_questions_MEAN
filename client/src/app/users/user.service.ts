//the middle man 
import { Injectable } from '@angular/core';
import { Http } from "@angular/http" //import Http
import "rxjs"
import { User } from "./user" 

@Injectable()
export class UserService {

  constructor(private http: Http) { } //have to include this in the constructor

  login(user: User){
    return this.http.post("/login", user)
            .map(data => data.json())
            .toPromise()
  }

  get_all_users(){
    return this.http.get("/all_users")
            .map(data => data.json())
            .toPromise()
  }

  get_logged_in_user(){
    return this.http.get("/get_logged_in_user")
            .map(data => data.json())
            .toPromise()
  }

}