import { MallardDuck } from "./MallardDuck";
import { Duck } from "./Duck";
import { FlyWithWings } from "./algorithms/FlyWithWings";
import { Quack } from "./algorithms/Quack";

class Main {
  static Test() {
    const duck1: Duck = new MallardDuck();
    duck1.display();
    duck1.performFly();
    duck1.performQuack();

    duck1.setFlyBehavior(new FlyWithWings());
    duck1.setQuackBehavior(new Quack());

    duck1.performFly();
    duck1.performQuack();
  }
}

Main.Test();
