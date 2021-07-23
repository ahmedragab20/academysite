const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("go");
  } else {
    toTop.classList.remove("go");
  }
});
// the scroll effect
ScrollReveal().reveal(".sec-1");
ScrollReveal().reveal(".image");
ScrollReveal().reveal(".content");
ScrollReveal().reveal(".info");
ScrollReveal().reveal(".testimonial");
ScrollReveal().reveal(".col");
ScrollReveal().reveal(".pricing");
ScrollReveal().reveal(".card");
ScrollReveal().reveal(".subscribe");
ScrollReveal().reveal(".footer");
