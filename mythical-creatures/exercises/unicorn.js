class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || 'white';

  }

  isWhite(){
    if (this.color === 'white'){
      return true;
    }
    return false;
  }

  says(saying){
    return `**;* ${saying} *;**`;
  }
}

module.exports = Unicorn;
