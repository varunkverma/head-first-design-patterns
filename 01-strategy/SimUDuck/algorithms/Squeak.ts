import { QuackBehavior } from "../interfaces/QuackBehavior.interface";

export class Squeak implements QuackBehavior {
  quack() {
    console.log("Squeak!");
  }
}
