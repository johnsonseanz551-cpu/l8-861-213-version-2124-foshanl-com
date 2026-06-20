(function () {
    var navToggle = document.querySelector('[data-menu-toggle]');
    var navLinks = document.querySelector('[data-nav-links]');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.toggle('is-open');
        });
    }

    var hero = document.querySelector('[data-hero]');

    if (hero) {
        var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
        var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
        var activeIndex = 0;

        function showSlide(index) {
            if (!slides.length) {
                return;
            }

            activeIndex = (index + slides.length) % slides.length;

            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle('is-active', slideIndex === activeIndex);
            });

            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle('is-active', dotIndex === activeIndex);
            });
        }

        dots.forEach(function (dot, dotIndex) {
            dot.addEventListener('click', function () {
                showSlide(dotIndex);
            });
        });

        showSlide(0);

        if (slides.length > 1) {
            window.setInterval(function () {
                showSlide(activeIndex + 1);
            }, 5200);
        }
    }

    function normalizeText(value) {
        return String(value || '').toLowerCase().trim();
    }

    function setupSearch(scope) {
        var input = scope.querySelector('[data-search-input]');
        var select = scope.querySelector('[data-filter-select]');
        var cards = Array.prototype.slice.call(scope.querySelectorAll('[data-card]'));
        var empty = scope.querySelector('[data-empty-state]');

        if (!cards.length) {
            return;
        }

        function applyFilter() {
            var query = normalizeText(input ? input.value : '');
            var category = select ? select.value : '';
            var shown = 0;

            cards.forEach(function (card) {
                var content = normalizeText([
                    card.getAttribute('data-title'),
                    card.getAttribute('data-region'),
                    card.getAttribute('data-genre'),
                    card.getAttribute('data-tags'),
                    card.getAttribute('data-year')
                ].join(' '));
                var cardCategory = card.getAttribute('data-category') || '';
                var matchesText = !query || content.indexOf(query) !== -1;
                var matchesCategory = !category || category === cardCategory;
                var visible = matchesText && matchesCategory;

                card.style.display = visible ? '' : 'none';

                if (visible) {
                    shown += 1;
                }
            });

            if (empty) {
                empty.classList.toggle('is-visible', shown === 0);
            }
        }

        if (input) {
            input.addEventListener('input', applyFilter);
        }

        if (select) {
            select.addEventListener('change', applyFilter);
        }

        applyFilter();
    }

    Array.prototype.slice.call(document.querySelectorAll('[data-search-scope]')).forEach(setupSearch);

    Array.prototype.slice.call(document.querySelectorAll('[data-header-search]')).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            var field = form.querySelector('input');
            var query = field ? field.value.trim() : '';

            if (!query) {
                event.preventDefault();
                return;
            }

            form.action = './movies.html';
            form.method = 'get';
        });
    });

    var params = new URLSearchParams(window.location.search);
    var q = params.get('q');

    if (q) {
        var pageSearch = document.querySelector('[data-search-input]');

        if (pageSearch) {
            pageSearch.value = q;
            pageSearch.dispatchEvent(new Event('input'));
        }
    }

    var video = document.querySelector('[data-player-video]');
    var cover = document.querySelector('[data-play-cover]');
    var trigger = document.querySelector('[data-play-button]');
    var hlsInstance = null;
    var streamLoaded = false;

    function loadStream() {
        if (!video || streamLoaded) {
            return;
        }

        var stream = video.getAttribute('data-stream');

        if (!stream) {
            return;
        }

        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = stream;
        } else if (window.Hls && window.Hls.isSupported()) {
            hlsInstance = new window.Hls({
                maxBufferLength: 30,
                enableWorker: true
            });
            hlsInstance.loadSource(stream);
            hlsInstance.attachMedia(video);
        } else {
            video.src = stream;
        }

        streamLoaded = true;
    }

    function startPlayer() {
        if (!video) {
            return;
        }

        loadStream();

        if (cover) {
            cover.classList.add('is-hidden');
        }

        var playPromise = video.play();

        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(function () {});
        }
    }

    if (trigger) {
        trigger.addEventListener('click', startPlayer);
    }

    if (cover) {
        cover.addEventListener('click', startPlayer);
    }

    if (video) {
        video.addEventListener('click', function () {
            if (video.paused) {
                startPlayer();
            }
        });

        video.addEventListener('play', function () {
            if (cover) {
                cover.classList.add('is-hidden');
            }
        });
    }
})();
