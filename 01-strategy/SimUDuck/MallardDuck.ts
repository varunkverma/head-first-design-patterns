import { FlyNoWay } from "./algorithms/FlyNoWay";
import { MuteQuack } from "./algorithms/MuteQuack";
import { Duck } from "./Duck";

export class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new MuteQuack();
  }

  display(): void {
    console.log("looks like a Mallard Duck.");
  }
}
