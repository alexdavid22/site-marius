let slideIndex = 1;
afiseazaSlide(slideIndex);


function afiseazaSlide(n) {
  let i;
  const slides = document.querySelectorAll(".slide");
  
  // Ascunde toate slide-urile
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Arată slide-ul dorit 
  slides[n - 1].style.display = "block";
}

let slideNumber = 1;
afiseazaSlideMic1(1);

function afiseazaSlideMic1(n) {
  let i;
  const slideMic = document.querySelectorAll(".slideshowMic1");

  // Ascunde toate slide-urile mici
  for (i = 0; i < slideMic.length; i++) {
    slideMic[i].style.display = "none";
  }

  // Ajustează indexul slide-ului mic în funcție de direcție
  slideNumber += n;

  // Asigură-te că indexul se află în limitele array-ului de slide-uri mici
  if (slideNumber > slideMic.length) {
    slideNumber = 1;
  } else if (slideNumber < 1) {
    slideNumber = slideMic.length;
  }

  // Arată slide-ul mic dorit
  slideMic[slideNumber - 1].style.display = "block";
}


let slideNumber2 = 1;
afiseazaSlideMic2(1);

function afiseazaSlideMic2(n) {
  let i;
  const slideMic = document.querySelectorAll(".slideshowMic2");

  // Ascunde toate slide-urile mici
  for (i = 0; i < slideMic.length; i++) {
    slideMic[i].style.display = "none";
  }

  // Ajustează indexul slide-ului mic în funcție de direcție
  slideNumber2 += n;

  // Asigură-te că indexul se află în limitele array-ului de slide-uri mici
  if (slideNumber2 > slideMic.length) {
    slideNumber2 = 1;
  } else if (slideNumber2 < 1) {
    slideNumber2 = slideMic.length;
  }

  // Arată slide-ul mic dorit
  slideMic[slideNumber2 - 1].style.display = "block";
}
