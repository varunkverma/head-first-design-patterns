import { Beverage } from "../beverages/Bevarage";
import { CondimentDecorator } from "../decorators/CondimentDecorator";

export class Soy extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Soy";
  }

  cost(): number {
    return this.beverage.cost() + 0.15;
  }
}
