import Character from '../Character';
import Bowman from '../Characters/Bowman';
import Magician from '../Characters/Magician';
import Swordsman from '../Characters/Swordsman';

import { characterGenerator } from '../generators';

// describe('generator test', () => {
//   it('should call generator function', function() {
//       const user = { email:"test@test.com", password:"1234" };
//       const generator = login(user, {});

//       expect(generator.next().value).toBe(SOME_VALUE_HERE);
//   });
// });

test('characterGenerator-test', () => {
  const t = () => {
    const playerTypes = [Bowman, Swordsman, Magician];
    const playerGenerator = characterGenerator(playerTypes, 2);
    const a = playerGenerator.next().value.type;
    return a;
  };
  expect(t()).toBe('bowman');
});
