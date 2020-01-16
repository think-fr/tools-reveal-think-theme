// trick to detect reverse and apply it
function manipulateHeader() {

    let currentSlide = document.getElementsByClassName('present').item(0);
    if (currentSlide.classList.contains('reverse') || currentSlide.classList.contains('title')) {
        console.log('switching slide header');
        document.getElementById('slide-header').className = "reverse";
    }
    else if (currentSlide.classList.contains('think')) {
        console.log('hidding slide header');
        document.getElementById('slide-header').className = "hidden";
    } else {
        document.getElementById('slide-header').className = '';
    }
}
function manipulateFooter(){
    let currentSlide = document.getElementsByClassName('present').item(0);
    if (currentSlide.classList.contains('title')) {
        document.getElementById('slide-footer').className = '';
    }
    else {
        console.log('hidding slide footer');
        document.getElementById('slide-footer').className = "hidden";
    }
}

// in case we miss ready event
setTimeout(function(){
    manipulateHeader();
    manipulateFooter();

}, 500)
Reveal.addEventListener('ready', function (event) {
    console.log('reveal is ready');
    manipulateHeader();
    manipulateFooter();
});

Reveal.addEventListener('slidechanged', function (event) {
    manipulateHeader();
    manipulateFooter();
});
