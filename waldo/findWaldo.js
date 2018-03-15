// Exercise #1: Callback Arguments:



// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found(arr[i], i);   // execute callback
//     }
//   }
// }



// function actionWhenFound(arrayElement, elementIndex) {
//   console.log("Found " + arrayElement + " at index " + elementIndex + "!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



//Exercise #2: Array forEach

function findWaldo(arr, found) {
  arr.forEach(function(arrayElement) {
    if (arrayElement === "Waldo") {
      found(arrayElement, arr.indexOf(arrayElement))   // execute callback
    }
  });
}



function actionWhenFound(arrayElement, elementIndex) {
  console.log("Found " + arrayElement + " at index " + elementIndex + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


