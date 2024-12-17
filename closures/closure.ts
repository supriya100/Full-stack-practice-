import { Component } from '@angular/core';

@Component({
  selector: 'app-closure-example',
  template: `
    <button (click)="increment()">Increment</button>
    <p>Counter: {{ counter }}</p>
  `
})
export class ClosureExampleComponent {
  counter = 0;

  increment() {
    const add = (step: number) => {
      this.counter += step; // Closure retains access to `this.counter`
    };

    add(1); // Call the inner function
  }
}
