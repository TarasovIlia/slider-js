//alert ("simple slider");

let offset = 0;
const sliderLine = document.querySelector('.slider_line');

document.querySelector('.next_button').addEventListener('click', function() {
    offset = offset + 400;
    if (offset > 800) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.prev_button').addEventListener('click', function() {
    offset = offset - 400;
    if (offset < 0) {
        offset = 800;
    }
    sliderLine.style.left = -offset + 'px';
});