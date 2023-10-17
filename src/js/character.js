export default class Character {
  #stoned;
  #attack;
  constructor() {
    this.#stoned = false;
    this.#attack = 0;
  }

  setStoned(value) {
    this.#stoned = value;
  }

  getStoned() {
    return this.#stoned;
  }

  setAttack(dist) {
    if (dist <= 0) {
      this.#attack = 0;
      return;
    }

    let result = 100 - (dist - 1) * 10;
    if (this.#stoned) {
      result -= Math.log2(dist) * 5;
      result = Math.round(result);
    }
    this.#attack = Math.max(result, 0);
  }

  getAttack() {
    return this.#attack;
  }
}
