import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	signupForm : FormGroup;
	errorMessage : string;

    constructor( private formBuilder : FormBuilder, private route : Router) { }

	ngOnInit() {

		this.initForm();

	}

	initForm() {
	    this.signupForm = this.formBuilder.group({
	      email: ['', [Validators.required, Validators.email]],
	      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
	    });
	}


}
		