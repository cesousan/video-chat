import { Component, OnInit } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private route: Router, private authService : AuthService, private http: HttpClient){}

ngOnInit() {
  
}



}
