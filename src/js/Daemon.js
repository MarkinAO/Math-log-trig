import Character from './Character';

export default class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attackValue = 100;
    this.defence = 40;
  }
}
