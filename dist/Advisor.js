import { Character } from './Character';
export class Advisor extends Character {
    //boss: King | Fighter | Squire;
    constructor(name, family, age) {
        super(name, family, age);
        //this.boss = King | Fighter | Squire;
        this.message = 'Vais a morir todos';
    }
}
