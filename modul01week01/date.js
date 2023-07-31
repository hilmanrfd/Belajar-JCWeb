let myDate = new Date() //date adalah class bawaan javascript. Sebelah kiri dari New adalah Object. Kelas itu adalah cetakan kue. New adalah Class. myDate adalah Object

console.log(myDate);

let mydate2 = new Date("2000-11-10") //ga di set jam
let mydate3 = new Date("2023-07-23 09:10:11") //di set jam nya
console.log(mydate2)
console.log(mydate3)

/*
let mydate4 = new Date(24 * 3600 * 1000)
//default date adalah tahun 1970 bulan 1 tanggal 1
//berarti ini adalah tahun 1970 ditambahkan 24 jam

console.log(mydate4)
*/

console.log(mydate3.getFullYear())
console.log(mydate3.getMonth())
console.log(mydate3.getDate())
console.log(mydate3.getDay())
console.log(mydate3.setDate(2))

/* konsep day & month kaya index, bakal return dari 0, dan jelasnya seperti berikut. sesuatu yang berulang dari 0
0 : sunday : minggu
1 : monday : senin 

get berarti mendapatkan / mengambil tanggal
set berarti ngeset tanggalnya.*/


