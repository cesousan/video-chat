import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http : HttpClient) { }

    private getUserUrl = 'http://localhost:5000/api/users/info';

    private getUserSecureUrl = 'https://localhost:8443/api/users/info';

    getUser(): Observable<any[]> {
	  	return this.http.get<any[]>(this.getUserUrl);
    }


    getToken(){
      if(localStorage.getItem('token')){
        return true;
      }
    }

    getTokenStorage(){
      return localStorage.getItem('token');

    }

    getName(){
       return localStorage.getItem('name');
    }
}
