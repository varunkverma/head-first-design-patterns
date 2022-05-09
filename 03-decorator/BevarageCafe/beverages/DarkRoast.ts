import { Beverage } from "./Bevarage";

export class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = "Dark Roast Coffee";
  }

  cost(): number {
    return 1.99;
  }
}
