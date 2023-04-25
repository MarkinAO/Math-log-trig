import Character from './Character';

export default class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attackValue = 100;
    this.defence = 40;
  }
}
