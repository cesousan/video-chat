import { Component, OnInit } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRoute, Params, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private route: Router, private authService: AuthService) { }
  isAuth : boolean;
  username: string;

  ngOnInit() {
    this.route.events.subscribe(Event => {
      this.username = this.authService.getName();
      if(this.username){
        this.isAuth = true;
      }else{
        this.isAuth = false;
      }
    });
  }
    
 quit(): void{
   localStorage.clear();
   this.route.navigate(['auth/signin']);
 }

}
