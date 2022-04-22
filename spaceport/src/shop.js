var Part = require('./part');

class Shop {
  constructor(shopDetails) {
    this.inventory = {};
    this.name = shopDetails.name;
  }

  addInventory(part) {
    if (part instanceof Part) {
      this.inventory[part.type] = part;
    }      
  }

  outfitShip(ship, part) {
    if (!ship.captain) {
      return 'cannot outfit a ship without a captain';
    } else if (ship.captain.credits < this.inventory[part].value ) {
      return `you require ${this.inventory[part].value - ship.captain.credits} more credits to make this purchase`;
    } else {
      ship.parts[part] = this.inventory[part];
      ship.captain.credits = ship.captain.credits - this.inventory[part].value;
      this.inventory[part] = undefined;
      return `${part} added to ship`;
    }

  }
}

module.exports = Shop;