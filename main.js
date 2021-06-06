// JavaScript Document


//select element function


const selectElement = function (element) {
  return document.querySelector(element);

};

let menuToggler = selectElement('.nav');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
  body.classList.toggle('open');


});


//Scroll reveal


var sr = function ScrollReveal() {

  sr.reveal('.animate-left', {

    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
  });


  sr.reveal('.animate-right', {

    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
  });


  sr.reveal('.animate-top', {

    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
  });


  sr.reveal('.animate-bottom', {

    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
  });

}
//portfolio display

var $ = (function () {
  var selectedClass = "";
  $(".fil-cat").click(function () {
    selectedClass = $(this).attr("data-rel");
    $(".port-display").fadeTo(100, 0.1);
    $(".port-display div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function () {
      $("." + selectedClass).fadeIn().addClass('scale-anm');
      $(".port-display").fadeTo(300, 1);
    }, 300);

  });
});


//carousel

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//buttons
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

//counter

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//burron listeners

nextBtn.addEventListener('click', () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.7s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {

  if (carouselImages[counter].id === 'last-clone') {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  if (carouselImages[counter].id === 'first-clone') {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }


});
