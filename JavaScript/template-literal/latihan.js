const mhs = [
  {
    nama: 'Vunky Himawan',
    nim: '2241720005'
  },
  {
    nama: 'Anang',
    nim: '2241720006'
  },
  {
    nama: 'Fitria',
    nim: '2241720007'
  }
];

const el = `<div class="mhs">
${mhs.map(mhs => `<ul>
<li>Nama : ${mhs.nama}</li>
<li>NIM : ${mhs.nim}</li>
</ul>`).join('')}
</div>`;

document.body.innerHTML = el;

const lagu = {
  judul: 'Tetap Dalam Jiwa',
  penyanyi: 'Isyana Sarasvati',
  feat: 'Budi Sidamang'
}

const el2 = `<div class="lagu">
<ul>
<li>Judul Lagu: ${lagu.judul}</li>
<li>Penyanyi: ${lagu.penyanyi + `${(lagu.feat) ? ` ft. ${lagu.feat}` : ``}`}</li>
</ul>
</div>`;

document.body.innerHTML = el2;

const mhs2 = {
  nama: 'Vunky Himawan',
  nim: '2241720005',
  semester: 2,
  matkul: [
    'Basis Data',
    'Praktikum Basis Data',
    'Algoritma & Struktur Data',
    'Praktikum Algoritma & Struktur Data']
};

function cetakMatakuliah(matkul) {
  return `
    <ol>
      ${matkul.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
  `
}

const el3 = `<div class="mhs2">
<h2>Nama : ${mhs2.nama}</h2>
<h2>NIM : ${mhs2.nim}</h2>
<h3>Semester : ${mhs2.semester}</h3>
<h4>Mata Kuliah</h4>
${cetakMatakuliah(mhs2.matkul)}
</div>`;

document.body.innerHTML = el3;