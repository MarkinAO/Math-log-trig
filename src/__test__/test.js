import Magician from '../js/Magician';
import Daemon from '../js/Daemon';

test('Test set stoned', () => {
  const magician = new Magician('Маг');

  magician.stoned = true;
  expect(magician.stonedStatus).toBe(true);

  magician.stoned = false;
  expect(magician.stonedStatus).toBe(false);
});

test('Test get attack', () => {
  const magician = new Magician('Маг');

  magician.stoned = false;
  expect(magician.attack(1)).toBe(100);
  expect(magician.attack(3)).toBe(80);
  expect(magician.attack(11)).toBe(0);

  magician.stoned = true;
  expect(magician.attack(1)).toBe(100);
  expect(magician.attack(3)).toBe(72);
  expect(magician.attack(5)).toBe(48);
});

test('Test create character', () => {
  const magician = new Magician('Маг');
  expect(magician.attackValue).toBe(100);
  expect(magician.defence).toBe(40);

  const daemon = new Daemon('Демон');
  expect(daemon.attackValue).toBe(100);
  expect(daemon.defence).toBe(40);

  expect(() => new Daemon('')).toThrow('Передано неверное имя персонажа');
});

test('Test set attack', () => {
  const magician = new Magician('Маг');
  magician.attack = 200;
  expect(magician.attackValue).toBe(200);
});
