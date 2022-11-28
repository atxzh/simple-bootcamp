(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const form = document.querySelector('.needs-validation')

    // Loop over them and prevent submission
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
    })

})()

// Multi Item Carousel

document.querySelector('#courssesAddOnSlide>.carousel-inner').scrollLeft = 0

var carouselScrollWidth = document.querySelector('#courssesAddOnSlide>.carousel-inner').scrollWidth;

var cardWidth = Number(
    window.getComputedStyle(
        document.querySelector('#courssesAddOnSlide .carousel-item'))
        .getPropertyValue('width')
        .replace('px', '')
);

document.querySelector('#courssesAddOnSlide .carousel-control-next').addEventListener('click', () => {
    var scrollPosition = document.querySelector('#courssesAddOnSlide>.carousel-inner').scrollLeft
    if (scrollPosition < carouselScrollWidth - (cardWidth * 5)) {
        document.querySelector('#courssesAddOnSlide>.carousel-inner').scrollLeft += cardWidth;
    }
})

document.querySelector('#courssesAddOnSlide .carousel-control-prev').addEventListener('click', () => {
    var scrollPosition = document.querySelector('#courssesAddOnSlide>.carousel-inner').scrollLeft
    if (scrollPosition > 0) {
        document.querySelector('#courssesAddOnSlide>.carousel-inner').scrollLeft -= cardWidth;
    }
})