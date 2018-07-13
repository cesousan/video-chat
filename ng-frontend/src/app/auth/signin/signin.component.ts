import { Component, OnInit } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  constructor( private route : Router, private activatedRoute: ActivatedRoute, private authService: AuthService, private http: HttpClient) { 
    
  }
  public googleToken : boolean;
  public islogged : Boolean;
  username: boolean;
  token : boolean;
  ngOnInit() {
    localStorage.clear();
    const snapshot: RouterStateSnapshot = this.route.routerState.snapshot;
    let url = snapshot.url;
    var token_url = url.substring( url.indexOf('=') + 1 );
    localStorage.setItem("token",token_url);
    console.log(token_url);
    this.token = this.authService.getToken();
    if(this.token){
      const user = this.authService.getUser();
      user.subscribe(
        (response) => {
          localStorage.setItem('name', response['user'].name);
          this.route.navigate(['chat/view-chat']);
        },
        (error) => {
          console.log('Erreur ! : ' + error);
          this.route.navigate(['auth/signin']);
        });
    }
     }
  

  private SignInFacebook = 'http://localhost:5000/auth/facebook';  // URL to web api 
  private SignInGoogle = 'http://localhost:5000/auth/google';  // URL to web api 
  

  facebook(): void {
    document.location.href = this.SignInFacebook;  
  }

  google(): void {
    document.location.href = this.SignInGoogle;
  }



    
}

