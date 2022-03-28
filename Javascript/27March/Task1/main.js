
/*
Local and Session Storages Tasks
27-Mar-2022
•	Note: Your deadline of these tasks until 11:59pm today.

Task one: you should create a form for your personal data contains:
1- Your name
2- Your Age
3- female or male 
3- Brief Description
4- Your major and university
5- Birth Date 
6- Programming Language you prefer minimum 3 languages with the checklist
7- your image
8- siblings number with a brief description of them

Note: you must store the all date in the Local storage.

In addition to rendering this information to the web page by using local storage by cards in your own styling way when the user click on the submit button .
*/

let name =document.getElementById("name");
let age=document.getElementById("age");
let gender=document.getElementById("gender");
let major=document.getElementById("major");
let university=document.getElementById("university");


function submit() {
    localStorage.setItem("name",`${name.value}`);
    localStorage.setItem("age",`${age.value}`);
    localStorage.setItem("gender",`${gender.value}`);
    localStorage.setItem("major",`${major.value}`);
    localStorage.setItem("university",`${university.value}`);
}
