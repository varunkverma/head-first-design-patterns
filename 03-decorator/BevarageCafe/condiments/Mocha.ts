import { Beverage } from "../beverages/Bevarage";
import { CondimentDecorator } from "../decorators/CondimentDecorator";

export class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Mocha";
  }

  cost(): number {
    return this.beverage.cost() + 0.2;
  }
}
