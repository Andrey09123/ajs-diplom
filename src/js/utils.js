export function calcTileType(index, boardSize) {
  // TODO: write logic here

  const topLeft = 0;
  const topRigth = (boardSize - 1);
  const bottomLeft = (boardSize ** 2) - boardSize;
  const bottomRight = (boardSize ** 2) - 1;

  if (index === topLeft) {
    return 'top-left';
  }

  if (index === topRigth) {
    return 'top-right';
  }

  if (index > topLeft && index < topRigth) {
    return 'top';
  }

  if (index === bottomLeft) {
    return 'bottom-left';
  }

  if (index === bottomRight) {
    return 'bottom-right';
  }

  if (index > bottomLeft && index < bottomRight) {
    return 'bottom';
  }

  if (index % boardSize === topLeft) {
    return 'left';
  }

  if (index % boardSize === topRigth) {
    return 'right';
  }

  return 'center';

}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}

static getRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

  static levelUpAttackDefence(char) {
  const character = char;
  character.attack = Math.round(Math.max(
    character.attack,
    (character.attack * (80 + character.health)) / 100,
  ));
  character.defence = Math.round(Math.max(
    character.defence,
    (character.defence * (80 + character.health)) / 100,
  ));
  return character;
}
