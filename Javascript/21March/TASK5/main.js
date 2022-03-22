
// // /*
// //  * Exercise 1: 
// //  * 
// //  * Make an array of numbers that are doubles of the first array
// //  *
// //  * Test Case: 
// //  *
// //  * console.log(doubleNumbers([2, 5, 100]));
// //  * 
// //  * Result:
// //  * [4, 10, 200]
// // */




// Answer :: 

let numbers = [ 1,2,3,4];

function doubleArrayNumbers(nums){

  for(let i = 0 ; i<numbers.length ; i++){
    console.log(numbers[i]*2)
  }

}

doubleArrayNumbers(numbers);



// /***************************************************************************************** */
// // /*
// //  * Exercise 2 : 
// //  * 
// //  * Take an array of numbers and make them strings
// //  *
// //  * Test Case: 
// //  *
// //  * console.log(stringItUp([2, 5, 100]));
// //  * 
// //  * Result:
// //  * ["2", "5", "100"]
// // */

// function stringItUp(arr){
//   // your code here

function toString(numbers) {
  let newStrs=[];
  for(let i=0 ; i <numbers.length; i++){

    newStrs.push(numbers[i].toString());
  }

  return newStrs;
}



// /***************************************************************************************** */
// // /*
// //  * Exercise 3:  
// //  * 
// //  * Capitalize each of an array of names
// //  *
// //  * Test Case: 
// //  *
// //  * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
// //  * 
// //  * Result:
// //  *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
// // */

// function capitalizeNames(arr){
//   // your code here

function capitalizeNames(arrNames) {
  let newArr=[];
  for(let i=0; i<arrNames.length; i++){
     newArr= arrNames.map(name => arrNames[i][0].toUpperCase()+arrNames[0].slice(1));
  }
  return newArr;
}

let names = ["aaa","aaa","aaa","aaa"];
let result = capitalizeNames(names);
console.log(result)

/************************ ***************************************************************** */
// // }
// //  * Exercise 4:  
// //  * 
// //  * Make an array of the names in h1s, and the ages in h2s
// //  *
// //  * Test Case: 
// //  *
// //  * console.log(readyToPutInTheDOM([
// //  *   {
// //  *       name: "Angelina Jolie",
// //  *       age: 80
// //  *   },
// //  *   {
// //  *       name: "Eric Jones",
// //  *       age: 2
// //  *   },
// //  *   {
// //  *       name: "Paris Hilton",
// //  *       age: 5
// //  *   },
// //  *   {
// //  *       name: "Kayne West",
// //  *       age: 16
// //  *   },
// //  *   {
// //  *       name: "Bob Ziroll",
// //  *       age: 100
// //  *   }
// //  * ])); 



// //  * 
// //  * Result:
// //  * 
// //  * ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// //  * "<h1>Eric Jones</h1><h2>2</h2>", 
// //  * "<h1>Paris Hilton</h1><h2>5</h2>", 
// //  * "<h1>Kayne West</h1><h2>16</h2>", 
// //  * "<h1>Bob Ziroll</h1><h2>100</h2>"]
// //  */

const users = [
  {
    name:"Ahmad",
    age:19
  },
  {
    name:"Mohammad",
    age:22
  },
  {
    name:"Mahmoud",
    age:52
  },
  {
    name:"Samer",
    age:55
  }
  
  ];

function readyToPutInTheDOM(arr){
  for(let i = 0;i<4;i++){
    document.write(`<h1>${users[i].name}</h1><h2>${users[i].age}</h2>\n`)
  }
}

readyToPutInTheDOM(users);



//   /***************************************************************************************** */
// //   /*
// //   * Exercise 6:
// //   * Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
// //   *
// //   *
// //   * Test Cases :
// //   *   Test Case 1:  valTimesIndex([1,2,3])  
// //   *   Test Case 2:  valTimesIndex([1,-2,-3]) 
// //   * 
// //   * Result
// //   * Test Case 1: [0,2,6]
// //   * Test Case 2: [0,-2,-6]
// //   */


let numbers1 = [ 1,2,3,4];

function valTimesIndex(nums){

  for(let i = 0 ; i<nums.length ; i++){
    console.log(nums[i]*i)
  }

}

valTimesIndex(numbers1);


//   /***************************************************************************************** */
// //   /*
// //   * Exercise 7:
// //   * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
// //   * of that key in each object.
// //   * 
// //   * Test Case:
// //   * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
// //   * 
// //   * Result:
// //   * ['Elie', 'Tim', 'Matt', 'Colt']
// //   */
  
  const objNames = [
    {
      name:"Samer"
    },
    {
      name:"Samer"
    },
    {
      name:"SSSS"
    },
    {
      name:"Ahmad"
    }

  ] 

  function extractKey(arr){
     let names= [];
     for(let i=0 ; i<arr.length;i++){
       names.push(objNames[i].name);
     }

     return names;
    
    }

    let res4= extractKey(objNames);

    console.log(res4);

//   /***************************************************************************************** */
// //   /*
// //   * Exercise 8:
// //   * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
// //   * 
// //   * Examples:
// //   * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
// //   */
  
// //  function extractFullName(){
// //     // your code here 
// //  }

const objectNames = [
  {
    firstName:"Samer",
    lastName:"Alsho"
  },
  {
    firstName:"Samer",
    lastName:"Alsho"
  },
  {
    firstName:"SSSS",
    lastName:"Alsho"
  },
  {
    firstName:"Ahmad",
    lastName:"Alsho"
  }

] 

function extractKey(arr){
   let names= [];
   for(let i=0 ; i<arr.length;i++){
     names.push(objectNames[i].firstName+" "+objectNames[i].lastName);
   }

   return names;
  
  }

  let res5= extractKey(objectNames);

  console.log(res5);