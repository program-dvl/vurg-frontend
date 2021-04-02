import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Location } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:AuthService, private toastr: ToastrService, location: Location, private router:Router) {}
  disableBtn: boolean;
  userName: string;

  ngOnInit(): void {
    this.disableBtn = false;
    var userInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (userInfo ) {
        this.router.navigateByUrl('/dashboard');
      }
  }

  form = new FormGroup({
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  get f(){
    return this.form.controls;
  }

  submit(){
    this.disableBtn = true;
    this.form.markAllAsTouched();
    if (!this.form.invalid) {
      this.service.login(this.form.value)
      .subscribe((response) => {
        localStorage.setItem('userInfo',JSON.stringify(response['data']));
        localStorage.setItem('token_type', response['data']['token_type']);
        localStorage.setItem('access_token', response['data']['access_token']);
        this.router.navigateByUrl('/dashboard');
      },
      error => {
        if (error.status == 422){
          this.toastr.error(error.error.errors.message);
          this.disableBtn = false;
        }
        if (error.status == 419 || 404){
          this.toastr.error(error.error.message);
          this.disableBtn = false;
        }
      });
    }
  }

}
