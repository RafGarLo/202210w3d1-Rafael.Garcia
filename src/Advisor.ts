import { Character } from './Character';
import { Fighter } from './fighter';
import { King } from './king';
import { Squire } from './squire';

export class Advisor extends Character {
    //boss: King | Fighter | Squire;
    constructor(name: string, family: string, age: number) {
        super(name, family, age);
        //this.boss = King | Fighter | Squire;
        this.message = 'Vais a morir todos';
    }
}
