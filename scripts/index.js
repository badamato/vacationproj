
//Initialize side nav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav,{});


//Initialize Carousel
$(document).ready(function(){
    var carousel_interval = 6000;

$('.carousel').carousel({
    fullWidth: true,
});

setInterval(function(){
    $('.carousel').carousel('next');
}, carousel_interval);
});


//Initialize autocomplete
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


//Initialize datepicker
// const dp = document.querySelectorAll('.datepicker');
// M.Datepicker.init(dp, {
//     showClearBtn: true,
//     container: "body"
//     }
// );

$(document).ready(function(){
    $('.modal').modal();
    $('.datepicker').datepicker({
        showClearBtn: true,
        container: 'body'
    })
  });

  
//Initialize ScrollSpy (smooth scrolling)
const ss = document.querySelectorAll('.scrollspy');
M.Scrollspy.init(ss, {});