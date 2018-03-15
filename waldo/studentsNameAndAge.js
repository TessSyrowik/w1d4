//Exercise #1:

var array = [10, 2, 5, 1, 9];
array = array.sort(function(a, b){
  return a - b;
});

console.log(array);



//Exercise #2:

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

//                      ⬇ elements, if you want to be technical about it
students.sort(function(a, b){ //pass a function as a parameter to sort.
  if (a.name < b.name){
    return -1;
  }
  if (a.name > b.name){
    return 1;
  }
  // if (a.name === b.name){
    return b.age - a.age;
  // }
});

console.log(students);
