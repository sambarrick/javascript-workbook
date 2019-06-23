// #1a Write a JavaScript program to display the current day and time.
var ts = new Date(); 
console.log(ts.toDateString());

// #1b display Time

 var d = new Date();
  var n = d.toLocaleTimeString();
  console.log(n);

// #2 Write a JavaScript program to convert a number to a string.

 var num = 15;
  var n = num.toString();
  console.log(n);
  
  //#3 Write a JavaScript program to convert a string to the number.

var movieTitle = '4';
var m = parseInt(movieTitle * 10)
console.log(movieTitle)

  /* #4 Write a JavaScript program that takes in different datatypes and prints out whether they are a: */
//  String 
var nums = '8';
  console.log(typeof nums);
  
// Boolean

console.log(2 === 1);
console.log(1 === 1);

// Null

 var movieTitle = 'null';
console.log(movieTitle);

// Undefined

let price;
console.log(price);

//  Number
 var nums = 8;
  console.log(typeof nums);

// NaN

var sup = 8-"eight"
console.log(sup);

//#5 add 2 numbers together

let firstnum = 2;
let secondnum = 3;
let sumofnums = firstnum + secondnum;
console.log(sumofnums);

// #6 Write a JavaScript program that runs only when 2 things are true.
function testNum(a) {
var a = 2;
  if (a > 1 && a < 3 ) {
    return "positive";
  } else {
    return "NOT positive";
  }
}
console.log(testNum(2));

// #7 Write a JavaScript program that runs when 1 of 2 things are true.
function idkMan(some){
var some = 8;
if (some > 7 || some < 7){
  return "yup!";
} else{
  return "nah you wrong bruh";
}
}
console.log(idkMan(8));


// #8 Write a JavaScript program that runs when both things are not true.

function notTrue(k){
var k = 4;
if (k < 3 && k > 8){
  return "where am I?";
} else{
  return "not true bruh what are you thinkin?";
}
}
console.log(notTrue(4));