// Menggunakan Prorotype
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Hallo ${this.nama}, selamat makan`;
}

let budi = new Mahasiswa('Budi', 10);

// Menggunakan Class
class Karyawan {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `hallo ${this.nama}, selamat makan!`;
  }
}

let adit = new Karyawan('Adit', 10);