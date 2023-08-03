console.log("Persegi Panjang");
let panjang = 10;
let lebar = 5;
// luas persegi panjang
let luas = panjang * lebar;
console.log(luas);
// keliling persegi panjang
let keliling = 2 * (panjang + lebar);
console.log(keliling);

console.log("Lingkaran")
let radius = 10;
const PI = 3.14;
//diameter lingkaran
let diameter = 2 * radius;
console.log(diameter);
//luas lingkaran
let luasL = PI * radius * radius;
console.log(luasL);
//keliling lingkaran
let kelilingL = 2 * PI * radius;
console.log(kelilingL);

console.log("Segitiga");
// sudut segitiga
const sudutAll = 180;
let sudut1 = 40;
let sudut2 = 60;
let sudut3 = sudutAll - (sudut1 + sudut2);
console.log(sudut3);

console.log("Perbedaan Tanggal")
// perbedaan tanggal dan convert hari ke tahun, bulan, hari
let date1 = new Date('2023-06-01');
let date2 = new Date('2023-12-01');
let perbedaanTanggal = (date2 - date1) / (1000 * 60 * 60 * 24);
console.log('Perbedaan Tanggal adalah ', perbedaanTanggal);

console.log("Convert Hari")
// convert hari ke tahun, bulan, hari
let day = 400; // <- soal yang mau di convert
let year = 365;
let month = 30;

let tahun = Math.floor(day / year);
let bulan = Math.floor((day % year) / month);
let hari = Math.floor((day % year) % month);

let convertTahun = day + ' = ' + tahun + ' tahun ' + bulan + ' bulan ' + hari + ' hari ';
console.log(convertTahun);

/*let test = (day % year);

console.log(test);
*/