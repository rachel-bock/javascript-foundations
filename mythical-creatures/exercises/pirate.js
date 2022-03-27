class Pirate{
    constructor(nameStr, jobStr){
        this.name = nameStr;
        this.job = jobStr || 'scallywag';
        this.cursed = false;
        this.booty = 0;
    }

    robShip(){
        if(this.booty < 500){
            this.booty += 100;
            return 'YAARRR!'
        }
        this.cursed = true;
        return `ARG! I've been cursed!`
    }

    liftCurse(){
        if(this.cursed === true){
            this.booty -= 300; 
            this.cursed = false;
            return `Your curse has been lifted!`
        }
        return `You don't need to lift a curse!`
    }
}

module.exports = Pirate;