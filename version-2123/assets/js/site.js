(function () {
  function selectAll(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  function text(value) {
    return String(value || "").toLowerCase().trim();
  }

  function initMenu() {
    var button = document.querySelector("[data-menu-button]");
    var menu = document.querySelector("[data-mobile-menu]");
    if (!button || !menu) {
      return;
    }
    button.addEventListener("click", function () {
      menu.classList.toggle("is-open");
    });
  }

  function initHero() {
    selectAll("[data-hero]").forEach(function (hero) {
      var slides = selectAll("[data-hero-slide]", hero);
      var dots = selectAll("[data-hero-dot]", hero);
      var prev = hero.querySelector("[data-hero-prev]");
      var next = hero.querySelector("[data-hero-next]");
      var index = 0;
      if (!slides.length) {
        return;
      }
      function show(nextIndex) {
        index = (nextIndex + slides.length) % slides.length;
        slides.forEach(function (slide, slideIndex) {
          slide.classList.toggle("is-active", slideIndex === index);
        });
        dots.forEach(function (dot, dotIndex) {
          dot.classList.toggle("is-active", dotIndex === index);
        });
      }
      if (prev) {
        prev.addEventListener("click", function () {
          show(index - 1);
        });
      }
      if (next) {
        next.addEventListener("click", function () {
          show(index + 1);
        });
      }
      dots.forEach(function (dot, dotIndex) {
        dot.addEventListener("click", function () {
          show(dotIndex);
        });
      });
      window.setInterval(function () {
        show(index + 1);
      }, 5200);
    });
  }

  function initFilters() {
    selectAll("[data-filter-grid]").forEach(function (grid) {
      var section = grid.closest("section") || document;
      var search = section.querySelector("[data-filter-search]");
      var type = section.querySelector("[data-filter-type]");
      var region = section.querySelector("[data-filter-region]");
      var category = section.querySelector("[data-filter-category]");
      var cards = selectAll(".movie-card, .rank-row", grid);
      function apply() {
        var query = text(search && search.value);
        var wantedType = text(type && type.value);
        var wantedRegion = text(region && region.value);
        var wantedCategory = text(category && category.value);
        cards.forEach(function (card) {
          var haystack = text([
            card.getAttribute("data-title"),
            card.getAttribute("data-year"),
            card.getAttribute("data-region"),
            card.getAttribute("data-type"),
            card.getAttribute("data-genre"),
            card.getAttribute("data-category"),
            card.textContent
          ].join(" "));
          var ok = true;
          if (query && haystack.indexOf(query) === -1) {
            ok = false;
          }
          if (wantedType && text(card.getAttribute("data-type")).indexOf(wantedType) === -1) {
            ok = false;
          }
          if (wantedRegion && text(card.getAttribute("data-region")).indexOf(wantedRegion) === -1) {
            ok = false;
          }
          if (wantedCategory && text(card.getAttribute("data-category")).indexOf(wantedCategory) === -1) {
            ok = false;
          }
          card.hidden = !ok;
        });
      }
      [search, type, region, category].forEach(function (control) {
        if (!control) {
          return;
        }
        control.addEventListener("input", apply);
        control.addEventListener("change", apply);
      });
      if (grid.hasAttribute("data-search-page")) {
        var params = new URLSearchParams(window.location.search);
        var query = params.get("q") || "";
        var input = document.querySelector("[data-search-page-input]") || search;
        if (input && query) {
          input.value = query;
        }
        if (search && query) {
          search.value = query;
        }
      }
      apply();
    });
  }

  function startVideo(video, stream) {
    if (!video || !stream) {
      return;
    }
    if (video.getAttribute("data-ready") === "1") {
      video.play().catch(function () {});
      return;
    }
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = stream;
      video.setAttribute("data-ready", "1");
      video.play().catch(function () {});
      return;
    }
    if (window.Hls && window.Hls.isSupported()) {
      var hls = new window.Hls({ enableWorker: true });
      hls.loadSource(stream);
      hls.attachMedia(video);
      hls.on(window.Hls.Events.MANIFEST_PARSED, function () {
        video.setAttribute("data-ready", "1");
        video.play().catch(function () {});
      });
      video.hlsController = hls;
      return;
    }
    video.src = stream;
    video.setAttribute("data-ready", "1");
    video.play().catch(function () {});
  }

  function initPlayers() {
    selectAll("[data-player]").forEach(function (player) {
      var button = player.querySelector("[data-stream]");
      if (!button) {
        return;
      }
      var video = document.getElementById(button.getAttribute("data-video"));
      var stream = button.getAttribute("data-stream");
      button.addEventListener("click", function (event) {
        event.preventDefault();
        button.classList.add("is-hidden");
        startVideo(video, stream);
      });
      if (video) {
        video.addEventListener("click", function () {
          if (video.getAttribute("data-ready") !== "1") {
            button.classList.add("is-hidden");
            startVideo(video, stream);
            return;
          }
          if (video.paused) {
            video.play().catch(function () {});
          }
        });
      }
    });
  }

  initMenu();
  initHero();
  initFilters();
  initPlayers();
})();
