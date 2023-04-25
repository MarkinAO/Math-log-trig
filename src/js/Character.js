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
    this.attackValue = null;
    this.defence = null;
    this.stonedStatus = false;
  }

  set stoned(status) {
    this.stonedStatus = status; // true || false
  }

  get stoned() {
    return this.stonedStatus;
  }

  set attack(value) {
    this.attackValue = value;
  }

  get attack() {
    return (distance) => {
      let result = this.attackValue * (1 - 0.1 * (distance - 1));
      if (this.stoned) {
        result = Math.floor(result - Math.log2(distance) * 5);
      }
      return result;
    };
  }
}
