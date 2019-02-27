var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

console.log(pos);

pos = str.lastIndexOf("locate");

console.log(pos);

pos = str.search("locate");

console.log(pos);

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res) ;

var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);
console.log(res);

var res = str.slice(7);
console.log(res);

//The difference is that substring() cannot accept negative indexes.
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
console.log(res);

//The difference is that the second parameter specifies the length of the extracted part.
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
console.log(res);

//The replace() method replaces a specified value with another value in a string:
//By default, the replace() method replaces only the first match:
//By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
console.log(n);

//To replace all matches, use a regular expression with a /g flag (global match):
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");
console.log(n);

//A string is converted to upper case with toUpperCase():
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper
console.log(text1, text2);

//concat() joins two or more strings:
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat("+", text2);
console.log(text1,text2,text3);

if (!String.prototype.trim) {
    String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  } };
 var str = "       Hello World!        " ;
 console.log(str);
 console.log(str.trim() );

 //The charAt() method returns the character at a specified index (position) in a string:
var str = "HELLO WORLD";
str.charAt(0);            // returns H

//A string can be converted to an array with the split() method:
var txt = "a,b,c,d,e";   // String
var arr = txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe

console.log(txt);
console.log(arr[1]); // return b

