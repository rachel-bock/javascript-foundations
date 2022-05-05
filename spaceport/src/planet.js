class Planet {
  constructor(planetDetails) {
    this.coordinates = planetDetails.coordinates;
    this.currentShip = {};
    this.name = planetDetails.name;
    this.shop = planetDetails.shop;
  }

  calculateDistance(otherPlanet) {
    // the formula to calculate distance in three dimensional 
    // Cartesian space is the square root of ((x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2).
    var distance = otherPlanet.coordinates.x * otherPlanet.coordinates.x - this.coordinates.x * otherPlanet.coordinates.x + this.coordinates.x * this.coordinates.x + otherPlanet.coordinates.y * otherPlanet.coordinates.y - this.coordinates.y * otherPlanet.coordinates.y + this.coordinates.y * this.coordinates.y + otherPlanet.coordinates.z * otherPlanet.coordinates.z - otherPlanet.coordinates.z * this.coordinates.z + this.coordinates.z * this.coordinates.z;
    distance = Math.sqrt(distance);  
    return distance;
  }

  giveClearance(otherPlanet) {
    if (this.currentShip.fuel === 0) {
      return 'Clearance denied: Cannot fly without fuel';
    } else {
      this.currentShip.fuel = this.currentShip.fuel - 2;
      otherPlanet.currentShip = this.currentShip;
      this.currentShip = undefined;
      return `Clearance granted: Enjoy your trip to ${otherPlanet.name}`;
    }
  }

  landShip(shipDetails) {
    this.currentShip = shipDetails;
  }

  refuel(ship) {
    ship.fuel += 10;
  }

}

module.exports = Planet;