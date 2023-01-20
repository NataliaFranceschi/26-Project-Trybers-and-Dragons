import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _monsters;
  constructor(player:Fighter, monsters: (SimpleFighter | Fighter)[]) {
    super(player);
    this._monsters = monsters;
  }

  fight(): number {
    this._monsters.map((monster: SimpleFighter) => {
      while (this.player.lifePoints !== -1) {
        this.player.attack(monster);
        if (monster.lifePoints === -1) {
          break;
        }
        monster.attack(this.player);
      }
      return monster.lifePoints;
    });
    return super.fight();
  }
}

export default PVE;