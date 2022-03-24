// JS Tasks

// 24-March-2022
// Thursday
// Note: Create new folder “Object-24-march-2022” contains htm connected with JS  page in your JavaScript repo.

// console.log('Here is : ', 'Object')


/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/

var Me = [
{firstName:"mo\'men"},
{lastName:"Alshouha"},
{age:15},
{dob:"20-12"},
{favFood:["Mansaf","Kabseh","Ozi"]},
{favMovie:["Final distinatin 1","Final distinatin 1","Final distinatin 1"]},
]




var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 ,favFood:["Mansaf","Kabseh","Ozi"], favMovie:["Final distinatin 1","Final distinatin 1","Final distinatin 1"]},
  { name: { first: 'Alex', last: 'Mercer' }, age: 25  ,favFood:["Mansaf","Kabseh","Ozi"], favMovie:["Final distinatin 1","Final distinatin 1","Final distinatin 1"]},
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24  ,favFood:["Mansaf","Kabseh","Ozi"], favMovie:["Final distinatin 1","Final distinatin 1","Final distinatin 1"]},
  { name: { first: 'Zues', last: 'Odin' }, age: 55 ,favFood:["Mansaf","Kabseh","Ozi"], favMovie:["Final distinatin 1","Final distinatin 1","Final distinatin 1"] },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 ,favFood:["Mansaf","Kabseh","Ozi"], favMovie:["Final distinatin 1","Final distinatin 1","Final distinatin 1"] }
];

/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/

function firstNames(persons){
    for(let i=0; i<5;i++){
        console.log(persons[i].name.first)
    }
}


/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/
function calcAvg(persons){
    let sum=0
    for(let i=0;i<5 ; i++){
        sum+=persons[i].age;
    }
    return sum/5;
}

calcAvg(persons);

/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/

function olderPerson(persons){
    let olderPerson=-1;
    index=0;
    for(let i=0; i<5; i++){
        if(persons[i].age>olderPerson){
            olderPerson=persons[i].age;
            index=i;
        }
    }
    console.log("The older person is :: " + persons[index].name.first + " " + persons[index].name.last);

}

olderPerson(persons);



/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/

function longestName(persons){
    let fullName;
    let longestFullName="";
    for(let i=0; i<5;i++){
        fullName=persons[i].name.first+persons[i].name.last;
        if(fullName.length>longestFullName){
            longestFullName=fullName;
        }

    }
    console.log(fullName);
}


//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/

var obj ={} ;

function repeatWord(text) {
    let newText=text.toUpperCase().split(" ");
    let arrtest =[]
    
    for(let i=0;i<newText.length; i++) {
        arrtest=newText[i]
        counter=0
        for(let j =0 ; j<newText.length;j++){
            arrtest=newText[j]
            if(newText[i]==arrtest){
                counter++
            }
            
           obj[newText[i]]=counter;
        }  
    }
    return obj;
}

repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO");

/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/

var obj ={} ;

function repeatWord(text) {
    let newText=text.toUpperCase().split("");
    let arrtest =[]
    
    for(let i=0;i<newText.length; i++) {
        arrtest=newText[i]
        counter=0
        for(let j =0 ; j<newText.length;j++){
            arrtest=newText[j]
            if(newText[i]==arrtest){
                counter++
            }
            
           obj[newText[i]]=counter;
        }  
    }
    return obj;
}

repeatWord("mamababatetacedo");

/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/

function selectFromObject(obj, arr) {
    let converter = Object.keys(obj);
    for (let i = 0; i < converter.length; i++) {
        if (converter[i] !== arr[i]) {
            delete converter[i];
        }
    }
    return converter;
}

let select = selectFromObject({ a: 1, cat: 3, b: 5 }, ['a', 'cat', 'd']);
document.write(select);
 

