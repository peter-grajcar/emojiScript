var Token = function (type, val) {
	this.val = val;
	this.type = type;
	
	this.toString = function () {
		return "Token (" + this.type + ":'" + this.val + "')";
	};
	
	/*document.write(this + "<br>");*/
}

Token.prototype.toString = Token.toString();