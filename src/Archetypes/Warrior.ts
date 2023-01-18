import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  public static _numberInstances = 0;
  public energy: EnergyType;

  constructor(name: string) {
    super(name);
    Warrior._numberInstances += 1;
    this.energy = 'stamina';
  }

  public get energyType(): EnergyType {
    return this.energy;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._numberInstances;
  }
}

export default Warrior;