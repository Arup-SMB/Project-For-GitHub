$(".banner").owlCarousel({
    items: 1,
    autoplay:true,
    loop: true,
    dots: false,
});
$(".product").owlCarousel({
    items: 3,
    autoplay:true,
    loop: true,
    margin: 20,
    dots: false,
});

var slider = $('.owl-carousel');

$(".carousel-prev").click(function() {
    slider.trigger("prev.owl.carousel")
});

$(".carousel-next").click(function() {
    slider.trigger("next.owl.carousel")
});

$(".testimonials").owlCarousel({
    items: 1,
    autoplay:true,
    loop: true,
    margin: 20,
    dots: true,
});
// const menuToggle = document.getElementById('menu-toggle');
// const menu = document.getElementById('menu');

// menuToggle.addEventListener('click', () => {
//     menu.classList.toggle('hidden');
// });