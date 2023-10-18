import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private fb: FormBuilder) { }
  registerForm=this.fb.group({
    type:['',Validators.required],
    mobile:[''],
    title:[''],
  })
}
