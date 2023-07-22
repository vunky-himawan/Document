// Closure

// Cara 1
function init() {
  let nama = 'Adit';
  function tampilNama() {
    console.log(nama);
  }
  tampilNama();
}
init();

// Cara 2
function init2() {
  function tampilNama(nama) {
    console.log(nama);
  }
  return tampilNama;
}

let x = init2();
x('Adit');

// Cara 3
function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
  }
}

let selamatPagi = ucapkanSalam('Pagi');
selamatPagi('Adit');

// Cara 4
let counter1 = 0;
let add1 = function () {
  return ++counter1;
}

console.log(add1());
console.log(add1());

counter1 = 10; // Problem

console.log(add1());
console.log(add1());


// Cara 5 
let add2 = function () {
  let counter = 0;
  return ++counter;
}

console.log(add2());
console.log(add2());

counter = 100;

console.log(add2());
console.log(add2());

// Output 1 1 1 1 

// Cara 6
let add3 = function () {
  let counter = 0;
  return function () {
    return ++counter;
  }
}

let y = add3();

console.log(y());
console.log(y());
console.log(y());
console.log(y());

// Cara 7 Immediately Invoke Function
let add4 = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  }
})();

console.log(add4());
console.log(add4());
console.log(add4());
console.log(add4());
console.log(add4());