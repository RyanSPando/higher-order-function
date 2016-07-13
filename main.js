






//Start functions
//========================

function any(array, callbackFn) { //takes an array, checks a conditional function per element. Returns boolean true if only one element in array is true.

  for (var i = 0; i < array.length; i++) {
    if(callbackFn(array[i]))
    return true;
  }
  return false;
}

function greaterThan10(number) {  //return true if a value is greater than 10.
  if (!Number.isInteger(number)) {
    return -1;
  }
  else if (number > 10) {
    return true;
  }
  else {
    return false;
  }
}

function surprise() {
  return(function(){return 'surprise!';})
}

function filter(array, callbackFn) {//takes an array, checks a conditional function per element, and adds the element to a new array if true.
  var newArr = [];

  for (var i = 0; i < array.length; i++) {
    if(callbackFn(array[i]) === true)
    newArr.push(array[i]);
  }

  return newArr;
}

function onlyOdd(number) {//returns true if number is odd
  if ( number % 2 === 1){
    return true;
  }
  else {
    return false;
  }
}

filter([1,2,3,4],onlyOdd);

function sumTwoNumbers(num){//adds two numbers
  return function (input) {
    return input + num;
  };
}
