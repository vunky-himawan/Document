const nama = 'Vunky Himawan';
const umur = 19;

function coba(strings, ...args) {
  /* let result = '';
  strings.forEach((str, i) => {
    result += `${str}${args[i] || ''}`
  })
  return result; */

  return strings.reduce((result, str, i) => `${result}${str}${args[i] || ''}`, '');
};

const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun`;
console.log(str);

const nama2 = 'Fitria Nur Sholikah'
const umur2 = 19;

function highligth(strings, ...args) {
  return strings.reduce((result, str, i) => `${result}${str}${`<span class='hl'>${args[i] || ''}</span>`}`, '');
}

const str2 = highligth`Halo, nama saya ${nama2}, saya ${umur2} tahun`;

document.body.innerHTML = str2;