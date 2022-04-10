class Direwolf {
    constructor(name, location, size) {
        this.name = name;
        this.home = location || 'Beyond the Wall';
        this.size = size || 'Massive';
        this.starksToProtect = [];
        this.huntsWhiteWalkers = true;
    }

    leave(stark) {
        for (var i=0; i < this.starksToProtect.length; i++) {
            if (stark.name === this.starksToProtect[i].name) {
                this.starksToProtect.splice(i,1);
                stark.safe = false;
            }
        }
    }

    protect(stark) {
        if (this.home === stark.location && this.starksToProtect.length < 2) {
            this.starksToProtect.push(stark);
            this.huntsWhiteWalkers = false;
            stark.safe = true;
        } 
    }
}

module.exports = Direwolf;