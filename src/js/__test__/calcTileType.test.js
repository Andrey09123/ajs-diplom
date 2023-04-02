import { calcTileType } from '../utils';

test('Function-calcTileType(top-left)', () => {
  const funcTotal = calcTileType(0, 8);
  expect(funcTotal).toBe('top-left');
});

test('Function-calcTileType(top-right)', () => {
  const funcTotal = calcTileType(7, 8);
  expect(funcTotal).toBe('top-right');
});

test('Function-calcTileType(top)', () => {
  const funcTotal = calcTileType(3, 8);
  expect(funcTotal).toBe('top');
});

test('Function-calcTileType(bottom-left)', () => {
  const funcTotal = calcTileType(56, 8);
  expect(funcTotal).toBe('bottom-left');
});

test('Function-calcTileType(bottom-right)', () => {
  const funcTotal = calcTileType(63, 8);
  expect(funcTotal).toBe('bottom-right');
});

test('Function-calcTileType(bottom)', () => {
  const funcTotal = calcTileType(60, 8);
  expect(funcTotal).toBe('bottom');
});

test('Function-calcTileType(right)', () => {
  const funcTotal = calcTileType(23, 8);
  expect(funcTotal).toBe('right');
});

test('Function-calcTileType(right)', () => {
  const funcTotal = calcTileType(16, 8);
  expect(funcTotal).toBe('left');
});

test('Function-calcTileType(center)', () => {
  const funcTotal = calcTileType(18, 8);
  expect(funcTotal).toBe('center');
});
