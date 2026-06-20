(function () {
  function ready(callback) {
    if (document.readyState !== 'loading') {
      callback();
      return;
    }
    document.addEventListener('DOMContentLoaded', callback);
  }

  ready(function () {
    var toggle = document.querySelector('.menu-toggle');
    var mobileNav = document.querySelector('.mobile-nav');

    if (toggle && mobileNav) {
      toggle.addEventListener('click', function () {
        var isOpen = mobileNav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
      });
    }

    var slides = Array.prototype.slice.call(document.querySelectorAll('.hero-slide'));
    var dots = Array.prototype.slice.call(document.querySelectorAll('.hero-dot'));
    var prev = document.querySelector('.hero-prev');
    var next = document.querySelector('.hero-next');
    var current = 0;
    var timer = null;

    function showSlide(index) {
      if (!slides.length) {
        return;
      }
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('active', slideIndex === current);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('active', dotIndex === current);
      });
    }

    function restartTimer() {
      if (timer) {
        window.clearInterval(timer);
      }
      if (slides.length > 1) {
        timer = window.setInterval(function () {
          showSlide(current + 1);
        }, 5200);
      }
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        showSlide(Number(dot.dataset.slide || 0));
        restartTimer();
      });
    });

    if (prev) {
      prev.addEventListener('click', function () {
        showSlide(current - 1);
        restartTimer();
      });
    }

    if (next) {
      next.addEventListener('click', function () {
        showSlide(current + 1);
        restartTimer();
      });
    }

    restartTimer();

    var searchInput = document.getElementById('searchInput');
    var typeFilter = document.getElementById('typeFilter');
    var yearFilter = document.getElementById('yearFilter');
    var cards = Array.prototype.slice.call(document.querySelectorAll('.movie-card, .rank-card'));

    function applyQueryFromUrl() {
      if (!searchInput) {
        return;
      }
      var params = new URLSearchParams(window.location.search);
      var query = params.get('q');
      if (query) {
        searchInput.value = query;
      }
    }

    function filterCards() {
      var query = searchInput ? searchInput.value.trim().toLowerCase() : '';
      var typeValue = typeFilter ? typeFilter.value : '';
      var yearValue = yearFilter ? yearFilter.value : '';

      cards.forEach(function (card) {
        var searchText = (card.dataset.search || '').toLowerCase();
        var typeText = card.dataset.type || '';
        var yearText = card.dataset.year || '';
        var matched = true;

        if (query && searchText.indexOf(query) === -1) {
          matched = false;
        }
        if (typeValue && typeText !== typeValue) {
          matched = false;
        }
        if (yearValue && yearText !== yearValue) {
          matched = false;
        }

        card.hidden = !matched;
      });
    }

    applyQueryFromUrl();
    [searchInput, typeFilter, yearFilter].forEach(function (control) {
      if (control) {
        control.addEventListener('input', filterCards);
        control.addEventListener('change', filterCards);
      }
    });
    filterCards();
  });
})();
