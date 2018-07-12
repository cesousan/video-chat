import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { throwError } from 'rxjs';  // Updated for Angular 6/RxJS 6



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor( private route : Router, private authservice : AuthService) { }

  ngOnInit() {
  }

google(){
	this.authservice.signInGoogle();
}

 facebook() {
    this.authservice.signInFacebook().subscribe(
       data => {
         // refresh the list
         console.log(data)
         return true;
       },
       error => {
         console.error("Error !");
         return throwError(error);  // Angular 6/RxJS 6
       }
    );
  }
}

