var Interpreter = function (parser) {
	this.parser = parser;
	
	this.parse = function () {
		this.parser.program();
	}
}