export default class Character {
  constructor(name, type) {
    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Передано неверное имя персонажа');
    }
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defence = null;
  }

  setStoned(status) {
    this.stoned = status; // true || false
  }

  getStoned(distance, attack) {
    if (this.stoned) {
      return Math.floor(attack - Math.log2(distance) * 5);
    }
    return attack;
  }

  getAttack(distance, status) {
    this.setStoned(status);
    const computedAttack = this.attack * (1 - 0.1 * (distance - 1));
    return this.getStoned(distance, computedAttack);
  }
}
