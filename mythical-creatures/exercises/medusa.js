var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(name){
        this.name = name;
        this.statues = [];
    }

    gazeAtVictim(victimObj) {
        if(this.statues.length < 3){
            var newStatue = new Statue(victimObj.name);
            this.statues.push(newStatue);    
        } else {
            var newPerson = new Person(this.statues.shift().name);
            newPerson.mood = 'relieved';
            var newVictim = new Statue(victimObj.name);
            this.statues.push(newVictim);
            return newPerson;
        }
    }
}

module.exports = Medusa;