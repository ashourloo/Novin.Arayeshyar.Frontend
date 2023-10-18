import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  mobileFormControl=new FormControl('',[Validators.required]);
  passwordFormControl=new FormControl('',[Validators.required]);
  matcher = new MyErrorStateMatcher();
  show(){
    console.log(this.mobileFormControl.value);
  }
  constructor(public http:HttpClient,public router:Router){}
  check(){
    this.http.post('https://localhost:7112/adminlogin'
      ,{username:this.mobileFormControl.value,password:this.passwordFormControl.value}).subscribe(result=>{
        console.log(result);
      })
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
