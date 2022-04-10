class Fairy {
    constructor(fairyName) {
        this.disposition = 'Good natured';
        this.dust = 10;
        this.clothes = {
            dresses: ['Iris'], 
        };
        this.humanWards = [];
        this.name = fairyName;
    }

    becomeProvoked() {
        this.disposition = 'Vengeful';
    }

    believe() {
        this.dust += 10;
    }

    makeDresses(flowersArr) {
        for (var i = 0; i < flowersArr.length; i++) {
            this.clothes.dresses.push(flowersArr[i]);
        }
    }

    receiveBelief() {
        this.dust += 1;
    }

    replaceInfant(infantDetails) {
        if (this.disposition === 'Vengeful') {
            infantDetails.disposition = 'Malicious';
            this.humanWards.push(infantDetails);
            if (this.humanWards.length > 2) {
                this.disposition = 'Good natured';
            }
        }
        
    }
}

module.exports = Fairy;