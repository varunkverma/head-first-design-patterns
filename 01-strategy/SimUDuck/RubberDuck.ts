import { FlyNoWay } from "./algorithms/FlyNoWay";
import { MuteQuack } from "./algorithms/MuteQuack";
import { Duck } from "./Duck";

export class RubberDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new MuteQuack();
  }

  display(): void {
    console.log("looks like a Rubber Duck.");
  }
}
