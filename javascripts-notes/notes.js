/***************************
 //Calling functions using button onclick
const todoList = [];

function addTodo() {
  const actionDone = document.querySelector(".idol");
  const click = actionDone.value;

  console.log(click);
}
****************************/

/************************************
 //Document.querySelector(".targetClassAttribute") any value input from text-box.
  const allItem = []; //A variable Array with no initial value

//Declaring function called "addItem()"
  function addItem() {
  const myItem = document.querySelector(".requestItem"); //variable myItem storing 
//'.requestItem' value.

  const item = myItem.value; //storing into variable 'item' from value input from input text-box.

  allItem.push(item);//adding new item to the array using '.push' method.

  console.log(allItem); //display 'allItem' array value.

  myItem.value = ""; //auto clear on input box.
}
*************************************/

/*function addStockNumber() {
  const myStock = document.querySelector(".stockItem");
  const stock = myStock.value;
  allItem.push(stock);
  //console.log(allItem);
}
*/

/***************
 // Basic For Loops
function addItem() {
  for (let i = 0; i <= 1000; i++) {
    console.log(i);
  }
}
*************/

/*
//Display each item from array 
const todoList = [
  "Practice Coding", //index 0.
  "Watch YouTube Tutorial", //index 1.
  "Make real-case project", //index 2.
];

for (let index = 0; index < todoList.length; index++) {
  result = todoList[index]; // [index] represents the value inside square bracket.
  console.log(result); //result store value from todoList array.
}
*/
/*
const nums = [1, 1, 3, 4, 1, 7, 1, 5];
let total = 0;

for (let i = 7; i < nums.length; i++) {
  const num = nums[i];
  total = total + num;
}

console.log(total);
*/
/*
let a = 1;
let b = 2;
let z = a + b;
console.log(z);
*/

let x = 3;
let y = "2";
y = parseInt(y, 10); // convert into integer from a string.
let z = x + y;
console.log(z);
