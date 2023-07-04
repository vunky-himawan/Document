// Membuat Object Pada JavaScript
// 1. Object Literal

let mahasiswa1 = {
  nama: 'Budi',
  energi: 10,
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Hallo ${this.nama}, selamat makan!`);
  }
};

let mahasiswa2 = {
  nama: 'Joni',
  energi: 20,
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Hallo ${this.nama}, selamat makan!`);
  }
};

// 2. Function Declaration

function Mahasiswa3(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  mahasiswa.makan = function (porsi) {
    this.energi += energi;
    console.log(`Hallo ${this.nama}, selamat makan!`);
  }

  return mahasiswa;
}

let budi = Mahasiswa3('Budi', 10);
let adit = Mahasiswa3('Adit', 20);

// 3. Constructor Function

function Mahasiswa4(nama, energi) {
  this.nama = nama;
  this.energi = energi;
  this.makan = function (porsi) {
    this.energi += energi;
    console.log(`Hallo ${this.nama}, selamat makan`);
  }
}

let adam = new Mahasiswa4('Adam', 10);


// 4. Object Create()

const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Hallo ${this.nama}, Selamat makan!`);
  },

  main: function (jam) {
    this.energi -= jam;
    console.log(`Hallo ${this.nama}, Selamat bermain!`);
  },

  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`Hallo ${this.nama}, Selamat tidur!`);
  }
}

function Mahasiswa5(nama, energi) {
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  return mahasiswa;
}

let adi = Mahasiswa5('Adi', 10);