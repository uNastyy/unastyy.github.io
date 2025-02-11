$(document).ready(function () {
  // typing animation
  (function ($) {
    $.fn.writeText = function (content) {
      var contentArray = content.split(""),
        current = 0,
        elem = this;
      setInterval(function () {
        if (current < contentArray.length) {
          elem.text(elem.text() + contentArray[current++]);
        }
      }, 80);
    };
  })(jQuery);

  // input text for typing animation
  $("#holder").writeText("Etudiant en informatique");

  // Code pour changer la classe active des liens de la navbar en fonction de la section visible
  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".bottom-nav a");

    function changeActiveLink() {
      let index = sections.length;

      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    }

    changeActiveLink();
    window.addEventListener("scroll", changeActiveLink);
  });

  // initialize wow.js
  new WOW().init();
});