
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
  $(document).ready(function () {
    $('.datepicker').pickadate({
      closeOnSelect: true,
      format: "dd/mm/yyyy"
    });
  });


//Initialize ScrollSpy (smooth scrolling)
const ss = document.querySelectorAll('.scrollspy');
M.Scrollspy.init(ss, {});