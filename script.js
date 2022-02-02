//  Variables
var emptyVariable;
var message = "Hello world";
var firstName, lastName = "Toktogulova";

// Number - 2 ** 53 - 1
// Javascript - математичесткие операции не ведут к ошибке
var exampleNumber1 = 123;
var exampleNumber2 = 123.45;
var exampleNumber3 = Infinity; // 1 / 0
var exampleNumber4 = NaN ; // Not a Number

// String
var exampleString1 = "Hello world";
var exampleString2 = 'Hello world';
var exampleString3 = `Hello world`;
var exampleString4 = "4";

// Boolen 
 var exampleBoolean1 = true;
 var exampleBoolean2 = false;

 // Special types
 var exampleNull = null;
 var exampleUndefined1;
 var exampleUndefined2 = undefined;

 // BigInt - Not now
 var exampleBigInt = 154848455544844n;
 // Symbol - Not now
 var exampleSymbol = Symbol("id");

 // Object
 var exampleObject1 = {};
 var exampleObject2 = Math;

//  // Weird stuff
//  document.write(typeof document); // object

// Output
// alert("Hello world");
// var result = prompt("Hello world"); String
// var result = confirm("Hello world"); Boolean
// document.write("Hello world");

var exampleTypeConversion1 = 5 + "5";
var exampleTypeConversion2 = 5 + 5 + "5";
var exampleTypeConversion3 = true + 2;
var exampleTypeConversion4 = new String (5);
var exampleTypeConversion5 = new Number ("10");
var exampleTypeConversion6 = new Boolean ("");
//document.write(exampleTypeConversion3);

// Math
// Operand x = 5 + 6;
// Operands: 5, 6
// Operator: +

// Unary operator
var x = 5;
x = -x;
 
var y = "3";
y = + y;

// Binary operator 
var x = 1, y = 3;
y = x + y;

var exampleMath1 = 5 + 6;
var exampleMath2 = 5 - 6;
var exampleMath3 = 5 / 6;
var exampleMath4 = 5 * 6;

// Remainder
var exampleMath5 = 5 % 2; // 1
var exampleMath6 = 6 % 2; // 0

// Exponent
var exampleMath7 = 2 ** 4;
// document.write("Hello" + "5");
// document.write(5 * (2 - 3) - 5);

// Fast modify
var exampleMath8 = 4;
exampleMath8 += 5;
exampleMath8 -= 3; //exampleMath8 = exampleMath8 -3;

// Increment / decrement
var exampleMath9 = 0; 
exampleMath9 ++;
exampleMath9 --;
++exampleMath9;
--exampleMath9;

