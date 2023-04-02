/**
 * Класс, представляющий персонажей команды
 *
 * @todo Самостоятельно продумайте хранение персонажей в классе
 * Например
 * @example
 * ```js
 * const characters = [new Swordsman(2), new Bowman(1)]
 * const team = new Team(characters);
 *
 * team.characters // [swordsman, bowman]
 * ```
 * */

import Bowman from './characters/Bowman';
import Swordsman from './characters/Swordsman';

export default class Team {
  // TODO: write your logic here
  constructor(char) {
    this.char = char;
  }

  get characters() {
    // return this.char.map(item => item.type);
    return this.char.filter((item) => item);
  }
}

// const characters = [new Swordsman(2), new Bowman(3)]; // Обратите внимание на new в отличие от playerTypes в прошлом примере
// const team = new Team(characters);
// console.log(team.characters) // [swordsman, bowman]
// console.log(team.char[0].level) // 2
