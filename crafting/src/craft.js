class Craft {
  constructor(craftDetails) {
    this.name = craftDetails.type;
    this.materials = craftDetails.materials;
    this.completed = false;
  }

  calculateProjectTotal() {
    var total = 0;
    for (var i = 0; i < this.materials.length; i++) {
      total += this.materials[i].price * this.materials[i].amount;
    }
    return total;
  }

  completeCraft() {
    this.completed = true;
    return `All done! It looks great!`
  }
}

module.exports = Craft;
