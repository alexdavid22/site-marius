//SLIDESHOW MARE
let smallSlidesSum;
let curentSmallSlide = 1;
slideshowMare(1);

function slideshowMare(n) {
  let i;
  const slides = document.querySelectorAll(".slide-mare");
  // Ascunde toate slide-urile
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Arată slide-ul dorit 
  slides[n - 1].style.display = "block";

  if (n===1) 
    {smallSlidesSum = document.querySelectorAll(".slide-mic-js-1")
  } else if (n===2)
    {smallSlidesSum= document.querySelectorAll(".slide-mic-js-2")
  };
  slideshowMic(1);
}
// END SLIDESHOW MARE

// Next/previous controls
function slideshowMicNavigation(n) {
  slideshowMic(curentSmallSlide += n);
}

function slideshowMic(n) {
  let i;
  if (n > smallSlidesSum.length) {curentSmallSlide = 1}
  if (n < 1) {curentSmallSlide = smallSlidesSum.length}
  for (i = 0; i < smallSlidesSum.length; i++) {
    smallSlidesSum[i].style.display = "none";
  }
  smallSlidesSum[curentSmallSlide - 1].style.display = "block";
}

