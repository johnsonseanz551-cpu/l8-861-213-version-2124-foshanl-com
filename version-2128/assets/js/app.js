
(function () {
  var currentScript = document.currentScript;
  var hlsModuleUrl = currentScript && currentScript.src ? new URL('video-hls.mjs', currentScript.src).href : './assets/js/video-hls.mjs';

  function selectAll(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  function setupNavigation() {
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.querySelector('.mobile-nav');
    if (!toggle || !menu) {
      return;
    }
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  function setupHero() {
    var hero = document.querySelector('[data-hero]');
    if (!hero) {
      return;
    }
    var slides = selectAll('.hero-slide', hero);
    var dots = selectAll('.hero-dot', hero);
    var prev = hero.querySelector('.hero-control.prev');
    var next = hero.querySelector('.hero-control.next');
    var index = 0;
    var timer = null;

    function show(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach(function (slide, position) {
        slide.classList.toggle('active', position === index);
      });
      dots.forEach(function (dot, position) {
        dot.classList.toggle('active', position === index);
      });
    }

    function restart() {
      window.clearInterval(timer);
      timer = window.setInterval(function () {
        show(index + 1);
      }, 5200);
    }

    if (prev) {
      prev.addEventListener('click', function () {
        show(index - 1);
        restart();
      });
    }
    if (next) {
      next.addEventListener('click', function () {
        show(index + 1);
        restart();
      });
    }
    dots.forEach(function (dot, position) {
      dot.addEventListener('click', function () {
        show(position);
        restart();
      });
    });
    restart();
  }

  function setupRows() {
    selectAll('[data-scroll-target]').forEach(function (button) {
      button.addEventListener('click', function () {
        var row = document.getElementById(button.getAttribute('data-scroll-target'));
        if (!row) {
          return;
        }
        var direction = button.classList.contains('scroll-left') ? -1 : 1;
        row.scrollBy({ left: direction * Math.round(row.clientWidth * 0.85), behavior: 'smooth' });
      });
    });
  }

  function setupCardFilters() {
    var panel = document.querySelector('[data-filter-panel]');
    var container = document.querySelector('[data-card-container]');
    if (!panel || !container) {
      return;
    }
    var search = panel.querySelector('[data-card-search]');
    var sort = panel.querySelector('[data-card-sort]');
    var buttons = selectAll('[data-filter-genre]', panel);
    var activeGenre = 'all';

    function cardText(card) {
      return [
        card.dataset.title,
        card.dataset.year,
        card.dataset.region,
        card.dataset.genre,
        card.dataset.type,
        card.textContent
      ].join(' ').toLowerCase();
    }

    function apply() {
      var query = search ? search.value.trim().toLowerCase() : '';
      var cards = selectAll('.movie-card', container);
      cards.forEach(function (card) {
        var genreMatch = activeGenre === 'all' || (card.dataset.genre || '').indexOf(activeGenre) !== -1;
        var searchMatch = !query || cardText(card).indexOf(query) !== -1;
        card.classList.toggle('is-hidden', !(genreMatch && searchMatch));
      });
      if (sort) {
        var sorted = cards.slice().sort(function (a, b) {
          if (sort.value === 'year') {
            return Number(b.dataset.year.match(/\d{4}/) || 0) - Number(a.dataset.year.match(/\d{4}/) || 0);
          }
          if (sort.value === 'rating') {
            return Number(b.querySelector('.score-badge').textContent) - Number(a.querySelector('.score-badge').textContent);
          }
          if (sort.value === 'title') {
            return (a.dataset.title || '').localeCompare(b.dataset.title || '', 'zh-Hans-CN');
          }
          return 0;
        });
        sorted.forEach(function (card) {
          container.appendChild(card);
        });
      }
    }

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        activeGenre = button.getAttribute('data-filter-genre') || 'all';
        buttons.forEach(function (item) {
          item.classList.toggle('active', item === button);
        });
        apply();
      });
    });
    if (search) {
      search.addEventListener('input', apply);
    }
    if (sort) {
      sort.addEventListener('change', apply);
    }
  }

  function setupGlobalSearch() {
    var form = document.querySelector('[data-global-search]');
    var resultBox = document.querySelector('[data-search-results]');
    if (!form || !resultBox || !window.catalogData && typeof catalogData === 'undefined') {
      return;
    }
    var source = window.catalogData || catalogData;
    var input = form.querySelector('input[name="q"]');
    var typeButtons = selectAll('[data-global-type]');
    var activeType = 'all';

    function getInitialQuery() {
      var params = new URLSearchParams(window.location.search);
      return params.get('q') || '';
    }

    function createCard(movie) {
      var tags = (movie.tags || []).slice(0, 4).map(function (tag) {
        return '<span>' + escapeHtml(tag) + '</span>';
      }).join('');
      return '<article class="movie-card">' +
        '<a class="poster-link" href="' + movie.url + '" aria-label="观看' + escapeHtml(movie.title) + '">' +
        '<img src="' + movie.cover + '" alt="' + escapeHtml(movie.title) + '" loading="lazy">' +
        '<span class="score-badge">' + Number(movie.rating).toFixed(1) + '</span>' +
        '<span class="play-chip">播放</span>' +
        '</a>' +
        '<div class="movie-card-body">' +
        '<div class="card-meta"><span>' + escapeHtml(movie.year) + '</span><span>' + escapeHtml(movie.region) + '</span></div>' +
        '<h2><a href="' + movie.url + '">' + escapeHtml(movie.title) + '</a></h2>' +
        '<p>' + escapeHtml(movie.description) + '</p>' +
        '<div class="tag-row">' + tags + '</div>' +
        '</div>' +
        '</article>';
    }

    function escapeHtml(value) {
      return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    function matches(movie, query) {
      if (activeType !== 'all' && String(movie.type).indexOf(activeType) === -1) {
        return false;
      }
      if (!query) {
        return true;
      }
      var haystack = [
        movie.title,
        movie.year,
        movie.region,
        movie.type,
        movie.genre,
        movie.category,
        movie.description,
        (movie.tags || []).join(' ')
      ].join(' ').toLowerCase();
      return haystack.indexOf(query.toLowerCase()) !== -1;
    }

    function render() {
      var query = input.value.trim();
      var results = source.filter(function (movie) {
        return matches(movie, query);
      }).slice(0, 120);
      resultBox.innerHTML = results.map(createCard).join('');
    }

    var initial = getInitialQuery();
    if (initial) {
      input.value = initial;
      render();
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      render();
    });
    input.addEventListener('input', render);
    typeButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        activeType = button.getAttribute('data-global-type') || 'all';
        typeButtons.forEach(function (item) {
          item.classList.toggle('active', item === button);
        });
        render();
      });
    });
  }

  function setupPlayers() {
    selectAll('[data-player]').forEach(function (frame) {
      var video = frame.querySelector('video');
      var overlay = frame.querySelector('.player-overlay');
      var status = frame.querySelector('.player-status');
      if (!video || !overlay) {
        return;
      }
      var started = false;
      var source = video.getAttribute('data-source');

      function setStatus(text) {
        if (status) {
          status.textContent = text || '';
        }
      }

      function beginPlayback() {
        overlay.classList.add('hidden');
        var playPromise = video.play();
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(function () {
            overlay.classList.remove('hidden');
          });
        }
      }

      function attachWithModule() {
        return import(hlsModuleUrl).then(function (module) {
          var Hls = module.H;
          if (Hls && Hls.isSupported()) {
            var hls = new Hls({ enableWorker: true, lowLatencyMode: true });
            hls.loadSource(source);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function () {
              setStatus('');
              beginPlayback();
            });
            hls.on(Hls.Events.ERROR, function () {
              setStatus('播放源连接中');
            });
            return;
          }
          video.src = source;
          beginPlayback();
        }).catch(function () {
          video.src = source;
          beginPlayback();
        });
      }

      function start() {
        if (!source) {
          setStatus('播放源暂时不可用');
          return;
        }
        if (started) {
          beginPlayback();
          return;
        }
        started = true;
        setStatus('播放准备中');
        if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = source;
          beginPlayback();
        } else {
          attachWithModule();
        }
      }

      overlay.addEventListener('click', start);
      video.addEventListener('click', function () {
        if (!started) {
          start();
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setupNavigation();
    setupHero();
    setupRows();
    setupCardFilters();
    setupGlobalSearch();
    setupPlayers();
  });
})();
