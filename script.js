//  Variables
var emptyVariable;
var message = "hi world";
var firstName, lastName = "Toktogulova";

// Number - 2 ** 53 - 1
// Javascript - математичесткие операции не ведут к ошибке
var exampleNumber1 = 123;
var exampleNumber2 = 123.45;
var exampleNumber3 = Infinity; // 1 / 0
var exampleNumber4 = NaN ; // Not a Number

// String
var exampleString1 = "hi world";
var exampleString2 = 'hi world';
var exampleString3 = `hi world`;
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
// alert("hi world");
// var result = prompt("hi world"); String
// var result = confirm("hi world"); Boolean
// document.write("hi world");

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
// document.write("hi" + "5");
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

// Comparisons
var exampleComparison1 = 6 > 5; // true
var exampleComparison2 = 6 < 5; // false
var exampleComparison3 = 6 >= 5; // true
var exampleComparison4 = 6 <= 5; // false
var exampleComparison5 = 5 === 5; // true
var exampleComparison6 = 5 !== 5; // false
var exampleComparison7 = "5" == 5; // true
var exampleComparison8 = "5" != 5; // true

// document.write("5" === 5);

//If else
// if (5 > 3) {
    // document.write("hi world");
// }
// else {
//     document.write("Bye world");
// }
/*
Если чайник кипит
 Выключить газ
Иначе 
 Проверить позже
 */
// var age = prompt("How old are you?");
// var votingYears = age - 18;
// if (votingYears === NaN) {
//     alert ("Wrong input. Numbers only.");
// }
// else if (votingYears < 0) {
//     alert("You are too young to vote!");
// }
// else {
//     alert("You could've vote for" + votingYears + "years");
// }
/*
Если ползователь ввел число 13
   Спросить снова
 */
// var userNumber; // undefined
// while (userNumber != 13) {
//     userNumber = prompt("Write thirteen as a number");
// }

/*
Начни с числа один 1
Увеличивать число на единицу
Пока число меньше или равно 3
*/
for (var i=10; i>= 1; i--) {
    document.write(i + " ");
}

//Functions
function sayhi(name, timeOfDay) {
    document.write(`hi ${name}, have a great`) 
}
