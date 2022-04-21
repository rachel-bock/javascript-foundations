var Being = require('./being');
var Part = require('./part');

class Ship {
  constructor(shipDetails) {
    this.captain = shipDetails.captain;
    this.cargo = [];
    this.crew = [];
    this.fuel = shipDetails.fuel || 0;
    this.fuelCapacity = shipDetails.fuelCapacity || 10;
    this.maxCrew = shipDetails.maxCrew;
    this.name = shipDetails.name;
    this.odometer = shipDetails.odometer || 0;
    this.parts =  shipDetails.parts || {};
    this.readyToFly = false;
    this.type = shipDetails.type;
  }

  addCrew(crewMembers) {
    for (var i = 0; i < crewMembers.length; i++) {
      if (crewMembers[i] instanceof Being && this.crew.length < this.maxCrew) {
        this.crew.push(crewMembers[i]);
      }
    }
  }

  checkReadiness() {
    if (!this.captain) {
      return `Cannot fly without a captain`;
    } 
    if (!this.fuel) {
      return `Cannot fly without fuel`;
    }
    if (Object.keys(this.parts).length < 1) {
      return `Cannot fly without parts`;
    }
    this.readyToFly = true;
    return `Good to go!`
  }

  loadCargo(payload) {
    if (payload instanceof Part) {
      this.cargo.push(payload);
    }
  }

  updatePart(thePart) {
    if (!this.parts[thePart.type]) {
      this.parts[thePart.type] = thePart;
    }
    var part1 = this.parts[thePart.type].value;
    var part2 = thePart.value;
    this.parts[thePart.type] = thePart;
    return part1 - part2;
  }
}

module.exports = Ship;