import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { app } from '../../../../backend/server/routes/auth-routes';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http : HttpClient) { }

	private SignIn = 'http://localhost:5000/auth/facebook';  // URL to web api


    signInFacebook (): Observable<any[]> {
	  	return this.http.get<any[]>(this.SignIn)
	    	
	}

	

  signInGoogle(){
  	console.log("Connecté par Google");
  }
}
