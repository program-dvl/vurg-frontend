import { Component } from '@angular/core';
import { Router, Event, NavigationStart, RoutesRecognized,
  RouteConfigLoadStart, RouteConfigLoadEnd,
 NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vurg-frontend';
  currentPage: any;
  location: any;
  ngOnInit(): void {
    this.currentPage = location.pathname;  
  }

  constructor(private router: Router) {
    router.events.subscribe( (event: Event) => 
      {
        if (event instanceof NavigationStart) {
          // Navigation started.
          this.currentPage = event.url;
        }
      });
  }

  getClass(){
    if (location.pathname === '/'){
     return "pt-0";
    }
  } 
}
