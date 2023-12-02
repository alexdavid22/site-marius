let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let slideTexts = document.getElementsByClassName("slide-text");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Ascunde toate slide-urile
        slideTexts[i].style.display = "none"; // Ascunde toate div-urile cu descrieri
    }

    slides[slideIndex - 1].style.display = "block"; // Afișează slide-ul curent
    slideTexts[slideIndex - 1].style.display = "block"; // Afișează div-ul cu descrierea corespunzătoare
}

document.querySelector(".prev").addEventListener("click", function() {
    plusSlides(-1);
});

document.querySelector(".next").addEventListener("click", function() {
    plusSlides(1);
});
