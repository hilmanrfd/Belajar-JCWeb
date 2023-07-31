let age = 32.45;

console.log(age);
// age = age.toString()
// age = age.toExponential();
age = age.toFixed();

console.log(age);

let salary = "9000000";

console.log(typeof Number(salary));
MAX_VALUE = 10;
console.log(MAX_VALUE);

console.log(String(1_000_000_000_000_000));

//check value boolean true or false
console.log(Boolean("Hello"))
console.log(Boolean("any"))
console.log(Boolean(""))

console.log(Boolean(100))
console.log(Boolean(2))
console.log(Boolean(0))
console.log(" ")

//operasi aritmatika
let panjang = 10
let lebar = 5
let anotherNumber = -10

console.log("Panjang sisi = ", panjang, " dan lebar sisi = ", lebar);
console.log("Jika ditambah = ", panjang + lebar); // pertambahan
console.log("Jika dikali = ", panjang * lebar); // perkalian
console.log("Jika dikurang = ", panjang - lebar); // perkurangan
console.log("Jika dibagi = ", panjang / lebar); // pembagian
console.log("Jika modulus P ke L = ", panjang % lebar); // modulo

console.log(5**3); // ** adalah operator pangkat
console.log(" ") //break

console.log(-panjang);
console.log(-anotherNumber);

//operand unary artinya single operator atau single argument
let x = 1;
x = -x;
console.log(x);

//operand binary artinya single operator atau single argument
let x1 = 1, y = 3;
console.log(y - x1);


console.log("2" + 2);
console.log(2 + "2");
console.log(2 ** "2");
console.log("2" ** 2);
console.log(2 * "2");
console.log("2" * 2);

let num = 16;
num = num + 10;
num += 4; // num = num + 4
console.log(num);

console.log(num++, "<= postfix"); // num += 1 // 31
console.log(num);
num--; // num -= 1 // 30

console.log(++num, "<= prefix");

console.log(num);

console.log(6 > 7);
console.log(7 >= 7);
console.log(7 == 7);
console.log(7 == "7");
console.log(7 === "7");

console.log(!false);
console.log(!true);

console.log(6 != 6);
console.log(6 != 7);