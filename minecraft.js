import {
  world,
  system
} from "@minecraft/server";

let myArray = "fox";

//   const messageFun = require("./test")
/*  try {
  const messageFun = require('C:/Users/USER/Hachthon07/src/client/api/chatroom.js');
  // 如果沒有錯誤，這裡的程式碼會正常執行
} catch (error) {
  // 如果有錯誤，這裡的程式碼會被執行
  world.sendMessage(console.log(error));
}*/

function getPlayer() {
const allPlayers = world.getAllPlayers();
if (allPlayers.length === 0) {
  return undefined;
}

return allPlayers[0];
}

function getPlayerDimension() {
const player = getPlayer();
if (player === undefined) {
  return undefined;
}
return player.dimension;
}

function getPlayerLocation() {
const player = getPlayer();
if (player === undefined) {
  return undefined;
}
return player.location;
}

function mainTick() {

  if (system.currentTick % 200 === 0) {
    const playerDimension = getPlayerDimension();
    const playerLocation = getPlayerLocation();
    if (playerDimension !== undefined && playerLocation !== undefined) {
      if (playerDimension.id === "minecraft:overworld") { 
        if(myArray === "fox") {
          playerDimension.spawnEntity("minecraft:fox", playerLocation);
        } else if (myArray === "explotsion"){
          playerDimension.spawnEntity("minecraft:creeper", playerLocation);
        } else if (myArray === "firework") {
          playerDimension.spawnEntity("minecraft:fireworks_rocket", playerLocation);
        }
      } 
      else if (playerDimension.id === "minecraft:nether") { 
        playerDimension.spawnEntity("minecraft:hoglin", playerLocation); 
      }
      else {
        playerDimension.spawnEntity("minecraft:wolf", playerLocation);
      }
    }
  }
  system.run(mainTick);
}


system.run(mainTick);
