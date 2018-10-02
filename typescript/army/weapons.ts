export abstract class Weapon {
  abstract power: number;
  abstract defense: number;
  abstract range: number;
  abstract twoHanded: boolean;
}

export class Sword extends Weapon {
  power = 10;
  defense = 0;
  range = 1;
  twoHanded = false;
}

export class Bow extends Weapon {
  power = 4;
  defense = 0;
  range = 5;
  twoHanded = true;
}

export class Shield extends Weapon {
  power = 0;
  defense = 3;
  range = 0;
  twoHanded = false;
}