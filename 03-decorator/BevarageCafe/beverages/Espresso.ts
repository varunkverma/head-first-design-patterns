import { Beverage } from "./Bevarage";

export class Expresso extends Beverage {
  constructor() {
    super();
    this.description = "Expresso";
  }

  cost(): number {
    return 1.99;
  }
}
