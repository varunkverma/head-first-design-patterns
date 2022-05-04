import { FlyBehavior } from "../interfaces/FlyBehavior.interface";

export class FlyNoWay implements FlyBehavior {
  fly() {
    console.log("Cannot fly any way.");
  }
}
