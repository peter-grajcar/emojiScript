var Lexer = function (code) {
	this.code = code;
	this.pos = 0;
	this.currentChar = this.code.charAt(this.pos);
	
	var ignore = [" ", "\t", "\n"];
	this.def = {
		EOF: "EOF",
		
		NUM: "NUMBER",
		STRING: "STRING",
		BOOL: "BOOLEAN",
		
		PLUS: "PLUS",
		MINUS: "MINUS",
		MUL: "MULTIPLY",
		DIV: "DIVIDE",
		LPAR: "LEFT PARENTHESIS",
		RPAR: "RIGHT PARENTHESIS",
		EQ: "EQUALS",
		LESS: "LESS THAN",
		MORE: "MORE THAN",
		
		BEGIN: "BEGIN",
		END: "END",
		DOT: "DOT",
		ID: "IDENTIFIER",
		ASSIGN: "ASSIGN",
		SEMI: "SEMICOLON",
		WRITE: "WRITE",
		PROGRAM: "PROGRAM",
		WHILE: "WHILE"
	}
	this.op = {
		PLUS: "➕",
		MINUS: "➖",
		MUL: "✖️",
		DIV: "➗",
		LPAR: "(",
		RPAR: ")",
		ASSIGN: "👉",
		SEMI: "❤️",
		DOT: "🏁",
		STRING: "💬",
		EQ: "🏇",
		LESS: "◀️",
		MORE: "▶️",
	}
	this.keywords = {
		"🏃": new Token(this.def.BEGIN, "🏃"),
		"🔚": new Token(this.def.END, "🔚"),
		"✏️": new Token(this.def.WRITE, "✏️"),
		"🔝": new Token(this.def.PROGRAM, "🔝"),
		"🔁": new Token(this.def.WHILE, "🔁"),
		"true": new Token(this.def.BOOL, true),
		"false": new Token(this.def.BOOL, false)
	}
	
	this.error = function (msg) {
		document.getElementById("error").innerHTML += ("Parse Error: " + msg + " near '" + this.code.substring(this.pos-2,this.pos+10) + "'<br>");
	}
	
	this.nextChar = function () {
		this.pos++;
		if(this.pos > this.code.length -1)
			this.currentChar = null;
		else
			this.currentChar = this.code.charAt(this.pos);
	}
	this.furtherChar = function () {
		var furtherPos = this.pos+1;
		if(furtherPos > this.code.length -1)
			return null
		else
			return this.code.charAt(furtherPos);
	}
	this.whiteSpace = function () {
		do{
			var ws = false;
			for(var i = 0; i < ignore.length; i++){
				if(ignore[i] == this.currentChar){
					ws = true;
					this.nextChar();
				}
			}
		}while(ws)
	}
	this.nextToken = function () {
		while(this.currentChar != null){
			this.whiteSpace();		
				
			if(this.currentChar == this.op.ASSIGN.charAt(0) && this.furtherChar() == this.op.ASSIGN.charAt(1)){
				this.nextChar();this.nextChar();
				return new Token(this.def.ASSIGN, this.op.ASSIGN);
			}
			if(this.currentChar == this.op.DOT.charAt(0) && this.furtherChar() == this.op.DOT.charAt(1)){
				this.nextChar();this.nextChar();
				return new Token(this.def.DOT, this.op.DOT);
			}
			if(this.currentChar == this.op.SEMI.charAt(0) && this.furtherChar() == this.op.SEMI.charAt(1)){
				this.nextChar();this.nextChar();
				return new Token(this.def.SEMI, this.op.SEMI);
			}
			if(this.currentChar == this.op.STRING.charAt(0) && this.furtherChar() == this.op.STRING.charAt(1)){
				this.nextChar();this.nextChar();
				return this.string();
			}
			
			if(this.currentChar == this.op.PLUS.charAt(0)){
				this.nextChar();
				return new Token(this.def.PLUS, this.op.PLUS);
			}
			if(this.currentChar == this.op.MINUS.charAt(0)){
				this.nextChar();
				return new Token(this.def.MINUS, this.op.MINUS);
			}
			if(this.currentChar == this.op.MUL.charAt(0) && this.furtherChar() == this.op.MUL.charAt(1)){
				this.nextChar();this.nextChar();
				return new Token(this.def.MUL, this.op.MUL);
			}
			if(this.currentChar == this.op.DIV.charAt(0)){
				this.nextChar();
				return new Token(this.def.DIV, this.op.DIV);
			}
			if(this.currentChar == this.op.LPAR){
				this.nextChar();
				return new Token(this.def.LPAR, this.op.LPAR);
			}
			if(this.currentChar == this.op.RPAR){
				this.nextChar();
				return new Token(this.def.RPAR, this.op.RPAR);
			}
			if(this.currentChar == this.op.EQ.charAt(0) && this.furtherChar() == this.op.EQ.charAt(1)){
				this.nextChar();this.nextChar();
				return new Token(this.def.EQ, this.op.EQ);
			}
			if(this.currentChar == this.op.LESS.charAt(0) && this.furtherChar() == this.op.LESS.charAt(1)){
				this.nextChar();this.nextChar();
				return new Token(this.def.LESS, this.op.LESS);
			}
			if(this.currentChar == this.op.MORE.charAt(0) && this.furtherChar() == this.op.MORE.charAt(1)){
				this.nextChar();this.nextChar();
				return new Token(this.def.MORE, this.op.MORE);
			}
			
			if(isAlpha(this.currentChar))
				return this.id();			
			if(isDigit(this.currentChar))
				return this.num();
		
			this.error("Unexpected Token '" + this.currentChar + "'");
			this.nextChar();
		}
		return new Token(this.def.EOF, null);
	}
	this.num = function () {
		var result = "";
		var f = false;
		while(isDigit(this.currentChar) || (!f && this.currentChar == ".")){
			if(this.currentChar == ".")
				f = true;
			result += this.currentChar;
			this.nextChar();
		}
		return new Token(this.def.NUMBER, parseFloat(result));
	}
	this.string = function () {
		var result = "";
		while(!(this.currentChar == this.op.STRING.charAt(0) && this.furtherChar() == this.op.STRING.charAt(1))){
			result += this.currentChar;
			this.nextChar();
		}
		this.nextChar();this.nextChar();
		return new Token(this.def.STRING, result);
	}
	this.id = function () {
		var result = "";
		while(isID(this.currentChar) && !isOp(this.currentChar, this.furtherChar(), this)){
			result += this.currentChar;
			this.nextChar();
			
			if(typeof this.keywords[result] !== "undefined")
				return this.keywords[result];
		}
		
		return new Token(this.def.ID, result);
	}
}