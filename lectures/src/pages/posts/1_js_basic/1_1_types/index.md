---
title: "Variables & type system"
index: "001_1"
description: ""
date: "2019-03-01"
image: ""
---

## The Variable

Every programming language deals with data (information). And the "container" for the data we need to manipulate is declared through a variable. JavaScript is no different here and we can declare a variable using a keyword `var`

```javaScript
//declare a variable and with a numeric value 0 assigned
var i = 0

```

JavaScript is "dynamically" typed meaning that we don't need and in fact we can't declare what type of data we need to store in the variable. The variable once declare can store any type of data. We can even change the type of data inside variable once it is declared.

```javaScript
//this is legal in javaScript!

// first we store a number
var i = 0

// after that we store a string in the same variable.. no problem
i = 'now i contains string'
```

No rules, no static typing, the compiler will not complain, you can do what ever you want with every variable. For programmers coming from the statically typed languages (C, C++, Java, C#..) this might be scary.

## But we still have types in JS!

The javaScript is dynamically typed, but that does not mean there are no types. The types are:

#### string

the text, we can use double quote or single quote. In newer version of the language we can use "backtick".

```javaScript

var a = "some text"  // double quote
var b = 'other text' // single quote
var c = `more text`  // backtick

```

#### boolean

true or false

```javaScript

var a = true     //this is true
var b = false    //and this is false


```

#### number

Only one number type, stored as "float". There is no int, short, long, double...
The operations with number type are always safe! The worst thing that can happen is NaN result.

```javaScript

var a = 2      //integer
var b = 1.5    //decimal number

```

#### object

Special variable type, will discuss in more detail later

#### null

Special type, representing the absence of the value.

#### undefined

Special type, representing the value that was never defined. Initial value of the variable is "undefined".

```javaScript

//i is undefined here!
var i

```
