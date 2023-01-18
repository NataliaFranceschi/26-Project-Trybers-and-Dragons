import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoint: number;
  public static _numberInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoint = 80;
    Dwarf._numberInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoint;
  }

  public static createdRacesInstances(): number {
    return Dwarf._numberInstances;
  }
}

export default Dwarf;