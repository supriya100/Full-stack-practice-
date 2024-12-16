import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
useForm : FormGroup;
  constructor(private fb : FormBuilder){
    this.useForm = this.fb.group({
      name: ['' , Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]

    })
  }

  onSubmit(){
    if(this.useForm.valid){
console.log('this form is submitted');
    }
    else(console.log('this is not valid form '))
  }
}



