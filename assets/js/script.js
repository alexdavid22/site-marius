let slideIndex = 1;
afiseazaSlide(slideIndex);

function afiseazaSlide(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  
  // Ascunde toate slide-urile
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Arată slide-ul dorit
  slides[n - 1].style.display = "block";
}
