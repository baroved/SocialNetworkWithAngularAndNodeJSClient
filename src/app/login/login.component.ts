import { Component, OnInit } from '@angular/core';

import { User } from '../Models/User';
import { Router } from '@angular/router';
import { isArray } from 'util';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { VirtualTimeScheduler } from 'rxjs';
import { UserService } from '../services/user/user.service';
import { ok } from 'assert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userService: UserService;
  currentUser: User;
  Ok: boolean;
  loginForm: FormGroup;

  constructor(
    userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.userService = userService;
    this.currentUser = new User();
    this.InitValidations();
  }

  InitValidations() {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get Controllers() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.currentUser.Name = 'rrrrr';
    this.currentUser.Password = '11111111';
    this.Ok = true;
  }

  Login() {
    this.userService.Login(this.currentUser).subscribe(res => {
          if (res.flag) {
        this.router.navigate(['/filters'], res.data);
        this.Ok = !this.Ok;
      } else {
        this.Ok = false;
      }
    });
  }
}
