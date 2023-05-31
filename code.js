function q1(){
    var number = prompt("Enter a number:");
    if (number > 0) {
        num = number +" is Positive";
    } else {
        num = number +" is Negative";
    }
document.getElementById("q1").innerHTML = num ;
}


function q2(){
    var number = prompt("Enter a Year:");
    if (number.length == 4) {
        q22();
    } else {
        num = "Error. Type a Year!!"
    }
    function q22(){
        if (number%4 == 0) {
            num = number +" is a leap year";
        } else {
            num = number +" is not a leap year";
        }
    }
document.getElementById("q2").innerHTML = num ;
}



function q3(){
    var number = prompt("Enter an Alphabet:");
    if (number == "a")  {
        num = number +" is a vowel";
    } else if (number == "e")  {
        num = number +" is a vowel";
    } else if (number == "i")  {
        num = number +" is a vowel";
    } else if (number == "o")  {
        num = number +" is a vowel";
    } else if (number == "u")  {
        num = number +" is a vowel";
    } else {
        num = number +" is a consonant";
    }
document.getElementById("q3").innerHTML = num ;
}

function q4(){
    var number = prompt("Enter a number:");
    if (number > 18) {
        num = number +" is Eligile to vote";
    } else {
        num = number +" is NOT eligible to vote";
    }
document.getElementById("q4").innerHTML = num ;
}

function q5(){
    var number = prompt("Enter:");
    let empty = "";
    if (number == empty) {
        num = "Empty";
    } else {
        num = "NOT empty";
    }
document.getElementById("q5").innerHTML = num ;
}

function q6(){
    var number = prompt("Enter a number:");
    if (number%2 == 0) {
        num = number +" is an even number";
    } else {
        num = number +" is an odd number";
    }
document.getElementById("q6").innerHTML = num ;
}


function q7(){
    var number = prompt("Enter numbers or alphabets:");
    if (number == isNaN(true) ) {
        num = number +" is not a number";
    } else {
        num = number +" is a number";
    }
document.getElementById("q7").innerHTML = num ;
}


function q8(){
    var num1 = prompt("Enter numbers or alphabets:");
    var num2 = prompt("Enter numbers or alphabets:");
    var num3 = prompt("Enter numbers or alphabets:");
    if (num1 == num2 && num2 != num3 ) {
        num = " Isosceles";
    } else if (num1 == num2 && num2 == num3) {
        num = "Equilateral" ;       
    } else if ( num1 != num2 && num2 != num3){
        num = "Scalene";
    }
document.getElementById("q8").innerHTML = num ;
}