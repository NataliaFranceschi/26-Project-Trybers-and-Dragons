import Race from './Race';

class Elf extends Race {
  private _maxLifePoint: number;
  public static _numberInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoint = 99;
    Elf._numberInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoint;
  }

  public static createdRacesInstances(): number {
    return Elf._numberInstances;
  }
}

export default Elf;