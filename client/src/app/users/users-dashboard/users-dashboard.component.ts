import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { User } from "./../user"
import { UserService } from "./../user.service"
import { BucketListService } from '../../bucket-list/bucket-list.service';
import { BucketList } from '../../bucket-list/bucket-list';
 
 
@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements OnInit {
  user_list: Array<User>
  current_user: User
  bucket_list = []
  new_bucket = {
    title: '',
    description: '',
    user_id: ''
  }
 
  constructor(private user_service: UserService, private bucket_list_service: BucketListService, private router: Router) { }
 
  ngOnInit() {
 
    this.user_service.get_all_users()
      .then(data => this.user_list = data)
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
        .then(data => {
          this.bucket_list = data;
          console.log('bucket list', this.bucket_list);
        })
        .catch(err => console.log(err));
  }
 
  onSubmit() {
    var newBucketUser = this.user_list.find(user => user._id === this.current_user._id);
    var newBucketList = {
      title: this.new_bucket.title,
      description: this.new_bucket.description,
      status: false,
      user_id: this.current_user._id,
      user_name: newBucketUser.name,
      tagged_user_id: this.new_bucket.user_id
    };

    console.log('new', newBucketList);

    this.bucket_list_service.create(newBucketList)
      .then(data => {
        this.bucket_list.push(newBucketList);
      })
      .catch(err => console.log(err));
  }
 
  onCheck(bucket) {
    let updatedBucket = this.bucket_list.find(buck => buck._id === bucket._id);
    updatedBucket.status = !updatedBucket.status;
    this.bucket_list_service.update(updatedBucket)
      .catch(err => console.log(err))
  }
}
