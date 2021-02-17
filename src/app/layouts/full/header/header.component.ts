import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {


  constructor(   
    private router: Router,
    private route: ActivatedRoute,
    private logout: AuthService,
    ) { 
    }






  Logout(){
    this.logout.ClearToken();

  }




}
