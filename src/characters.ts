import { Advisor } from './Advisor';
import { Fighter } from './fighter';
import { King } from './King';

export const characters = [
    new King('Joffrey', 'Baratheon', 17, 3),
    new King('Pepe', 'Pelaez', 24, 4),
    new Fighter('Jaime', 'Lannister', 35, 'Sword', 9),
    new Fighter('Daenerys', 'Targaryan', 22, 'Dragon', 10),
    new Advisor('Tyrion', 'Lannister', 30),
    new Advisor('Bronn', 'Lopez', 17),
];

//characters[0].friend = characters[1];

console.log(characters);
