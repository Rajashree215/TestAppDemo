import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './input-component.component.html',
  styleUrl: './input-component.component.css',
})
export class InputComponentComponent {
  firstName: string = '';
  lastName: string = '';
  fullName: string = '';
  names: string[] = [];

  printName() {
    // this.fullName = `Hello ${this.firstName} ${this.lastName}!`;
    if (this.firstName.trim() !== '' && this.lastName !== '') {
      this.fullName = `${this.firstName} ${this.lastName}!`;
      this.names.push(this.fullName);
      this.firstName = '';
      this.lastName = '';
    } else {
      alert('Please enter all the fields!!');
    }
  }
}
