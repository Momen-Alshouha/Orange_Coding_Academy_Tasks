let mark = prompt("Enter mark : ");
let grade='';

switch(true) {
    
    case (mark >=90):
        grade = 'A';
        break;
    
    case (mark >=80):
        grade ='B';
        break;
    
    case (mark>=70):
        grade='C';
        break;

    case (mark>=60):
        grade='D';
        break;

    case (mark>=50):
        grade = 'E';
        break;

    case (mark >0):
        grade = 'F';
        break;

}

window.alert(`${"Your grade is :: "} ${grade}`);
