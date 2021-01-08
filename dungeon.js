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
    while(this._dungeonMaster.attributes.hp > 0){
      for(let i = 0; i < this._players.length; i++){
        this._dungeonMaster.attributes.hp = this._dungeonMaster.attributes.hp - this._players[i].attack()
        console.log(`${this._dungeonMaster.name}, HP: ${this._dungeonMaster.attributes.hp}`)
        if(this._dungeonMaster.attributes.hp < 0){
          console.log(`Congratulations!!, ${this._dungeonMaster.name} Defeated.`);
          return;
        }
      }
    }
    console.log(this._dungeonMaster.attributes);
  }

}

class DungeonMaster extends Character{
  constructor(name){
    super(name, "Dungeon Master", "Dark Sword", {hp: 250, str: 3, agi: 3, int: 3})
  }

  attack(){
    let totalAttack = this._attributes.strength + this._attributes.agility + this._attributes.intelligence;
    console.log("Boss ATTACK!!");
    return totalAttack;
  }
}

module.exports = Dungeon