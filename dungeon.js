const { Character } = require("./character")

class Dungeon{
  constructor(name, bossName){
    this._name = name;
    this._players = [];
    this._dungeonMaster = new DungeonMaster(bossName);
  }

  addPlayers (players){
    this._players = players;
  }

  battle(){
    while(this._dungeonMaster.hp > 0){
      for(let i = 0; i < this._players.length; i++){
        this._dungeonMaster.hp = this._dungeonMaster.hp - this._players[i].attack()
        if(this._dungeonMaster.hp < 0){
          console.log(`Congratulations!!, ${this._dungeonMaster.name} Defeated.`);
          return;
        }
      }
    }
  }
}

class DungeonMaster extends Character{
  constructor(name){
    super(name, "Dungeon Master")
    this._healthPoints = 250;
    this._strength = 3;
    this._intelligence = 3;
    this._agility = 3;
  }

  attack(){
    let totalAttack = this._strength + this._agility + this._intelligence;
    console.log("Boss ATTACK!!");
    return totalAttack;
  }
}

module.exports = Dungeon