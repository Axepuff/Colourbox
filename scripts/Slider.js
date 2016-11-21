let slider = document.querySelector('.feature-item-slider');
let btnPrev = document.querySelector('.arrow-prev');
let btnNext = document.querySelector('.arrow-next');
let perfoText = document.querySelector('.perfo-text');
let drillText = document.querySelector('.drill-text');


btnPrev.addEventListener('click', function () {
    slider.classList.remove('drill');
    drillText.classList.remove('active-text');
    perfoText.classList.add('active-text');
});

btnNext.addEventListener('click', function () {
    slider.classList.add('drill');
    perfoText.classList.remove('active-text');
    drillText.classList.add('active-text');
});

