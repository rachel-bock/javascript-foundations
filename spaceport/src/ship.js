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
    this.type = shipDetails.type;
  }

  addCrew(crewMembers) {
    for (var i = 0; i < crewMembers.length; i++) {
      if (crewMembers[i] instanceof Being && this.crew.length < this.maxCrew) {
        this.crew.push(crewMembers[i]);
      }
    }
  }

  loadCargo(payload) {
    if (payload instanceof Part) {
      this.cargo.push(payload);
    }
  }

  updatePart(thePart) {
    
  }
}

module.exports = Ship;