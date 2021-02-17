import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    //'X-Calix-Username': 'admin@calix.com'
  })
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public baseURL = environment.serverUrl;
  login: string;
 

  constructor(private http: HttpClient) {
    this.login = this.baseURL+"login/";
   
  }

 
 

  
  public Authentication(payload:any) {
    return this.http.post(this.login,payload);
  }
 


}
