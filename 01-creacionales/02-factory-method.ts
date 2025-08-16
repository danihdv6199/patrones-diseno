/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

import { COLORS } from "../helpers/colors.ts";

interface Hamburger {
  prepare(): void;
}

class ChickenHamburguer implements Hamburger {
  prepare(): void {
    console.log("Preparando hamburguesa de %pollo", COLORS.yellow);
  }
}

class BeefHamburguer implements Hamburger {
  prepare(): void {
    console.log("Preparando hamburguesa de %cres", COLORS.yellow);
  }
}

abstract class Restaurant {
  abstract createHamburguer(): Hamburger;

  orderHamburger(): void {
    const hamburger = this.createHamburguer();
    hamburger.prepare();
  }
}

class ChickenRestaurant extends Restaurant {
  override createHamburguer(): Hamburger {
    return new ChickenHamburguer();
  }
}

class BeefRestaurant extends Restaurant {
  override createHamburguer(): Hamburger {
    return new BeefHamburguer();
  }
}

function main() {
  let restaurant: Restaurant;
  const burgerType = prompt("Que tipo de hamburgesa quieres? (chicken/beef)");
  switch (burgerType) {
    case "chicken":
      restaurant = new ChickenRestaurant();
      break;
    case "beef":
      restaurant = new BeefRestaurant();
      break;
    default:
      throw new Error("Opcion no valida");
  }

  restaurant.orderHamburger();
}

main();
