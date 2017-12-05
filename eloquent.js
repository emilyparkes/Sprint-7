// Minimum Function

var min = function (a, b) {
  if ( a < b ) {
    return a;
  } else {
    return b;
  }
}

// Recursion

/* We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:
Zero is even.
One is odd.
For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?*/

var isEven = function(N) {
  var x = N-2;
    if (x === 0) { // If the sum is even
      return true;  // return "it's true" it's even!
    } else if (x===1){ // otherwise if it is uneven
        return false; // return "false" it's not even
      } else if (x<0) { // If it equals less than 0
        return undefined; // return "undefined" - When given a negative number, the function will recurse again and again, passing itself an ever more negative number, thus getting further and further away from returning a result. It will eventually run out of stack space and abort.
      } else {
      return isEven(n); // The final else, corresponding to the third case, makes the recursive call.
    }
  }

// Bean Counting

var countBs = function(str){
  (i = 0; i < length; i++)
}

var countChar = function()
