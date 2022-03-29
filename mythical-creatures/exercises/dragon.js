// dragon.js

class Dragon {

    constructor(name, rider){
        this.name = name;
        this.rider = rider;
        this.hungry = true;
        this.ate = 0;
    }

    greet(){
        return `Hi, ${this.rider}!`;
    }

    eat(){
        if (this.ate < 2){
            this.ate = this.ate + 1;
        } else{
            this.ate = 0;
            this.hungry = false;
        }
    }
}

module.exports = Dragon;