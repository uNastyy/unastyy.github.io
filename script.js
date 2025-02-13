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

document.addEventListener('DOMContentLoaded', function() {
  const popup = document.getElementById('popup');
  const popupList = document.getElementById('popup-list');
  const closePopup = document.getElementsByClassName('close-popup')[0];

  document.querySelectorAll('.open-popup').forEach(button => {
    button.addEventListener('click', function() {
      const project = this.getAttribute('data-project');
      let skills = [];

      if (project === 'palendar') {
        skills = ['Réaliser', 'Optimiser', 'Administrer', 'Gérer', 'Conduire', 'Collaborer'];
      } else if (project === 'messagerie') {
        skills = ['Réaliser', 'Gérer'];
      } else if (project === 'kitchen-wizard') {
        skills = ['Adminstrer', 'Gérer', 'Réaliser'];
      } else if (project === 'nuit-info') {
        skills = ['Réaliser', 'Optimiser', 'Administrer', 'Gérer', 'Conduire', 'Collaborer'];
      }

      popupList.innerHTML = '';
      skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        popupList.appendChild(li);
      });

      popup.style.display = 'block';
    });
  });

  closePopup.addEventListener('click', function() {
    popup.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target == popup) {
      popup.style.display = 'none';
    }
  });
});