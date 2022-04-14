class Being {
  constructor(name, species) {
    this.name = name;
    this.credits = 0;
    this.isAlive = true;
    this.species = species;
  }

  updateCredits(amount) {
    this.credits += amount;
  }
}

module.exports = Being;
