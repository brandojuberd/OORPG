class Character{
  constructor(name, job, weapon, attributes = {}){
    this._name= name;
    this._weapon= weapon || "Sword";
    this._job= job || "Swordsman";
    this._level= 1;
    this._attributes={
      hp:  attributes.hp || 100 ,
      strength: attributes.str || 3,
      intelligence: attributes.int || 1,
      agility: attributes.agi || 1
    }
  }
  get name(){
    return this._name;
  }
  get attributes(){
    return this._attributes;
  }
  set attributes(value){
    this._attributes.hp = value;
    return this._attributes.hp
  }
  greetings(){
    return `My name is ${this._name}, I'm a ${this._job}`;
  }

  attack(){     
    let totalAttack = this._attributes.strength + this._attributes.agility;
    console.log("Flash Slash!!");
    return totalAttack;
  }

}

class WhiteMage extends Character{
  constructor(name){
    super(name, "WhiteMage", "Healing Staff", {hp: 100, agi: 2, int: 2, str: 1})
  }

  attack(){
    let totalAttack = this._attributes.intelligence + this._attributes.agility;
    console.log("Holy!!");
    return totalAttack;
  }
}

class Wizard extends Character{
  constructor(name){
    super(name, "Wizard", "Black Staff", {hp: 100, agi: 1, int: 4, str: 1})
  }
  attack(){     
    let totalAttack = this._attributes.intelligence * 2 + this._attributes.agility;
    console.log("EXPLOSIONNNNN!!!!!");
    return totalAttack;
  }

}

class Paladin extends Character{
}

let brando = new Character("brando", "Swordsman", "Black Sword", {hp: 120})
console.log(brando);

module.exports = {Character, Paladin, Wizard, WhiteMage}

