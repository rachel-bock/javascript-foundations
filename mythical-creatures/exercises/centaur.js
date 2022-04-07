class Centaur {
    constructor(centaurInfo) {
        this.name = centaurInfo.name;
        this.breed = centaurInfo.type;
        this.cranky = false;
        this.standing = true;
        this.layingDown = false;
        this.activity = 0;
    }

    drinkPotion() {
        if (this.standing === true) {
            this.cranky = false;
        } else {
            return `Not while I'm laying down!`
        }        
    }

    layDown() {
        this.standing = false;
        this.layingDown = true;
    }

    run() {
        if (this.layingDown === false && this.cranky === false && this.activity < 3) {          
            this.activity += 1;
            if (this.activity === 3){
                this.cranky = true;
            }
            return 'Clop clop clop clop!!!'
        }
        return `NO!`
    }

    shootBow() {
        if (this.standing && this.activity < 3) {
            this.activity += 1;
            if (this.activity === 3){
                this.cranky = true;
            }
            return 'Twang!!!';
        }
        return 'NO!'
    }


    sleep() {
        if (this.standing === true) {
            return `NO!`;
        }
        this.cranky = false;
        this.activity = 0;
        return `ZZZZ`;
    }

    standUp() {
        this.standing = true;
        this.layingDown = false;
    }
}

module.exports = Centaur;