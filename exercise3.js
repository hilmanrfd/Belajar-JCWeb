//multiplication table
console.log("");
console.log("Tabel Perkalian");
console.log("===========");
var angka = 2;

for (let q = 1; q <= 10; q = q+1){
    total = angka*q;
    console.log(angka, " x ", q, " = ",total);
}

//palindrome check
console.log("");
console.log("Check Palindrome");
console.log("===========");

let str="awas kodok";
let result="";

for (let i = str.length -1; i>=0; i--){
    result += str[i];
} console.log(result);

if (result === str) {
    console.log(result, "adalah kata Palindrome");
} else {
    console.log (result, "bukan kata Palindrome");
}

//convert cm to km
console.log("");
console.log("Convert CM to KM");
console.log("===========");

const cm = 500000;
const km = cm/100000;
console.log(cm," cm"," sama dengan ",km," km");

//convert cm to km