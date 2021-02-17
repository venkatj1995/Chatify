import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let header :any;

     if(this.auth.GetToken())
     {
       
      header = {

        "Authorization": `${this.auth.GetToken()}`,
      }
    }



    request = request.clone({
      setHeaders: header,
      url: request.url
    });
        
   
    return next.handle(request);
  }
}
