const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed : ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (object, value) {
  let lclKeys = Object.keys(object);
  for (const key of lclKeys) {
    if (object[key] === value) {
      return key;
    }
  } return undefined;
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);