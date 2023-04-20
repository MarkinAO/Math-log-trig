import Magician from '../js/Magician';
import Daemon from '../js/Daemon';

test('Test setStoned', () => {
  const magician = new Magician('Маг');

  magician.setStoned(true);
  expect(magician.stoned).toBe(true);

  magician.setStoned(false);
  expect(magician.stoned).toBe(false);
});

test('Test getAttack', () => {
  const magician = new Magician('Маг');

  expect(magician.getAttack(1, false)).toBe(100);
  expect(magician.getAttack(3, false)).toBe(80);
  expect(magician.getAttack(11, false)).toBe(0);

  expect(magician.getAttack(1, true)).toBe(100);
  expect(magician.getAttack(3, true)).toBe(72);
  expect(magician.getAttack(5, true)).toBe(48);
});

test('Test create character', () => {
  const magician = new Magician('Маг');
  expect(magician.attack).toBe(100);
  expect(magician.defence).toBe(40);

  const daemon = new Daemon('Демон');
  expect(daemon.attack).toBe(100);
  expect(daemon.defence).toBe(40);

  expect(() => new Daemon('')).toThrow('Передано неверное имя персонажа');
});
