// JS Task two

// 21-March-2022
// monday
// Note: Create new folder “JS-21-march-2022” contains files below in your JavaScript repo.

/* 1. Write a JavaScript program that accept two integers and
 * display the larger. Go to the editor */
/******* Start Your Code *********/

  let number1 = prompt("Enter First number :: ");
  let number2 = prompt("Enter second number :: ");
    
    if(Number(number1)>Number(number2)){
    
        alert(number1 + " is the largest.");
    }
    else if(number1 === number2){
        alert("The Numbers are equal");
    }  
    else {
        alert(number2 + " is the largest.");
    }
 


 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/

function signOfproduct(num1 ,num2, num3){
    let multi=num1*num2*num3;
    if(multi<0){
        alert('-');
    }

    else alert("+");
}


 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
  
let x=prompt("Enter First numbers :: "), y=prompt("Enter second numbers :: "), z=prompt("Enter third numbers :: ") , large, small, medium;
x=Number(x);
y=Number(y);
z=Number(z);

if(x>y && x>z){
    large=x;
    if(y>z){
        medium=y;
        small=z;
    }
    else {
        medium=z;
        small=y;
    }
}

else {
    if(y>z){
        large=y;
        if(z>x){
            medium=z;
            small=x;
        }
        else {
            medium=x;
            small=z;
        }
    }
    else if(z>y){
        large=z;
        if(x>y){
            medium=x;
            small=y;
        }
        else {
            medium=y;
            small=x;
        }
    }
}
alert(`${"Numbers in descinding order :: "} ${large} ${medium} ${small}`);

 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
let a=10,b=20,c=30,d=40,e=50,f=60;

if (a>b && a>c && a>d && a>f)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>f)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>f)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>f)
{
    console.log(d);
}
else
{
    console.log(f);
}


 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
  let xx=prompt("Enter x :: ");
  let yy =prompt("Enter y :: ");
  xx=Number(xx);
  yy=Number(yy);

  if(xx>yy){
      alert("Hello,World!");
  }
  else {
      alert("GoodBye!");
  }


 /******* End Your Code ********* */










