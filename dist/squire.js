import { Character } from './Character.js';
export class Squire extends Character {
    //boss: Fighter;
    //assKissingLevel: number;
    constructor(name, family, age) {
        super(name, family, age);
        //this.boss = Fighter;
        this.message = 'Soy un loser';
        //this.assKissingLevel = assKissingLevel;
    }
}
