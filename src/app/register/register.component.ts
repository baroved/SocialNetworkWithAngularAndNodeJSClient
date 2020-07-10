import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
newUser: User;
registerForm: FormGroup;
Ok: boolean;

  constructor(private userService: UserService,
              private router: Router, private fb: FormBuilder) {
        this.newUser = new User();
        this.InitValidations();
  }

  InitValidations() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      image: ['', [Validators.required]],
      workAddress: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      birthDate: ['', [Validators.required]]
    });
  }

  get Controllers() {
    return this.registerForm.controls;
  }

  ngOnInit() {
    this.Ok = true;
  }
  Register() {
    this.userService.Register(this.newUser).subscribe(res => {
      if (res === true) { this.router.navigate(['/Login']); } else { this.Ok = false; }
    }
    );
  }

}
