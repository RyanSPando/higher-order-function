






//Start functions
//========================

function any(array, callbackFn) { //perform function on all elements of an array
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if(callbackFn(array[i]) === true)
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

function surprise {

}

function filter {

}

function onlyOdd(oddArr) {
  var newArr =[];
  for (var i = 0; i < oddArr.length; i++) {
    if ( oddArr[i] % 2 === 1) {
      newArr.push(oddArr[i]);
    }
  }
  return newArr;
}
onlyOdd([1,2,3,4]);

function sumTwoNumbers(num){//adds two numbers
  return function (input) {
    return input + num;
  };
}
