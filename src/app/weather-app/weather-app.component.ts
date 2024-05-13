import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-app',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './weather-app.component.html',
  styleUrl: './weather-app.component.css',
})
export class WeatherAppComponent {
  city: string = '';
  lat: number = 0;
  lon: number = 0;
  name!: string;
  min!: number;
  max!: number;
  temp!: number;
  feels_like!: number;
  humidity!: number;
  icon!: string;
  description!: string;

  async getLatLon() {
    if (this.city.trim() !== '') {
      const latlondata = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${this.city}&appid=ccde0925f653acf2dead8f26655b8dca`
      )
        .then((res) => res.json())
        .catch((e) => console.log(`Error: ${e}`));
      this.lat = latlondata[0].lat;
      this.lon = latlondata[0].lon;
      this.name = latlondata[0].name;
      await this.getData();
    } else {
      alert('Please enter a city name');
    }
  }

  async getData() {
    const weatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=ccde0925f653acf2dead8f26655b8dca&units=metric`
    )
      .then((res) => res.json())
      .catch((e) => console.log(`Error: ${e}`));
    this.temp = Math.floor(weatherData.main.temp);
    this.min = Math.floor(weatherData.main.temp_min);
    this.max = Math.floor(weatherData.main.temp_max);
    this.feels_like = Math.floor(weatherData.main.feels_like);
    this.humidity = Math.floor(weatherData.main.humidity);

    this.icon = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    this.description = weatherData.weather[0].description;

    this.city = '';
  }
}
