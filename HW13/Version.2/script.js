const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const images = document.querySelectorAll('.slider_img');
let curActive = 0;

nextButton.addEventListener('click', () => {
        images[curActive].classList.remove('active')
        if (curActive !== images.length-1){
            curActive++;
            images[curActive].classList.add('active')
        } else if (curActive ===images.length-1) {
            curActive = 0
            images[curActive].classList.add('active')
        }
})

previousButton.addEventListener('click', () => {
        images[curActive].classList.remove('active')
        if (curActive !== 0){
            curActive--;
            images[curActive].classList.add('active')
        } else if (curActive === 0) {
            curActive = images.length-1
            images[curActive].classList.add('active')
        }
})