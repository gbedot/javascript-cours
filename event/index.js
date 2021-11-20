const btn = document.querySelector('#btn');
const img = document.getElementById('monimage');

console.log('ici');

btn.addEventListener('click', () => {
    console.log(img);
    monimage.classList.toggle('show')
})