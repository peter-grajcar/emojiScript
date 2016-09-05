# emojiScript

emojiScript is interpreted programming language based on emojis. The interpreter of emojiScript is written in javaScript.
Because one picture is worth a thousand words.

## Hello World

```
🔝
	🏃
		✏️(💬👋🌍💬)❤️
	🔚
🔚🏁
```
	
Output:

```
> 👋🌍
```

## Documentation

### 1. Syntax

#### 1.1. Program

```
🔝
	{main block of code}
🔚🏁
```
	
#### 1.2. Block of code

```
🏃
	{code}
🔚
```
	
#### 1.3. Semicolons

❤️❤️❤️❤️❤️❤️
	
### 2. Variables

emojiScript is weakly typed language and there is no need to explicitly define data types of variables.

#### 2.1. Identifiers

Valid identifier must not start with a digit, contain white-space characters, tabs, new-line characters, parenthesis or dots

#### 2.2. Assignment

Assignment of values to variables is done by operator 👉

```
{variable} 👉 {value}❤️
```

```
😄 👉 💬👋🌍💬❤️
```
	
#### 2.3. Data types

##### 2.3.1. Number

Number represents numbers with floating point and supports 4 basic operators: ✖️, ➕, ➖, ➗, 🏇, ◀️, ▶️

```
😄 👉 4❤️
```

```
😂 👉 10.85❤️
```
	
##### 2.3.2. String

String may contain any character except 💬	and support ➕, 🏇, ◀️, ▶️ operators

```
😄 👉 💬👋🌍💬❤️
```
	
```
😂 👉 💬👋💬 ➕ 💬🌍💬❤️
```
	
##### 2.3.3. Boolean

Boolean data type support 🏇, ◀️, ▶️ operators and may have values either 👍 or 👎

```
😄 👉 👍❤️
```

```
😂 👉 👎❤️
```
	
### 3. Operators

|Priority	|	Operator	|	Description			|
| :-------: | :-----------: | :-------------------: |
|		1	|	🍻			|	And					|
|		1	|	🍺			|	Or					|
|		1	|	💎			|	XOR					|
|		1	|	🏇			|	Equals				|
|		1	|	▶️			|	More Than			|
|		1	|	◀️			|	Less Than			|
|		2	|	➕			|	Plus				|
|		2	|	➖			|	Minus				|
|		3	|	✖️			|	Multiply			|
|		3	|	➗			|	Divide				|
|		3	|	💔			|	Modulus				|
|		4	|	(			|	Left Parenthesis	|
|		4	|	)			|	Right Parenthesis	|
|		5	|	➕			|	Unary Plus			|
|		5	|	➖			|	Unary Minus			|
|		5	|	💩			|	Not					|

### 4. Conditions

#### 4.1. If statement

##### 4.1.1. Syntax

```
🆗 {condition : boolean} 
🏃
    {code}
🔚❤️
```

##### 4.1.2. Sample code

```
🔝
	🏃
		😄 👉 2❤️

		🆗 😄 ▶️ 5
		🏃
			✏️(💬👍💬)❤️
		🔚❤️

		🆗 😄 ◀️ 5
		🏃
			✏️(💬👎💬)❤️
		🔚❤️
	🔚
🔚🏁
```

Output:

```
> 👎
```

### 5. Loops

#### 5.1. While loop

##### 5.1.1. Syntax

```
🔁 {condition : boolean} 
🏃
	{code}
🔚❤️
```

##### 5.1.2. Sample code

```
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
```

Output:

```
> 1
> 2
> 3
> 4
> 5
> 6
> 7
> 8
> 9
> 10
```

## Sample programs