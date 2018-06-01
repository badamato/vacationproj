
//Side nav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav,{});


//Carousel
$(document).ready(function(){
    var carousel_interval = 8000;
$('.carousel').carousel({
    fullWidth: true
});

setInterval(function(){
    $('.carousel').carousel('next');
}, carousel_interval);
});

//Autocomplete
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
        "Italy": null,
        "Venice": null,
        "Florence": null,
        "Kansas": null,
        "Atlanta": null,
        "Florida": null,
        "Switzerland": null,
        "Europe": null
    }

});