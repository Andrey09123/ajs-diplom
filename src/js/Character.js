export default class Character {
  constructor(level, type = 'generic') {
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    this.health = 50;
    this.type = type;
    if (new.target.name === 'Character') {
      throw new Error('You cant create a Character class');
    }
  }

  static levelUp(char) {
    const character = char;
    character.level += 1;

    AddFunctions.levelUpAttackDefence(character);

    character.health += 80;
    if (character.health > 100) {
      character.health = 100;
    }

    Math.round(character.health);

    return character;
  }
}
