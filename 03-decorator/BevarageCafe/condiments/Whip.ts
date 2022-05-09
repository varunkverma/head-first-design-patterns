import { Beverage } from "../beverages/Bevarage";
import { CondimentDecorator } from "../decorators/CondimentDecorator";

export class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Whip Cream";
  }

  cost(): number {
    return this.beverage.cost() + 0.1;
  }
}
