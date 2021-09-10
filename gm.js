mc.regPlayerCmd("gm"," ",function(pl){
  	if (pl.gameMode == 0){ //if gm = 0
  		pl.runcmd("gamemode c") // changing gm to creative
  		pl.tell("§a[GM] §fgamemode changed to creative")
  	}
  	else if(pl.gameMode == 1){ // if gm = 1
  		pl.runcmd("gamemode s") // changing gm to survival
  		pl.tell("§a[GM] §fgamemode changed to survival")
  	}
  	else{
  		pl.tell("§cError")
  	}
},1) // 1 - command for op 
log("[GM] thank you for using my plugin. tg: @xrominjol")
