
<<<<<<< HEAD
=======

>>>>>>> badamato/csstwerks
//Initialize side nav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav,{});


//Initialize Carousel
$(document).ready(function(){
    var carousel_interval = 6000;
<<<<<<< HEAD
=======

>>>>>>> badamato/csstwerks
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

<<<<<<< HEAD
//Initialize datepicker
  $(document).ready(function () {
    $('.datepicker').pickadate({
      closeOnSelect: true,
      format: "dd/mm/yyyy"
    });
  });


=======

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

  
>>>>>>> badamato/csstwerks
//Initialize ScrollSpy (smooth scrolling)
const ss = document.querySelectorAll('.scrollspy');
M.Scrollspy.init(ss, {});