import { AllInOneConditionDisplay } from "./AllInOneConditionDisplay";
import { CurrentConditionDisplay } from "./CurrentConditionDisplay";
import { OnlyTemperatureDisplay } from "./OnlyTemperatureDisplay";
import { WeatherData } from "./WeatherData";

class Main {
  static test() {
    const weatherData = new WeatherData();
    const ccd = new CurrentConditionDisplay(weatherData);
    const otd = new OnlyTemperatureDisplay(weatherData);
    const aiod = new AllInOneConditionDisplay(weatherData);

    weatherData.setMeasurements(80, 65, 100);
    console.log();
    weatherData.removeObserver(otd);

    weatherData.setMeasurements(99, 10, 11);
    console.log();
    weatherData.removeObserver(ccd);

    weatherData.setMeasurements(100, 21, 10);
    console.log();
  }
}

Main.test();
