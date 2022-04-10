class Ogre {
    constructor(ogreInfo) {
        this.name = ogreInfo.name;
        this.home = ogreInfo.abode || 'Swamp';
        this.swings = 0;
    }

    apologize(human) {
        human.knockedOut = false;
    }

    encounter(human) {
        human.encounterCounter += 1;
        if (human.noticesOgre()) {
            this.swingAt(human);
            if (this.swings % 2 === 0 && this.swings !== 0) {
                human.knockedOut = true;
            }
        }
    }

    swingAt(human) {
        this.swings += 1;
    }
}

module.exports = Ogre;