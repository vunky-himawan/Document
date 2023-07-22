const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

const newAngka1 = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    newAngka1.push(angka[i]);
  }
}

console.log(newAngka1);

const newAngka2 = angka.filter(a => a >= 3);

console.log(newAngka2);

const newAngka3 = angka.map(a => a * 2);

console.log(newAngka3);

const newAngka4 = angka.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(newAngka4);

const hasil = angka.filter(a => a > 5).map(a => a * 3).reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(hasil)