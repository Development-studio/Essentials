mc.regPlayerCmd("heal","вылечить",function(pl,args){
	let ply = mc.getPlayer(args[0])
	if (ply == null) {
		let nbt = pl.getNbt()
		nbt.getTag('Attributes').getTag(1).getTag('Current').set(20)
		pl.setNbt(nbt)
		pl.tell("§a[XR] §fвы вылечились.")
	}else{
		let nbt = ply.getNbt()
		nbt.getTag('Attributes').getTag(1).getTag('Current').set(20)
		ply.setNbt(nbt)
		pl.tell("§a[XR] §fвас вылечили.")
	}
},1)

mc.regPlayerCmd("feed","покормить",function(pl,args){
	let ply = mc.getPlayer(args[0])
	if (ply == null) {
		let nbt = pl.getNbt()
		nbt.getTag('Attributes').getTag(9).getTag('Current').set(20)
		pl.setNbt(nbt)
		pl.tell("§a[XR] §fвы покушали.")

	}else{
		let nbt = ply.getNbt()
		nbt.getTag('Attributes').getTag(9).getTag('Current').set(20)
		ply.setNbt(nbt)
		pl.tell("§a[XR] §fвас покормили.")
	}
},1)

mc.regPlayerCmd("gm","переключение режима игры",function(pl){
  	if (pl.gameMode == 0){
  		pl.runcmd("gamemode c")
  		pl.tell("§a[XR] §fрежим игры сменён на креатив.")
  	}
  	else if(pl.gameMode == 1){
  		pl.runcmd("gamemode s")
  		pl.tell("§a[XR] §fрежим игры сменён на выживание")
  	}
  	else{
  		pl.tell("§cError")
  	}
},1)