import Race from './Race';

class Halfling extends Race {
  private _maxLifePoint: number;
  public static _numberInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoint = 60;
    Halfling._numberInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoint;
  }

  public static createdRacesInstances(): number {
    return Halfling._numberInstances;
  }
}

export default Halfling;