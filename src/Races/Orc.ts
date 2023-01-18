import Race from './Race';

class Orc extends Race {
  private _maxLifePoint: number;
  public static _numberInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoint = 74;
    Orc._numberInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoint;
  }

  public static createdRacesInstances(): number {
    return Orc._numberInstances;
  }
}

export default Orc;