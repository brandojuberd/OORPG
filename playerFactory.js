const {Character, Paladin, Wizard, WhiteMage} = require("./character")

class PlayerFactory{
  static createPlayer(name, job){
    switch(job){
      case "Paladin":
        return new Paladin(name);
      case "Wizard":
        return new Wizard(name);
      case "WhiteMage":
        return new WhiteMage(name);
      default:
        return new Character(name);
    }
  }
}

module.exports = PlayerFactory