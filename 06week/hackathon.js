// Question 1-3 Count Letters

// Sam Barrick, Grant Kee and Nee Shazer

// Question 1 Hangman ** Need to make this in the terminal for the game to work **

let hide = 'hello';

let show = '';

for ( i = 0; i < hide.length; i++ ) {
show += '_';
}

function check( letter ) {

if ( hide.match( letter ) ) {

for ( i = 0; i < hide.length; i++ ) {

if ( hide[i] === letter ) {

show = show.split('');
show[i] = letter;
show = show.join('');

}
}

} else {
console.log( letter + ' is not in the word');
}
}

check( 'h' )
check( 'e' )
check( 'l' )
check( 'o' )

console.log(show)

// Question 2 Ramp Numbers

function countRampNumbers(userNumber){
  let rampCounter = 0;
  
  for (let eachNumber = 0; eachNumber < userNumber; eachNumber ++){

    let magicNumb = eachNumber.toString().split("")
    let bool = true;
    for (let i = 0; i < magicNumb.length; i++){

      if(parseInt(magicNumb[i]) > parseInt(magicNumb[i + 1])){
        bool = false;
      }
      }
      if(bool){
        rampCounter++;
    }
    
  }
   return rampCounter;
}


countRampNumbers(99999);

// 3) Question 3 Letter Count

let string = "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.";

function letterCount(str) {
  const obj  = {};
  str.split('').sort().map((str) => {
        if (str.match(/[a-z]|/)) {
          // the | in the RegEx above means "count every other thing in the string in addition to a-z". Try taking it out and see what happens.
          obj[str] = obj[str] + 1 || 1;
        }
    });
    
  return obj;
}

letterCount(string);
