import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-self-info',
  templateUrl: './self-info.component.html',
  styleUrls: ['./self-info.component.css']
})
export class SelfInfoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    return this.http.get<any>('http://localhost:5000/info');
  
  }

}
