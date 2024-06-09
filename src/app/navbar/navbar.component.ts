import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  
  routePaths=[
    {
      path:'/weather-app',
      label:'Weather App'
    },
    {
      path:'/color-picker',
      label:'Color Picker',
    }
  ]

  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
