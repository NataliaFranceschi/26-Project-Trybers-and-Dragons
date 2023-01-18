import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  public static _numberInstances = 0;
  public energy: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger._numberInstances += 1;
    this.energy = 'stamina';
  }

  public get energyType(): EnergyType {
    return this.energy;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._numberInstances;
  }
}

export default Ranger;