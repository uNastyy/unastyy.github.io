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

      if (scrolled > 80) {
        //adjust to suit your need of when transition start
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  })();

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

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true, // Pour un défilement infini
});
new fullpage('#fullpage', {
  navigation: true,
  responsiveWidth: 700,
  anchors: ['accueil', 'a-propos', 'competences', 'projets', 'contact'],
  parallax: true,
  onLeave: function(origin, destination, direction){
      console.log("Leaving section" + origin.index);
  },
});
  // initialize wow.js
  new WOW().init();
});
