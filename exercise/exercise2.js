//exercise 2

//soal suhu
console.log("soal suhu");
var celcius = 35;
var fahrenheit = (9 / 5) * celcius + 32;
console.log(fahrenheit);

//ganjil genap
console.log("soal ganjil genap");
let angka = 5;

if (angka % 2 == 0) {
  console.log(angka, " adalah angka genap");
} else {
  console.log(angka, " adalah angka ganjil");
}

//prime
console.log("soal prime number");
let primeNum = 3;

let i = 2;
let isPrime = true;

if(primeNum !==1) {
  while(i < primeNum) {
  if(primeNum % i === 0) {
    isPrime = false;
    break;
  }
  i = i+1;
  }
}

if(isPrime) {
  console.log(primeNum, " adalah bilangan prima");
} else {
  console.log(primeNum, " bukan bilangan prima")
}

// soal no 4
console.log("soal total 1 to N");

let n = 5;
let total =0;

for (var i2 = 1; i2 <= n; i2 = i2 +1) {
  total = total + i2;
  console.log("total : ", total, " saat i = ", i2);
}
console.log ("total akhir", total);

//soal no 5 factorial
console.log ("soal find factorial");

let x= 10;
let factorial = 1;
for (let i3 = x; i3 >=1; i3 = i3 - 1) {
  factorial = factorial * i3;
}
console.log ("Faktorial dari ", x , "adalah ", factorial);

//soal fibonacci
console.log("soal fibonnaci");

let x2=6;
let angka1 = 0;
let angka2 = 1;
let angka3 = 0;

for (let q = 3; q <= x2; q = q +1 ){
  angka3 = angka1 + angka2;
  angka1 = angka2;
  angka2 = angka3;
}

console.log(angka3);