import Character from '../Character';
import Bowman from '../Characters/Bowman';
import Daemon from '../Characters/Daemon';
import Magician from '../Characters/Magician';
import Swordsman from '../Characters/Swordsman';
import Undead from '../Characters/Undead';
import Vampire from '../Characters/Vampire';

test('Character-ERR', () => {
  const t = () => {
    new Character(1);
  };
  expect(t).toThrow(new Error('Ошибка!!! Нельзя создавать объекты через new Character(level)'));
});

test.each([
  [new Bowman(1)],
  [new Daemon(1)],
  [new Magician(1)],
  [new Swordsman(1)],
  [new Undead(1)],
  [new Vampire(1)],
])(('NO-error'), (t) => {
  expect(() => t).not.toThrow();
});
