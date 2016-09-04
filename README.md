# emojiScript

emojiScript is interpreted programming language based on emojis. The interpreter of emojiScript is written in javaScript.
Because one picture is worth a thousand words.

## Hello World

	🔝
		🏃
			✏️(💬👋🌍💬)❤️
		🔚
	🔚🏁
	
Output:

	👋🌍



## Documentation

### 1. Basic Syntax

#### 1.1. Program

Every emojiScript program must start with keyword 🔝 followed by main block of code and end with keyword 🔚 followed by 🏁.

	🔝
		{main block of code}
	🔚🏁
	
#### 1.2. Block of code

Block of code have following syntax:

	🏃
		{code}
	🔚
	
#### 1.3. Semicolons

❤️❤️❤️❤️❤️❤️
	
### 2. Variables

emojiScript is weakly typed language and there is no need to explicitly define data types of variables.

#### 2.1. Identifiers

Valid identifier must not start with a digit, contain white-space characters, tabs, new-line characters, parenthesis or dots

#### 2.2 Assignment

Assignment of values to variables is done by operator 👉

	😄 👉 💬👋🌍💬❤️
	
#### 2.3 Data types

##### 2.3.1 Number

Numbers represents number with floating point and supports 4 basic operators: ✖️, ➕, ➖, ➗, 🏇, ◀️, ▶️

	😄 👉 4❤️
	😂 👉 10.85❤️
	
##### 2.3.2 String

String may contain any character except 💬	and support ➕, 🏇, ◀️, ▶️ operators

	😄 👉 💬👋🌍💬❤️
	😂 👉 💬👋💬 ➕ 💬🌍💬❤️
	
##### 2.3.3 Boolean

Boolean data type support 🏇, ◀️, ▶️ operators

	😄 👉 true❤️
	😂 👉 false❤️
	
### 3. Operators

|Priority	|	Operator	|	Description	|
| :-------: | :-----------: | :-----------: |
|		0	|	🏇			|	Equals		|
|		0	|	▶️			|	More Than	|
|		0	|	◀️			|	Less Than	|
|		1	|	➕			|	Plus		|
|		1	|	➖			|	Minus		|
|		2	|	✖️			|	Multiply	|
|		2	|	➗			|	Divide		|

### 4. Loops

#### 4.1. While loop

	🔝
		🏃
			😊 👉 0❤️
			
			🔁 😊 ◀️ 10 
			🏃
				😊👉😊➕1❤️
				✏️(😊)❤️
			🔚❤️
		🔚
	🔚🏁
