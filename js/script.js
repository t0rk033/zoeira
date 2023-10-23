const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const btn = document.querySelector('.btn')
const popup = document.getElementById('meuPopup');
const fecharPopup = document.getElementById('fecharPopup');

const time = setInterval(function data(){
    let datetoday = new Date();

    let tHours = datetoday.getHours();
    let tSeconds = datetoday.getSeconds();
    let tMinutes = datetoday.getMinutes();
    
    hours.textContent = tHours
    minutes.textContent = tMinutes
    seconds.textContent = tSeconds


})

btn.addEventListener('click', function() {
  popup.style.display = 'block';
});

fecharPopup.addEventListener('click', function() {
  popup.style.display = 'none';
});