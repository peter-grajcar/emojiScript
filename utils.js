function isDigit ( str ){
	return /^\d+$/.test(str);
}
function isAlpha ( str ) {
	return /^[^\d\s\t\r\n;:=\*\+\-\/\.]$/.test(str)
}
function isID ( str ) {
	return /^[^\s\t\r\n;:=\-\/\+\*\.]$/.test(str)
}