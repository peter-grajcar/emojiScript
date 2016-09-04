//Checks id character is a digit
function isDigit ( str ){
	return /^\d+$/.test(str);
}
//Checks validity of first character of the identifier
function isAlpha ( str ) {
	return /^[^\d\s\t\r\n\.\(\)]$/.test(str)
}
//Checks validity of the rest of the identifier
function isID ( str ) {
	return /^[^\s\t\r\n\*\.\(\)]$/.test(str)
}
//Checks if identifier is registered as operator
function isOp (char1, char2, lexer){
	for(var i in lexer.op){
		if(lexer.op[i].length == 1){
			if(lexer.op[i] == char1)
				return true;
		}
		else{
			if(lexer.op[i] == char1 + char2)
				return true;
		}
	}
	return false;
}