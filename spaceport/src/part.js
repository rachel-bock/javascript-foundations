class Part {
  constructor(partDetails) {
    this.broken = false;
    this.isValid = false;
    this.name = partDetails.name;
    this.type = partDetails.type;
    this.value = partDetails.value;
    this.checkForValidity = this.checkValidity();
  }

  checkValidity() {
    if (!this.name) {
      return 'This part needs a name!';
    } else if (!this.type) {
      return 'This part needs a type!';
    } else if (!this.value) {
      return 'This part needs a value!';
    } else {
      this.isValid = true;
    }
  }
}

module.exports = Part;