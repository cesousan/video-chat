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
    // use localStorage.removeItem('token') --> moins radical :)
    // localStorage.clear();
    // TODO: store the user WITH his token inside a single object,
    // and label it with the name of your app (e.g. 'video-chat-user').
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    // TODO : change this block
    // *******************

    const snapshot: RouterStateSnapshot = this.route.routerState.snapshot;
    let url = snapshot.url;
    if(url.includes('#')) {
      url = url.split('#')[0];
    }
    var token_url = url.split('?access_token=')[1];
    if(!token_url) {
      return;
    }
    localStorage.setItem("token", token_url);
    this.token = this.authService.getToken();
    if(this.token){
      const user = this.authService.getUser();
      user.subscribe(
        (response) => {
          localStorage.setItem('name', response['user'].name);
          this.route.navigate(['chat/view-chat']);
        },
        (error) => {
          console.log('Erreur ! : ' + JSON.stringify(error));
          this.route.navigate(['auth/signin']);
        });
    }
     }


  private SignInFacebook = 'http://localhost:5000/auth/facebook';  // URL to web api
  private SignInGoogle = 'http://localhost:5000/auth/google';  // URL to web api

  private SigninFacebookHTTPS = 'https://localhost:8443/auth/facebook';
  private SigninGoogleHTTPS = 'https://localhost:8443/auth/google';

  facebook(): void {
    document.location.href = this.SigninFacebookHTTPS;
  }

  google(): void {
    document.location.href = this.SigninGoogleHTTPS;
  }




}
