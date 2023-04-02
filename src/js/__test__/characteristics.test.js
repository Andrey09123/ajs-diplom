import Character from '../Character';
import Bowman from '../Characters/Bowman';
import Daemon from '../Characters/Daemon';
import Magician from '../Characters/Magician';
import Swordsman from '../Characters/Swordsman';
import Undead from '../Characters/Undead';
import Vampire from '../Characters/Vampire';

test('Characteristics-Bowman', () => {
  const t = () => new Bowman(1);
  expect(t()).toEqual({
    attack: 25, defence: 25, health: 50, level: 1, type: 'bowman',
  });
});

test('Characteristics-Daemon', () => {
  const t = () => new Daemon(1);
  expect(t()).toEqual({
    attack: 10, defence: 10, health: 50, level: 1, type: 'daemon',
  });
});

test('Characteristics-Magician', () => {
  const t = () => new Magician(1);
  expect(t()).toEqual({
    attack: 10, defence: 40, health: 50, level: 1, type: 'magician',
  });
});

test('Characteristics-Swordsman', () => {
  const t = () => new Swordsman(1);
  expect(t()).toEqual({
    attack: 40, defence: 10, health: 50, level: 1, type: 'swordsman',
  });
});

test('Characteristics-Undead', () => {
  const t = () => new Undead(1);
  expect(t()).toEqual({
    attack: 40, defence: 10, health: 50, level: 1, type: 'undead',
  });
});

test('Characteristics-Vampire', () => {
  const t = () => new Vampire(1);
  expect(t()).toEqual({
    attack: 25, defence: 25, health: 50, level: 1, type: 'vampire',
  });
});
