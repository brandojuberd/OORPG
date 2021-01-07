const fs = require("fs");
const Dungeon = require("./dungeon");
const PlayerFactory = require("./playerFactory");

function game(){
  let players = [];
  let rawData= fs.readFileSync("./players.json", {encoding: "utf-8"});
  let playersData = JSON.parse(rawData)
  
  playersData.forEach(player => {
    players.push(PlayerFactory.createPlayer(player.name, player.job));
  });
  
  let darkLabyrinth = new Dungeon("Dark Labyrinth", "Dark Lord")
  darkLabyrinth.addPlayers(players)
  console.log(darkLabyrinth)
  darkLabyrinth.battle()
}

game()