import { FlyBehavior } from "./interfaces/FlyBehavior.interface";
import { QuackBehavior } from "./interfaces/QuackBehavior.interface";

export abstract class Duck {
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;

  abstract display(): void;

  swim() {
    console.log("Swimming...");
  }

  performQuack() {
    this.quackBehavior.quack();
  }

  performFly() {
    this.flyBehavior.fly();
  }

  setFlyBehavior(newFlyBehavior: FlyBehavior) {
    this.flyBehavior = newFlyBehavior;
  }

  setQuackBehavior(newQuackBehavior: QuackBehavior) {
    this.quackBehavior = newQuackBehavior;
  }
}
