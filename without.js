const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0 ; i < array1.length ; i++ ) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {return false;}
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`Assertion failed: ${array1} !== ${array2}`);
  }
}

const without = function(source, itemsToRemove) {
  let lclArray = source;
  for (let i = 0 ; i < itemsToRemove.length ; i++ ) {
    for (let ii = 0 ; ii < lclArray.length; ii++ ) {
      if (itemsToRemove[i] === lclArray[ii]) {
         lclArray.splice(ii, 1);
         ii--;
      }
    }
  }
  return lclArray;
}



const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]