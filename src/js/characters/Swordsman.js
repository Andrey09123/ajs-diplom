import Character from '../Character';

export default class Swordsman extends Character {
  constructor(level, type) {
    super(level, type);
    this.attack = 40;
    this.defence = 10;
    this.type = 'swordsman';
  }
}

// const swordsmanGen = new Swordsman(1);
// console.log(swordsmanGen) // 1
