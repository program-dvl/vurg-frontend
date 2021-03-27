import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.css']
})
export class AuthHeaderComponent implements OnInit {
  userName: string;
  
  constructor(private router:Router) { 
  }

  ngOnInit(): void {
    var userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo !== null) {
      this.userName = userInfo.name;
    }
  }

  logout() {
    localStorage.removeItem('userInfo');
    this.router.navigateByUrl('/login');
  }

}
