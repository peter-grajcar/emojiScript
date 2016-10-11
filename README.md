# emojiScript

emojiScript is interpreted programming language based on emojis. The interpreter of emojiScript is written in javaScript.
Because one picture is worth a thousand words.

##Content

['Hello World' program example](#2)

[Documentation](#3)

* [1. Syntax](#4)
 * [1.1. Program](#5)
 * [1.2. Block of code](#6)
 * [1.3. Semicolons](#7)

* [2. Variables](#8)
 * [2.1. Identifiers](#9)
 * [2.2. Assignment](#10)
 * [2.3. Data types](#11)
   * [2.3.1. Number](#12)  
   * [2.3.2. String](#13)
   * [2.3.3. Boolean](#14)
   
* [3. Operators](#15)
 
* [4. Conditions](#16)
 * [4.1. If statement](#17)
   * [4.1.1. Syntax](#18)
   * [4.1.2. Sample code](#19)
   
* [5. Loops](#20)
 * [5.1. While loop](#21)
   * [5.1.1. Syntax](#22)
   * [5.1.2. Sample code](#23)
   
[Sample programs](#24)

## 'Hello World' program example

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

Number represents numbers with floating point

```
😄 👉 4❤️
```

```
😂 👉 10.85❤️
```
	
##### 2.3.2. String

String may contain any character except 💬

```
😄 👉 💬👋🌍💬❤️
```
	
```
😂 👉 💬👋💬 ➕ 💬🌍💬❤️
```
	
##### 2.3.3. Boolean

Boolean data type may have values either 👍 or 👎

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

### Prime tester
```
🔝
	🏃
		😊 👉 37❤️
		😂 👉 👍❤️
		✏️(😊 ➕ 💬 is a prime:💬)❤️
		
		🆗 😊 ◀️ 2
		🏃
			😂 👉 👎❤️
		🔚❤️
		🆗 (😊 💔 2 🏇 0 🍺 😊 💔 3 🏇 0) 🍻 (😊 ▶️ 3)
		🏃
			😂 👉 👎❤️
		🔚❤️
		😍 👉 5❤️
		🔁 😍✖️😍 ◀️ 😊
		🏃
			😍 👉 😍 ➕ 2❤️
			🆗 😊 💔 😍 🏇 0
			🏃
				😂 👉 👎❤️
			🔚❤️
		🔚❤️

		✏️(😂)❤️
	🔚
🔚🏁
```

Output:

```
> 37 is a prime:
> true
```