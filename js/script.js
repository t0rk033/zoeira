const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const btn = document.querySelector('.btn')
const popup = document.getElementById('meuPopup');
const fecharPopup = document.getElementById('fecharPopup');
const main = document.querySelector('.main-container')

const time = setInterval(function data(){
    let datetoday = new Date();

    let tHours = datetoday.getHours();
    let tSeconds = datetoday.getSeconds();
    let tMinutes = datetoday.getMinutes();
    
    hours.textContent = tHours
    minutes.textContent = tMinutes
    seconds.textContent = tSeconds

    
    
    if(tHours >= 18 && tHours <= 23 ){
        main.style.backgroundImage = 'url(../img/img_noite.jpg)'
    }
    else if(tHours >= 12 && tHours < 18){
        main.style.backgroundImage = 'url(../img/img_tarde.jpg)'
    }
})



btn.addEventListener('click', function() {
   popup.style.display = 'block';
 });

 fecharPopup.addEventListener('click', function() {
   popup.style.display = 'none';
 });