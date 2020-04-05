//

// for (var i = 1 ; i < 10; i ++) {
//     if( i  % 2  === 0 ) {
//         console.log (i + ": is even")
//     } else {
//         console.log (i + ": it is odd")
//     }
// }

// FIZZBUZZ

// for each number from 1 through 100
// if the number is divisible by 3 console.log 'Fizz'
// if the number is divisble by 5 console.log "Buzz"
// if the number is divisble by both console.log 'Fizzbuzz'

for (var i = 0; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + ": Fizzbuzz");
  } else if (i % 3 === 0) {
    console.log(i + ": Fizz");
  } else if (i % 5 === 0) {
    console.log(i + ": Buzz");
  }
}
