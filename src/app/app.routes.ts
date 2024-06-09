import { Routes } from '@angular/router';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/navbar' },
  { path: 'navbar', component: NavbarComponent },
  { path: 'weather-app', component: WeatherAppComponent },
  { path: 'color-picker', component: ColorPickerComponent },
  { path: '**', component: PageNotFoundComponent },
];
