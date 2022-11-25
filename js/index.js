$(document).ready(function(){
    let arrOfImg = ["img/bakugo-hero.png", "img/bakugo-hero-2.png", "img/bakugo-hero-3.png"];
    for(var i=0 ; i< arrOfImg.length ; i++) {
        $('<div class="carousel-item"><img src="'+arrOfImg[i]+'" class="d-block w-100"></div>').appendTo('.carousel-inner');
      }
      $('.carousel-item').first().addClass('active');


    let mybutton = document.getElementById("myBtn");
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    
    $('#myBtn').on('click', function(event) {
      window.scrollTo({top: 0, behavior: 'smooth'});
    });  
});

