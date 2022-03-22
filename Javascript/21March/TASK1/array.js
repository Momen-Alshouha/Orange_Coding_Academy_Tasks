console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 answer :: [ 1,7,  9, 45 ]


 ["Str" "alex","moh"

 answer :: ["Str", "alex","moh"]


 'the','fox' 'over' lazy, 'dog',  ]

  answer :: ['the','fox', 'over', lazy, 'dog' ]

*/

/******************************************************************************************************/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

answer :: index of banana :: 0 ;
          index of banana :: 1 ;

*/

/******************************************************************************************************/


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)

*/
 // answer:

//  let favFoods = ["mansaf","masqloba","kabseh","makmorah","Zarb"];

//  let favSport =["weight lifting","running","bodyBuilding"];

//  let favMovie = ["last stand","roky","final denstination"]

/******************************************************************************************************/

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

function firstOfArray(arr){
    let lastChar =arr[0];
    return lastChar;

}

let arr= [1,4,5];
let arr2 = ["t","u","g","x"];
console.log(firstOfArray(arr))


/******************************************************************************************************/
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

// Answer ::

function lastOfArray(arr) {
    let lastChar =a[(a.length[0])-1];
    return lastChar; 
}

let arr3= [1,4,5];
let arr4 = ["t","u","g","x"];
console.log(firstOfArray(arr))


/******************************************************************************************************/


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
// Answer ::
let arr5= [0,5,7,9];

console.log(arr5.shift(),arr5.shift(),arr5.shift(),arr5.unshift(1,3,4,6,8),arr5.push(10));

console.log(arr5);

/******************************************************************************************************/


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
// Answer ::
let array2 = [5,9,-7,3.5];
console.log(array2.shift()); // Delete first element in array
console.log(array2.unshift()); // Add to the first of array
console.log(array2.pop()) // Delete from the last of array
console.log(array2.push()) // Add to the last of array

/******************************************************************************************************/
/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
// Answer ::
function middleOfArray(array){
    let arrSize = array.length;
    if(arrSize%2==0)
    {
        console.log(`${array[arrSize/2]} ${array[arrSize/2-1]} `)
    }
    else {
        console.log(array[Math.floor(arrSize/2)]);
    }
}

let newArr = [1,2,3,4,5,6,7,8,9];

middleOfArray(newArr);




/******************************************************************************************************/

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something

*/
 // Answer ::
let animals;
animals[0]="cat";
animals[1]="ele";
animals[2]="bird";
animals[3]="zebra";
animals[4]="elephant";

/******************************************************************************************************/
/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/

// Answer :: 

function indexOfArray(array,index){
    if(index>=0 && index<array.length)
    return array[index];

    else {
        console.log("Wrong Entry!");
    }
}

let myArr = [10,20,30,40,50,60];




/******************************************************************************************************/
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self

*/
// Answer ::
function arrayExceptLast(myArr){
    let newArr=myArr.slice(0,(myArr.length)-1);
    return newArr;  
}

/******************************************************************************************************/

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
// Answer ::

function addToEnd(arr,value){
    return arr.push(value);
}


/******************************************************************************************************/

// all the exercises below should solved 2 times: 1- for loop 2- while lopp


/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// Answer 1 (foor loop)::
let arrArr = [1,2,3,4,5,6,7,8];

for(let i=0;i<arrArr.length;i++){
    let sum=0;
    sum+=arrArr[i];
}

// Answer 2 (While loop) ::

let newArr2 = [1,2,3,4,5,6,7,8];
let i=(newArr2.length)-1;
let sum=0;
while(i>=0){
    sum+=newArr2[i];
    i--;
}
console.log(sum);


/******************************************************************************************************/
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// Answer :: 
function minInArray(arrr){
    let minValue=Number.MAX_SAFE_INTEGER;
    for(let i=0;i<arrr.length ; i++){
        if(arrr[i]<minValue){
            minValue=arrr[i];
        }
    }
    return minValue;
}


/************************************************************************************ */

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
    //Answer 1 (using delete()) ::
    function removeFromArray(myArr,value) {
        let valueIndex=0;
        for(let i=0 ; i<myArr.length; i++){
            if(myArr[i]==value){
                valueIndex=i;
                break;
            }
        }
        delete myArr[valueIndex];
    }

    let arr10 = [10,20,30,40,50];

    removeFromArray(arr10,10);


    //Answer 2 (using splice()) ::

    function removeFromArray(myArr,value) {
        let valueIndex=0;
        for(let i=0 ; i<myArr.length; i++){
            if(myArr[i]==value){
                valueIndex=i;
                break;
            }
        }
        myArr.splice(valueIndex,1);
    }

    let arr20 = [10,20,30,40,50];

    removeFromArray(arr20,10);
    console.log(arr20);

    
