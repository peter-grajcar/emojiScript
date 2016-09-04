//Token data structure
var Token = function (type, val) {
	this.val = val;
	this.type = type;
	
	this.toString = function () {
		return "Token (" + this.type + ":'" + this.val + "')";
	};
	
	//console.log(this);
}

Token.prototype.toString = Token.toString();