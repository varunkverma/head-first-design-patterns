import { DisplayElement } from "./interfaces/DisplayElement";
import { Observer } from "./interfaces/Observer";
import { WeatherData } from "./WeatherData";

export class CurrentConditionDisplay implements Observer, DisplayElement {
  private weatherData: WeatherData;
  private temperature: number;
  private humidity: number;

  constructor(weatherData: WeatherData) {
    this.temperature = 0;
    this.humidity = 0;
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update() {
    this.humidity = this.weatherData.getHumidity();
    this.temperature = this.weatherData.getTemperature();
    this.display();
  }

  display() {
    console.log(
      `Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`
    );
  }
}
