var emoji = [
	["🏃","BEGIN"],
	["🔚","END"],
	["🏁","."],
	["👉",":="],
	["❤️",";"],
	["💛",";"],
	["💜",";"],
	["💚",";"],
	["💔",";"],
	["💗",";"],
	["💙",";"],
	["✖","*"],
	["➗","/"],
	["➕","\+"],
	["➖","-"]
]
function translate(str){
	var result = str;
	for(var i = 0; i < emoji.length; i++){
		var regex = new RegExp(emoji[i][0], "g");
		result = result.replace(regex, emoji[i][1]);
	}
	return result;
}
function translate_reverse(str){
	var result = str;
	for(var i = 0; i < emoji.length; i++){
		var regex = new RegExp(escapeRegExp(emoji[i][1]), "g");
		result = result.replace(regex, emoji[i][0]);
	}
	return result;
}
function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}