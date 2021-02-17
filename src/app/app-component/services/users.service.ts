import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    //'X-Calix-Username': 'admin@calix.com'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UsersDetailService {
  public baseURL = environment.serverUrl;
  user: string;
 

  constructor(private http: HttpClient) {
    this.user = this.baseURL+"users/";
   
  }

 
 

  
  public UserList() {
    return this.http.get( this.user+'GetUserList/');
  }
 


}
