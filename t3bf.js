function(context, args) {// target:#s.target.npc, username:"valid username", start:0
	var caller = context.caller;
	var l = #s.scripts.lib();

	var retStr = "===============\n";
	var currPin = "";
	for (var i = args.start; i < args.start+50; i++) {
		currPin=('000'+i).slice(-4);
		var response = args.target.call({ username:args.username, pin:currPin });
		//#s.chats.tell({ to:"jojotastic",  msg:response});
		if (response.length != 87 && response.length != 84 && response.length != 61 && response.length != 64) {
			retStr += "Length: "+response.length+"\nPin: "+currPin+"\nContents:\n"+response+"\n===============\n";
		} /*else {
			retStr += "Length: "+response.length+"\nPin: "+currPin+"\n===============\n";
		}*/
		//retStr += response.length+": \""+currPin+"\"\n\n";
	}
	retStr += "End.\nPin: \""+currPin+"\"";
	return { ok:true, msg:retStr};
}
