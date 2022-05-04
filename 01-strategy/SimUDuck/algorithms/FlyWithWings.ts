import { FlyBehavior } from "../interfaces/FlyBehavior.interface";
export class FlyWithWings implements FlyBehavior {
  fly() {
    console.log("Flying with wings!");
  }
}
