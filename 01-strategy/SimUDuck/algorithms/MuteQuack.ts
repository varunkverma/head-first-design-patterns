import { QuackBehavior } from "../interfaces/QuackBehavior.interface";

export class MuteQuack implements QuackBehavior {
  quack() {
    console.log("silence...");
  }
}
