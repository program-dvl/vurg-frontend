import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
  
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL = environment.apiURL;
   
  constructor(private httpClient: HttpClient) { }
  
  register(post){
    return this.httpClient.post(this.apiURL+ "/register", post);
  }

  login(post){
    return this.httpClient.post(this.apiURL+ "/login", post);
  }
  
}