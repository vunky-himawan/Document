// Multiline String

console.log('String 1\nString 2'); // concat
console.log(`String 1
String 2`); // String literal

const mhs = {
  nama: "Vunky Himawan",
  umur: 19,
  nim: '2241720005',
  email: 'vunkyhimawan19@gmail.com'
}

// concat
let el = '';
el += '<div class="mhs">';
el += '<h2>' + mhs.nama + '</h2>';
el += '<span class="nim">' + mhs.nim + '</span>';
el += '</div>';

console.log(el)

let el_literal = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nim">${mhs.nim}</span>
</div>`;

console.log(el_literal);

const nama = 'Vunky Himawan';
const umur = 19;
console.log(`Halo, perkenalkan nama saya ${nama}, saya ${umur} tahun.`);

const a = 15;
const b = 10;
// Concat
console.log('Jika a = 15 dan b = 10, maka hasil penjumlahannya adalah : ' + (a + b) + ', bukan ' + (2 * a + b));
// String literal
console.log(`Jika a = 15 dan b = 10, maka hasil penjumlahannya adalah : ${a + b}, bukan ${2 * a + b}`);
// Ternary Operator
const x = 2;
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);