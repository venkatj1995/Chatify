// auth.service.ts

import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isLoggedIn(): boolean {
    var checklogin= localStorage.getItem('token');
    if(checklogin){
     return true


    }
    else{
      return false;
    }
  }



  ClearToken(){
    localStorage.clear();
    this.router.navigate(['/login']);

  }

  GetToken(){
    return localStorage.getItem('token');
  }
}