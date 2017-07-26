import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"

import { BucketListService } from './bucket-list.service';
import { BucketList } from './bucket-list';

import { UserService } from '../users/user.service';
import { User } from '../users/user';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.css']
})
export class BucketListComponent implements OnInit {
  current_user: User
  user_id: string;
  user: User
  bucket_list = []

  constructor(private bucket_list_service: BucketListService, private user_service: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.user_service.get_all_users()
      .then(users => this.user = users.find(user => user._id === this.user_id))
      .catch(err => console.log(err))

    this.user_service.get_logged_in_user()
      .then(data => {
        if(data){
          this.current_user = data
        } else {
         this.router.navigate(["/login"])
        }
      })
      .catch(err => console.log(err))

    this.bucket_list_service.list()
      .then(data => this.bucket_list = data)
      .catch(err => console.log(err))

    this.route.params.subscribe(params => this.user_id = params.id)
  }
}
