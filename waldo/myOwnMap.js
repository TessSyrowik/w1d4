// Build your own map function
// takes in two arguments
  // 1. array to map
  // 2. callback function
//     // ➜ return a new array based on results of callback function

// var words = ["ground", "control", "to", "major", "tom"];

var words = ["ground", "control", "to", "major", "tom"];

function map(words, callbackFunction) {
  var newWords = [];

  for (var i = 0; i < words.length; i++) {
    newWords.push(callbackFunction(words[i]));
  }
  return newWords;
}

// ⬆ what do I want that to do? I want that to run

var mapOne = map(words, function(word) {
  return word.length;
});

var mapTwo = map(words, function(word) {
  return word.toUpperCase();
});

var mapThree = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(mapOne, mapTwo, mapThree);

