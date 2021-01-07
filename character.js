//Abstraction: membuat hal yang kompleks menjadi simple
//  Contoh dalam class Character adalah ketika menjalakan method attack
//  kita langsung mendapatkan jumlah attack tanpa perlu memikirkan statnya 

class Character{
  constructor(name, job){
    this._name= name
    this._weapon= "Sword"
    this._job= job || "Swordsman"
    this._healthPoints= 100
    this._manaPoints= 20
    this._level= 1
    this._attributePoint = 0
    this._strength= 3
    this._intelligence= 1
    this._agility= 1
  }

  levelUp(){
    this._level += 1
    this._attributePoint += 1
    return `Congratulation! You're now level ${this._level}`
  }

  greetigns(){
    return `My name is ${this._name}, I'm a ${this._job}`
  }

  attack(){     
    console.log("in character")
    let totalAttack = this._level * this._str + this._agi
    return totalAttack
  }

  slash(){
    let totalAttack = this._level * this.str * 2
  }
}

class Wizard extends Character{
  // constructor(name){
  //   super(name, "Warrior")
  // }

  // attack(){
  //   console.log("in Warrior")
  // }
}

// let brando = new Warrior("Brando")
// console.log(brando.attack());