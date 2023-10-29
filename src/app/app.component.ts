import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /**
   *
   */

  weatherData?: WeatherData;
  cityName: string = 'Heerlen';

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit(): void{
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string){
    this.weatherService.getWeather(cityName)
    .subscribe({
      next: (res) =>{
        this.weatherData = res;
        console.log(res);
      }
    });
  }
}
