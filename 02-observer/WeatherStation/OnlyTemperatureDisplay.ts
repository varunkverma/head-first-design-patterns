import { DisplayElement } from "./interfaces/DisplayElement";
import { Observer } from "./interfaces/Observer";
import { WeatherData } from "./WeatherData";

export class OnlyTemperatureDisplay implements Observer, DisplayElement {
  private weatherData: WeatherData;
  private temperature: number;

  constructor(weatherData: WeatherData) {
    this.temperature = 0;
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update() {
    this.temperature = this.weatherData.getTemperature();
    this.display();
  }

  display() {
    console.log(`Temp conditions: ${this.temperature}F degrees.`);
  }
}
