class Character{
  constructor(name, job){
    this._name= name;
    this._weapon= "Sword";
    this._job= job || "Swordsman";
    this._healthPoints= 100;
    this._level= 1;
    this._attributePoint = 0;
    this._strength= 3;
    this._intelligence= 1;
    this._agility= 1;
  }
  get name(){
    return this._name
  }
  get hp(){
    return this._healthPoints
  }
  set hp(value){
    this._healthPoints = value
    console.log(`${this._name}, HP: ${this._healthPoints}`)
    return this._healthPoints
  }
  greetings(){
    return `My name is ${this._name}, I'm a ${this._job}`;
  }

  attack(){     
    let totalAttack = this._strength + this._agility;
    console.log("Flash Slash!!");
    return totalAttack;
  }

}

class WhiteMage extends Character{
  constructor(name){
    super(name, "WhiteMage")
    this._weapon = "Healing Staff"
    this._strength = 1;
    this._intelligence = 2;
    this._agility = 2;
  }

  attack(){
    let totalAttack = this._intelligence + this._agility;
    console.log("Holy!!");
    return totalAttack;
  }
}

class Wizard extends Character{
  constructor(name){
    super(name, "Wizard")
    this._weapon = "Black Staff"
    this._strength = 1;
    this._intelligence = 4;
    this._agility = 1;
  }
  attack(){     
    let totalAttack = this._intelligence * 2 + this._agility;
    console.log("EXPLOSIONNNNN!!!!!");
    return totalAttack;
  }

}

class Paladin extends Character{
}

module.exports = {Character, Paladin, Wizard, WhiteMage}

