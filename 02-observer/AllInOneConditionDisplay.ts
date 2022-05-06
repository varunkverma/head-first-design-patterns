import { DisplayElement } from "./interfaces/DisplayElement";
import { Observer } from "./interfaces/Observer";
import { WeatherData } from "./WeatherData";

export class AllInOneConditionDisplay implements Observer, DisplayElement {
  private weatherData: WeatherData;
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor(weatherData: WeatherData) {
    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update() {
    this.humidity = this.weatherData.getHumidity();
    this.pressure = this.weatherData.getPressure();
    this.temperature = this.weatherData.getTemperature();
    this.display();
  }

  display() {
    console.log(
      `ALL IN ONE:\ntemperature: ${this.temperature}F degrees\nhumidity: ${this.humidity}% \npressure: ${this.pressure}`
    );
  }
}
