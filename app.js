var no1 = +prompt("Enter 1st number: ");
var op = prompt("Enter operator: ");
var no2 = +prompt("Enter 2nd number: ");
var res;

document.getElementById("no1").innerHTML = no1;
document.getElementById("no2").innerHTML = no2;
document.getElementById("op").innerHTML = op;

if (op === "+") {
    res = no1 + no2;
    document.getElementById("res").innerHTML = res;    
} else if (op === "-") {
    res = no1 - no2;
    document.getElementById("res").innerHTML = res;
} else if (op === "*") {
    res = no1 * no2;
    document.getElementById("res").innerHTML = res;
} else if (op === "/") {
    res = no1 / no2;
    document.getElementById("res").innerHTML = res;
} else if (op === "%") {
    res = no1 % no2;
    document.getElementById("res").innerHTML = res;
} else {
    res = "Invalid Syntax";
    document.getElementById("res").innerHTML = res;
}