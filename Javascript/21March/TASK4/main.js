// JS Task tow

// 21-March-2022
// monday
// Note: Create new folder “JS-21-march-2022” contains html page in your JavaScript repo.
/*

1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellYou(job,partner,location,childrens){
    console.log(`${job} ${partner} ${childrens} ${location} `);
}


/*********************************************************************************************/

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/



function calculateDogAge(yearsHuman){
    let result = yearsHuman * 7 ;
    console.log(`${"Your doggy is"} ${result} ${"in dog years!"}`);
}
/*********************************************************************************************/

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calcSupply(age , amountPerDay) {
    const maxAge=100;
    let amountCons=0;
    amountCons = (maxAge - age) * amountPerDay * 365;
    return amountCons;

}

let result3 = calcSupply(30,3);

console.log(result3);


/*********************************************************************************************/
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

function greetings (name){
    return "Hello " + name;
}

/*********************************************************************************************/

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

Answer :: 
function double(x) {
  return 2 * x;
}

function double(y) {
  return 2 * y;
}

function double(y) {
  return 2 * y;
}
*/



/*********************************************************************************************/
/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

answer ::
function double1(x) {
  return 2 * x ;
}



functiondouble2 x)
return 2 * x;
}


answer ::
function double1(x) {
  return 2 * x ;
}

function (x) double3 {
  return 2 * x;


  answer ::

  function double3(x) {
  return 2 * x;



*/


/*********************************************************************************************/

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

function Cube(number) {
    return number * number * number;
}




/*********************************************************************************************/
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetDriveLicense(age) {

    let canYou=false;

    if(age>=20)
        canYou=true
    
    return canYou;

}



/*********************************************************************************************/
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(str1,str2) {
    
    let isEqual=false;
    length1=str1.length1;
    length2=str2.length2;

    if(length1===length2)
        isEqual=true;

    return isEqual;

}





/*********************************************************************************************/
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNummber(num1,num2,num3){
    if(num1<num2 && num1 < num3){
        return num1;
    }

    else if(num2<num3){
        return num2;
    }

    else {
        return num3;
    }

}

/*********************************************************************************************/
/*

13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(s1,s2,s3,s4,s5){
    let l1,l2,l3,l4,l5;
    l1=s1.length;
    l2=s2.length;
    l3=s3.length;
    l4=s4.length;
    l5=s5.length;

    if(l1 < l2 && l1<l3 && l1 <l4 && l1 <l5){
        return s1;
    }

    else if(l2<l3 && l2<l4 && l2<l5){
        return s2;
    }

    else if(l3<l4 && l3<l5){
        return s3;
    }
    else if(l4<l5){
        return s4;
    }
    else {
        return s5;
    }

}

let result = shorterString("a","aa","aaa","aaaa","aaaaa");
console.log(result);




/*********************************************************************************************/

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(s1,s2,s3,s4,s5){
    let l1,l2,l3,l4,l5;
    l1=s1.length;
    l2=s2.length;
    l3=s3.length;
    l4=s4.length;
    l5=s5.length;

    if(l1 > l2 && l1>l3 && l1 >l4 && l1 >l5){
        return s1;
    }

    else if(l2>l3 && l2>l4 && l2>l5){
        return s2;
    }

    else if(l3>l4 && l3>l5){
        return s3;
    }

    else if(l4>l5){
        return s4;
    }

    else {
        return s5;
    }

}

let result2 = shorterString("a","aa","aaa","aaaa","aaaaa");
console.log(result);






/*********************************************************************************************/
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

function isEven(number){
    (number%2==0)?true:false;
}





/*********************************************************************************************/
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

function isOdd(number){
    (number%2==1)?true:false;
}






/*********************************************************************************************/
/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

function positiveVersion(number){
    if(number<0)
    number=-(number);

    return number;
}



/*********************************************************************************************/
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(firstName,lastName){
    return firstName + lastName;
}




/*********************************************************************************************/
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function random(){
    return Math.random();
}



/*********************************************************************************************/



/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

function random(min,max){
    return Math.floor((Math.random()*(max-min)+min));
}


/*********************************************************************************************/

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

class Counter {
    static staticVariable = 1;
     
     static counterP() {
      return this.staticVariable++;
       }

    }


   console.log(Counter.counterP());
   
    
/*********************************************************************************************/



/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/


/*********************************************************************************************/