import { Character } from './Character.js';
import { Fighter } from './Fighter.js';
export class Squire extends Character {
    //boss: Fighter;
    //assKissingLevel: number;
    constructor(name: string, family: string, age: number) {
        super(name, family, age);
        //this.boss = Fighter;
        this.message = 'Soy un loser';
        //this.assKissingLevel = assKissingLevel;
    }
}
