var Interpreter = function (parser) {
	this.parser = parser;
	
	this.parse = function () {
		this.parser.program();
		//console.log(this.parser.GLOBAL_SCOPE);
	}
}