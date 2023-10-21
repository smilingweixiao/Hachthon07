import {
    world,
    system
  } from "@minecraft/server";
  
  let myArray = [false];
  
  const express = require('express');
  const app = express();
  const bodyParser = require('body-parser');
  
  app.use(bodyParser.json());
  
  app.post('http://127.0.0.1:5500/outside.html', async (req, res) => {
    let user = req.message;
    const message = req.body.message;
    console.log('Received message:', message);
  
    if(user!= null) world.sendMessage("喔YES收到了");
    if(user === 'fox') {
      myArray[0] = true;
    } else {
      myArray[1] = false;
    }
    res.send('喔YES收到了')
  });
  
  const PORT = 3000 // 你可以使用你想要的埠號
  
  app.listen(PORT, () => {
    console.log(`Receiver server is running on http://localhost:${PORT}`);
  });
  
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
        if(myArray[0] === true) {
          playerDimension.spawnEntity("minecraft:fox", playerLocation); 
        } else {
          world.sendMessage("QQ捏捏好喝到咩噗");
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