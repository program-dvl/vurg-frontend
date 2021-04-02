import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders   } from '@angular/common/http';
import { environment } from '../../environments/environment';
  
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL = environment.apiURL;
  private header = {} 
  constructor(private httpClient: HttpClient) {
    this.header = new HttpHeaders().set(
       localStorage.getItem("token_type"),
       localStorage.getItem("access_token")
    );
   }
  
  register(post){
      return this.httpClient.post(this.apiURL+ "/register", post);  
  }

  login(post){
    return this.httpClient.post(this.apiURL+ "/login", post);
  }

  getDashboard(){
    return this.httpClient.get(this.apiURL+ "/user", {headers: this.header});
  }
  
}