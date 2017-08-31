console.log('hello');

var input = document.getElementById("input");
var  sal = document.getElementById("sal");
var  abits = document.getElementById("abits");
var  drome = document.getElementById("drome");
var outputArea = document.getElementById("outPut");


sal.addEventListener("click", reversal);

function reversal() {
    outPut.innerHTML = input.value.split("").reverse(this).join("");
    console.log('test', reversal);
   
}

abits.addEventListener("click", alphabits);

function alphabits() {
    outputArea.innerHTML = input.value.split("").sort(this).join("");
}

drome.addEventListener("click", palindrome);

function palindrome() {
    if (input.value === input.value.split("").reverse().join("")) {
        outPut.innerHTML += "<p> You input a palindrome </p>";
    } else {
        outputArea.innerHTML = input.value;
    }
}







