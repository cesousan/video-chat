import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { AuthService } from'./auth.service';
import { Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{
  constructor(private injector: Injector, private authService: AuthService, private router : Router ){}


  intercept(req,next){
    const if_token = this.authService.getTokenStorage();
    if(if_token){
      let token = req.clone({
        setHeaders: {
          Authorization : `Bearer ` + if_token
        }
      })
      return next.handle(token);
    }else{
      this.router.navigate(['auth/signup']);
    }
  }
}
