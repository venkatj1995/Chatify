import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
	LoginService
} from './login.service';
import {
	HttpClient,
	HttpErrorResponse
} from '@angular/common/http';

import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public  Username:any;
  public  Password:any;

  constructor(   
    private router: Router,
    private route: ActivatedRoute,
    private service: LoginService,
    private authService:AuthService
    ) { 

  }

  ngOnInit(): void {

    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboardhome']);
   }
  }


  Login(){
    let payload={"username":this.Username,"password":this.Password};
    console.log(payload)

    this.service.Authentication(payload).subscribe((res: any) => {

      if(res.status == "success")
     {
      localStorage.setItem("token",res.Token);
      this.router.navigate(['/dashboardhome']);
     }
     



		}, (err: HttpErrorResponse) => {

		})

    
  }

}
