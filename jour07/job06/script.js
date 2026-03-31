document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {
        dist:20,
        shift:0,
        padding:10,
        indicators:true
    });
});