/************************************************************************************ */
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// Answer ::
function oddArray(numbersArray){
let newNumbersArray=[];
for(let i=0;i<numbersArray.length ; i+=2){
    newNumbersArray.push(numbersArray[i]);
}
return numbersArray;
}



/************************************************************************************ */
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// Answer 1 using for loop: 
function avgArray(numbers){
    let sum=0;
    for(let i=0;i<numbers.length; i++){
        sum+=numbers[i];
    }
    return sum/numbers.length;
}



// Answer 2 using while loop ::

function avgArray(){
        let start=0,sum2=0,avg2=0;

         let numbers = [1,1,1,1,1,1,1,1];

     while(start<numbers.length){
        sum+=nhumbers[start];
        start++;
    }
    return sum=numbers/numbers.length;

}

/************************************************************************************ */
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// Answer usin for loop ::
let names = ["alex","mercer","madrasa","rashed2","emad","hala"];

function shortestInArray(strs) {
    let shortestLength=Math.MAX_SAFE_INTEGER;
    let indexOfShortest=0;
    for(let i=0;i<strs.length; i++){
        if(strs[i].length<=shortestLength){
            shortestLength=strs[i].length;
            indexOfShortest=i;
        }
    }
    return strs[indexOfShortest];
}

let shortesttr = shortestInArray(names);

console.log(shortesttr);


/// using while loop :: 
let names2 = ["alex","mercer","madrasa","rashed2","emad","hala"];

function shorterInArr(strs){
    let shortestLength=Math.MAX_SAFE_INTEGER;
    let indexOfShortest=0;
    let i = 0;
    while(i<strs.length){
        if(strs[i].length<shortestLength){
            shortestLength=strs[i];
            indexOfShortest=i;
        }
    
        i++;
    }
    return strs[indexOfShortest];
}
let shortShortStr = shorterInArr(names2);

console.log(shortShortStr);


/************************************************************************************ */
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// Answer 1 unsig for loop ::
let text = "Hello how are you ? are you fine ?";

function repeatChar(str,Char){
    str = str.toLowerCase();
    let counter =0;
    for(let i=0;i<str.length; i++){
        if(str[i]===Char){
            counter++;
        }
    }
    if(counter==0){
        return 0;
    }
    else {
        return counter;
    }
}

let result = repeatChar(text,"z");

console.log(result);

// Answer 1 unsig while loop ::

let text2 = "Hello how are you ? are you fine ?";
text2 = text2.toLowerCase();

function repeatCharacters(str,character){
    let i=0;
    let counter=0;
    while(i<str.length){
     if(str[i]===character) {
        counter++;
     }
        i++;   
    }
    if(counter===0){
        return 0;
    }
    else {
        return counter;
    }
}

let result2 = repeatCharacters(text2,"z");

console.log(result2);

/*************************************************************************************** */

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

let strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
function evenIndexOddLength(strings){
    let newString = [ ];
    for(let i=2;strings.length;i+=2){
        newString.push(strings[i]);
    }
    return newString;
}

console.log(evenIndexOddLength(strings));


/*********************************************************************** */

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//Answer 1 :: 
function powerElementIndex(numbers){
    let newNumbers=[];
    for(let i=0;i<numbers.length;i++){
        let temp=Math.pow(numbers[i],i);
        newNumbers.push(temp);
    }

    return newNumbers;

}

let nums= [44, 5, 4, 3, 2, 10];
let newNums = powerElementIndex(nums);
console.log(newNums); 

/*********************************************************************************************** */
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

//Answer ::

let numbers10 =[5,2,2,1,8,66,55,77,34,9,55,1];
let newNumebrs10=[];
function evenNumberEvenIndex (numbers){
    let i=2;
    while(i<numbers10.length){
        if(numbers[i]%2===0)
        newNumebrs10.push(numbers10[i]);

        i+=2;
    }
    return newNumebrs10;
}

let newNumss = evenNumberEvenIndex(numbers10);

console.log(newNumss);