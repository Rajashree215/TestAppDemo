import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-component.component.html',
  styleUrl: './input-component.component.css',
})
export class InputComponentComponent {
  firstName: string = '';
  lastName: string = '';
  fullName: string = '';

  printName() {
    this.fullName = `Hello ${this.firstName} ${this.lastName}!`;
    console.log(this.fullName);
    alert(this.fullName);
    this.firstName="";
    this.lastName="";
  }
}
