import { Beverage } from "./beverages/Bevarage";
import { DarkRoast } from "./beverages/DarkRoast";
import { Expresso } from "./beverages/Espresso";
import { HouseBlend } from "./beverages/HouseBlend";
import { Mocha } from "./condiments/Mocha";
import { Soy } from "./condiments/Soy";
import { Whip } from "./condiments/Whip";

class Main {
  static test() {
    const b1: Beverage = new Expresso();
    // add-ons
    //none

    console.log(`${b1.getDescription()} $${b1.cost()}\n`);

    let b2: Beverage = new DarkRoast();
    // add-ons -> Double Mocha and Whip
    b2 = new Mocha(b2);
    b2 = new Mocha(b2);
    b2 = new Whip(b2);

    console.log(`${b2.getDescription()} $${b2.cost()}\n`);

    let b3: Beverage = new HouseBlend();
    // add-ons -> Soy, Mocha and Whip
    b3 = new Soy(b3);
    b3 = new Mocha(b3);
    b3 = new Whip(b3);
    console.log(`${b3.getDescription()} $${b3.cost()}\n`);
  }
}

Main.test();
