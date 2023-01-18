import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  public static _numberInstances = 0;
  public energy: EnergyType;

  constructor(name: string) {
    super(name);
    Mage._numberInstances += 1;
    this.energy = 'mana';
  }

  public get energyType(): EnergyType {
    return this.energy;
  }

  public static createdArchetypeInstances(): number {
    return Mage._numberInstances;
  }
}

export default Mage;