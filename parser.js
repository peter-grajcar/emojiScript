var Parser = function (lexer) {
	this.lexer = lexer;
	this.currentToken = this.lexer.nextToken();
	this.GLOBAL_SCOPE = {
		
	}
	
	this.expect = function (type){
		if(this.currentToken.type == type)
			this.currentToken = this.lexer.nextToken();
		else
			this.lexer.error("Unexpected " + this.currentToken + " Expected " + this.lexer.def[type]);
	}
	
	this.factor = function () {
		var token = this.currentToken;
		if(token.type == this.lexer.def.PLUS){
			this.expect(this.lexer.def.PLUS);
			return this.unOp(token, this.factor());
		}
		else if(token.type == this.lexer.def.MINUS){
			this.expect(this.lexer.def.MINUS);
			return this.unOp(token, this.factor());
		}
		else if(token.type == this.lexer.def.NUMBER){
			this.expect(this.lexer.def.NUMBER);
			return token.val;
		}
		else if(token.type == this.lexer.def.LPAR){
			this.expect(this.lexer.def.LPAR);
			var result = this.expr();
			this.expect(this.lexer.def.RPAR);
			return result;
		}else if(token.type == this.lexer.def.STRING){
			this.expect(this.lexer.def.STRING);
			return token.val;
		}else{
			return this.GLOBAL_SCOPE[this.variable()];
		}
	}
	this.term = function () {
		var left = this.factor();
		
		while(this.currentToken.type == this.lexer.def.MUL || this.currentToken.type == this.lexer.def.DIV){
			var operator = this.currentToken;
			if(this.currentToken.type == this.lexer.def.MUL)
				this.expect(this.lexer.def.MUL);
			else if(this.currentToken.type == this.lexer.def.DIV)
				this.expect(this.lexer.def.DIV);
			
			left = this.binOp( left, operator, this.factor() );  
		}
		
		return left;
	}
	this.expr = function () {
		var left = this.term();
		
		while(this.currentToken.type == this.lexer.def.PLUS || this.currentToken.type == this.lexer.def.MINUS){
			var operator = this.currentToken;
			if(this.currentToken.type == this.lexer.def.PLUS)
				this.expect(this.lexer.def.PLUS);
			else if(this.currentToken.type == this.lexer.def.MINUS)
				this.expect(this.lexer.def.MINUS);
			
			left = this.binOp( left, operator, this.term() );  
		}
		
		return left;
	}
	this.program = function () {
		this.expect(this.lexer.def.PROGRAM);
		var cs = this.compoundStatement();
		this.expect(this.lexer.def.END);
		this.expect(this.lexer.def.DOT);
		return cs;
	}
	this.compoundStatement = function () {
		this.expect(this.lexer.def.BEGIN);
		
		var list = this.statementList();
		var compound = new Array(list.length);
		
		for(var i = 0; i < list.length; i++){
			compound[i] = list[i];
		}
		
		this.expect(this.lexer.def.END);
		return compound;
	}
	this.statementList = function () {
		var stmt = this.statement();
		var result = [];
		
		while(this.currentToken.type == this.lexer.def.SEMI){
			this.expect(this.lexer.def.SEMI);
			result[result.length] = this.statement();
		}
		
		return result;
	}
	this.statement = function () {
		if(this.currentToken.type == this.lexer.def.BEGIN)
			return this.compoundStatement();
		if(this.currentToken.type == this.lexer.def.WRITE){
			this.expect(this.lexer.def.WRITE);
			this.expect(this.lexer.def.LPAR);
			var x = this.expr();
			this.expect(this.lexer.def.RPAR);
			document.getElementById("output").innerHTML += ("> <font color='blue'>" + x + "</font><br>");
			return this.empty();
		}
		else if(this.currentToken.type == this.lexer.def.ID)
			return this.assignmentStatement();
		else
			return this.empty();
	}
	this.assignmentStatement = function () {
		var left = this.variable();
		var token = this.currentToken;
		this.expect(this.lexer.def.ASSIGN);
		var right = this.expr();
		var result = this.binOp(left, token, right);
	}
	this.variable = function () {
		var result = this.currentToken;
		this.expect(this.lexer.def.ID);
		return result.val;
	}
	this.empty = function () {
		
	}
	
	
	this.binOp = function(left, op, right) {
		switch(op.type){
			case this.lexer.def.PLUS: 
				return left+right;
				break;
			case this.lexer.def.MINUS: 
				return left-right;
				break;
			case this.lexer.def.MUL: 
				return left*right;
				break;
			case this.lexer.def.DIV: 
				return left/right;
				break;
			case this.lexer.def.ASSIGN:
				this.GLOBAL_SCOPE[left] = right;
		}
	}
	this.unOp = function(op, right){
		switch(op.type){
			case this.lexer.def.PLUS: 
				return right;
				break;
			case this.lexer.def.MINUS: 
				return -right;
		}
	}
}