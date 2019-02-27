// /The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate:
var x = 0.2 + 0.1;  // x will be 0.30000000000000004
console.log(x);

//To solve the problem above, it helps to multiply and divide:
var x = (0.2 * 10 + 0.1 * 10) / 10;       // x will be 0.3
console.log(x);

//If you add two numbers, the result will be a number:
var x = 10;
var y = 20;
var z = x + y;           // z will be 30 (a number)

//If you add two strings, the result will be a string concatenation:
var x = "10";
var y = "20";
var z = x + y;           // z will be 1020 (a string)   

//If you add a string and a number, the result will be a string concatenation:
var x = "10";
var y = 20;
var z = x + y;           // z will be 1020 (a string)

//A common mistake is to expect this result to be 30:
var x = 10;
var y = 20;
var z = "The result is: " + x + y;
console.log(z);

//A common mistake is to expect this result to be 102030:
var x = 10;
var y = 20;
var z = "30";
var result = x + y + z;
console.log(result);

//JavaScript will try to convert strings to numbers in all numeric operations:
var x = "100";
var y = "10";
var z = x / y;       // z will be 10

//NaN is a JavaScript reserved word indicating that a number is not a legal number.
//Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

var x = 100 / "Apple";  // x will be NaN (Not a Number)
var x = 100 / "10";     // x will be 10

//Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
var myNumber = 2;
while (myNumber != Infinity) {   // Execute until Infinity
  myNumber = myNumber * myNumber;
}
/* 
4
16
256
65536
4294967296
18446744073709552000
3.402823669209385e+38
1.157920892373162e+77
1.3407807929942597e+154
Infinity
*/

//Infinity is a number: typeof Infinity returns number.
var x = typeof Infinity;     // returns "number"

//toFixed() returns a string, with the number written with a specified number of decimals:
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000


//toPrecision() returns a string, with a number written with a specified length:
var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600

//valueOf() returns a number as a number.
var x = 123;
x.valueOf();            // returns 123 from variable x
(123).valueOf();        // returns 123 from literal 123
(100 + 23).valueOf();   // returns 123 from expression 100 + 23

//Number() can be used to convert JavaScript variables to numbers:
Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN 
Number("John");        // returns NaN

//Number() can also convert a date to a number:
Number(new Date("2017-09-30"));    // returns 1506729600000

//parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 

//parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN

//Number properties belongs to the JavaScript's number object wrapper called Number.
//These properties can only be accessed as Number.MAX_VALUE.
//Using myNumber.MAX_VALUE, where myNumber is a variable, expression, or value, will return undefined:
var x = 6;
var y = x.MAX_VALUE;    // y becomes undefined