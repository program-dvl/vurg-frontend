import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.css']
})
export class HeaderNavigationComponent implements OnInit {
  currentUrl: string;
  constructor(private router: Router,private location: Location) {
    router.events.subscribe(val => {
      if (location.path() != "") {
        this.currentUrl = location.path();
      } else {
        this.currentUrl = "/";
      }
    });
    
  }

  ngOnInit(): void {
    
  }

}
