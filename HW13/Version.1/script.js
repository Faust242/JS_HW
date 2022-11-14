const previousButton = document.querySelector('#previous');
const nextButton = document.querySelector('#next');
const image = document.querySelector('.slider_img');

let numberOfPictures = 4
let currentSlide = 1;
nextButton.addEventListener('click', (e) => {
    e.preventDefault;
    ++currentSlide;
    if (currentSlide > numberOfPictures){
        currentSlide=1;
    }
    image.setAttribute('src',`./img/${currentSlide}.jpeg`)
})

previousButton.addEventListener('click', (e) => {
    e.preventDefault;
    --currentSlide;
    if (currentSlide < 1){
        currentSlide=4;
    }
    image.setAttribute('src',`./img/${currentSlide}.jpeg`)
})