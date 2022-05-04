import { QuackBehavior } from "../interfaces/QuackBehavior.interface";

export class Quack implements QuackBehavior {
  quack() {
    console.log("Quack!");
  }
}
