class Sphinx {
  constructor() {
    this.name = null;
    this.riddles = [];
    this.heroesEaten = 0;
  }

  attemptAnswer(answer) {
    for (var i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === answer) {
        this.riddles.splice(i, 1);
        if (this.riddles.length === 0) {
          return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${answer}"???`
        }
        return 'That wasn\'t that hard, I bet you don\'t get the next one'
      }
    }
    this.heroesEaten += 1;
  }

  collectRiddle(riddle) {
    if (this.riddles.length < 3) {
      this.riddles.push(riddle);
    } else {
      this.riddles.shift();
      this.riddles.push(riddle);
    }
  }
}

module.exports = Sphinx;