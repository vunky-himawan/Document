const list = [...document.querySelectorAll('[data-duration]')];

const newList = list.filter(a => a.innerHTML.match("JAVASCRIPT LANJUTAN"))
  .map(a => a.getAttribute('data-duration'))
  .map(a => {
    const duration = a.split(':').map(part => parseFloat(part));
    return (duration[0] * 60) + duration[1];
  })
  .reduce((acc, current) => acc + current);

const jam = Math.floor(newList / 3600);
const menit = Math.floor((newList - jam * 3600) / 60);
const detik = (newList - jam * 3600) - menit * 60;

const totalDuration = document.querySelector('.total-durasi');
totalDuration.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;
const totalVideo = document.querySelector('.jumlah-video');
totalVideo.textContent = `${list.filter(a => a.innerHTML.match("JAVASCRIPT LANJUTAN")).length} Video`

console.log(detik);