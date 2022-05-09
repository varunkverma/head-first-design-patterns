import { Beverage } from "../beverages/Bevarage";
import { CondimentDecorator } from "../decorators/CondimentDecorator";

export class SteamedMilk extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Steamed Milk";
  }

  cost(): number {
    return this.beverage.cost() + 0.1;
  }
}
