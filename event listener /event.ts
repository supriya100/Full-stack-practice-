import 'zone.js';
import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: ''
   
})
export class App {
  name = 'Angular';
  message: string = '';

  displayMessage(){
    this.message = 'this is a click example';
  }
}


bootstrapApplication(App);