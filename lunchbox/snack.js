class Snack {
  constructor(snackName) {
    this.amount = 100;
    this.cuttingItClose = false;
    this.deliciousLevel = 'extra';
    this.isInLunchBox = false;
    this.type = snackName;
 }

 checkForHealthy() {
  //  if (this.type.contains('ruit')) {

  //  }
 }

 getEaten() {
   this.amount = this.amount - 10;
   if (this.amount <= 20) {
     this.cuttingItClose = true;
   }
 }
}

module.exports = Snack;
