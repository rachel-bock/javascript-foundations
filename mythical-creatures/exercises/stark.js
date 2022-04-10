const Direwolf = require("./direwolf");

class Stark {
    constructor(starkInfo) {
        this.name = starkInfo.name;
        this.location = starkInfo.area || 'Winterfell';
        this.safe = false;
    }

    callDirewolf(name, location) {
        var direwolf = new Direwolf(name, location);
        direwolf.home = this.location;
        direwolf.protect({name: this.name, location: this.location});
        this.safe = true;        
        return direwolf;
    }

    sayHouseWords() {
        if (this.safe) {
            return 'The North Remembers';
        }
        return 'Winter is Coming';
    }
}

module.exports = Stark;