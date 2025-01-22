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

  (function () {
    "use strict";

    const navbar = document.querySelector(".banner-text");

    document.addEventListener("scroll", (e) => {
      const scrolled = document.scrollingElement.scrollTop;

      if (scrolled > 80) { //adjust to suit your need of when transition start
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  })();

  // initialize wow.js
  new WOW().init();
});