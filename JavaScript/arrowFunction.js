// Jika parameternya 1 tidak perlu pakai kurung (implisit return)
let tampilNama = nama => `Halo ${nama}`;

console.log(tampilNama('Budi'));

// Jika parameter lebih dari 1
let salam = (nama, waktu) => {
  return `Halo ${nama}, selamat ${waktu}`;
}

console.log(salam('Adit', 'Pagi'));

// Menghitung jumlah huruf
let arr = ['Vunky Himawan', 'Adit Febrianto', 'Jarwo Subardjo'];

let jumlahHuruf = arr.map((nama) => {
  return nama.length;
});

console.log(jumlahHuruf);

// Menjadikan sebuah object (arr)
let jumlahHuruf2 = arr.map((nama) => {
  return ({
    nama: nama,
    jumlah: nama.length
  })
});

console.table(jumlahHuruf2);

// This pada Arrow Function (Arrow function tidak memiliki konsep this)