//SLIDESHOW MARE
let slideIndex0 = 1;
let smallSlides;
let slideIndex1 = 1;
showSlides(slideIndex0);

function showSlides(n) {
  let i;
  const slides = document.querySelectorAll(".slide-mare");
  
  // Ascunde toate slide-urile
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Arată slide-ul dorit 
  slides[n - 1].style.display = "block";

  if (n===1) 
    {smallSlides = document.querySelectorAll(".slide-mic-js-1")
  } else if (n===2)
    {smallSlides= document.querySelectorAll(".slide-mic-js-2")
  };
  showSlides1(1);
}
// END SLIDESHOW MARE

//SLIDESHOW MIC 1
//let slideIndex1 = 1;
//showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function showSlides1(n) {
  let i;
  //let slides = document.querySelectorAll(".slide-mic-js-1");
  if (n > smallSlides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = smallSlides.length}
  for (i = 0; i < smallSlides.length; i++) {
    smallSlides[i].style.display = "none";
  }
  smallSlides[slideIndex1-1].style.display = "block";
}
/*
//SLIDESHOW MIC 2
let slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function showSlides2(n) {
  let i;
  let slides = document.querySelectorAll(".slide-mic-js-2");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex2-1].style.display = "block";
}
*/


