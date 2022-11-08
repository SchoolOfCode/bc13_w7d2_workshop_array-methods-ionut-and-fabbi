let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

// Write four variables for any number divisable by 3,5,60,90

let divisableBy3 = someNumbers / 3;

someNumbers.some(checkNumbers);
function checkNumbers(someNumbers){
  return someNumbers / 3 === 0;
}

console.log(someNumbers);