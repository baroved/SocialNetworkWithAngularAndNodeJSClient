import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-upload-post',
  templateUrl: './upload-post.component.html',
  styleUrls: ['./upload-post.component.css']
})
export class UploadPostComponent implements OnInit {

  url: string;
  uploadFileForm: FormGroup;
  users: any;

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) {
    this.InitValidations();
  }

  InitValidations() {
    this.uploadFileForm = this.fb.group({
      image: ['', [Validators.required]],
      text: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

 

  onSearchUsers(search: string) {
    if (search.length >= 4 && search[0] === '@') {
      this.userService.GetUsersByFilter(search).subscribe(res => {
        this.users = res;
      });
    } else {
      this.users = [];
    }
  }

}
