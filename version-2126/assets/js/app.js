(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready(function () {
    var toggle = document.querySelector('.menu-toggle');
    var mobileNav = document.querySelector('.mobile-nav');

    if (toggle && mobileNav) {
      toggle.addEventListener('click', function () {
        var open = mobileNav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    var carousel = document.querySelector('.hero-carousel');

    if (carousel) {
      var slides = Array.prototype.slice.call(carousel.querySelectorAll('.hero-slide'));
      var dots = Array.prototype.slice.call(carousel.querySelectorAll('.hero-dot'));
      var prev = carousel.querySelector('.hero-prev');
      var next = carousel.querySelector('.hero-next');
      var index = 0;
      var timer;

      function show(nextIndex) {
        if (!slides.length) {
          return;
        }

        index = (nextIndex + slides.length) % slides.length;

        slides.forEach(function (slide, i) {
          slide.classList.toggle('active', i === index);
        });

        dots.forEach(function (dot, i) {
          dot.classList.toggle('active', i === index);
        });
      }

      function startTimer() {
        window.clearInterval(timer);
        timer = window.setInterval(function () {
          show(index + 1);
        }, 5200);
      }

      if (prev) {
        prev.addEventListener('click', function () {
          show(index - 1);
          startTimer();
        });
      }

      if (next) {
        next.addEventListener('click', function () {
          show(index + 1);
          startTimer();
        });
      }

      dots.forEach(function (dot, i) {
        dot.addEventListener('click', function () {
          show(i);
          startTimer();
        });
      });

      startTimer();
    }

    var inputs = Array.prototype.slice.call(document.querySelectorAll('.site-search'));
    var cards = Array.prototype.slice.call(document.querySelectorAll('.search-scope .movie-card, .search-scope .rank-item'));

    function applySearch(value) {
      var query = value.trim().toLowerCase();

      cards.forEach(function (card) {
        var haystack = [
          card.getAttribute('data-title') || '',
          card.getAttribute('data-genre') || '',
          card.getAttribute('data-tags') || '',
          card.getAttribute('data-year') || '',
          card.getAttribute('data-region') || '',
          card.textContent || ''
        ].join(' ').toLowerCase();

        card.classList.toggle('hidden-by-search', query && haystack.indexOf(query) === -1);
      });
    }

    inputs.forEach(function (input) {
      input.addEventListener('input', function () {
        applySearch(input.value);
      });
    });

    var chips = Array.prototype.slice.call(document.querySelectorAll('.filter-chip'));

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var value = chip.getAttribute('data-filter') || 'all';

        chips.forEach(function (item) {
          item.classList.toggle('active', item === chip);
        });

        cards.forEach(function (card) {
          var genre = card.getAttribute('data-genre') || '';
          var tags = card.getAttribute('data-tags') || '';
          var matched = value === 'all' || genre.indexOf(value) !== -1 || tags.indexOf(value) !== -1;
          card.classList.toggle('hidden-by-filter', !matched);
        });
      });
    });
  });
})();
