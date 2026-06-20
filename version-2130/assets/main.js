document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector(".mobile-toggle");
    var panel = document.querySelector(".mobile-panel");

    if (toggle && panel) {
        toggle.addEventListener("click", function () {
            var isOpen = panel.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

    var hero = document.querySelector("[data-hero]");

    if (hero) {
        var slides = Array.prototype.slice.call(hero.querySelectorAll(".hero-slide"));
        var dots = Array.prototype.slice.call(hero.querySelectorAll(".hero-dot"));
        var current = 0;

        function showSlide(index) {
            current = (index + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle("is-active", slideIndex === current);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle("is-active", dotIndex === current);
            });
        }

        dots.forEach(function (dot, index) {
            dot.addEventListener("click", function () {
                showSlide(index);
            });
        });

        if (slides.length > 1) {
            setInterval(function () {
                showSlide(current + 1);
            }, 5600);
        }
    }

    var filterScope = document.querySelector("[data-filter-scope]");

    if (filterScope) {
        var input = filterScope.querySelector("[data-card-search]");
        var chips = Array.prototype.slice.call(filterScope.querySelectorAll("[data-filter-type]"));
        var cards = Array.prototype.slice.call(document.querySelectorAll("[data-card-list] .movie-card"));
        var activeType = "全部";

        function normalize(value) {
            return String(value || "").toLowerCase().trim();
        }

        function updateCards() {
            var keyword = normalize(input ? input.value : "");
            cards.forEach(function (card) {
                var search = normalize(card.getAttribute("data-search"));
                var type = card.getAttribute("data-type") || "";
                var typeMatch = activeType === "全部" || type === activeType || search.indexOf(activeType.toLowerCase()) !== -1;
                var keywordMatch = !keyword || search.indexOf(keyword) !== -1;
                card.classList.toggle("is-hidden-by-filter", !typeMatch || !keywordMatch);
            });
        }

        if (input) {
            input.addEventListener("input", updateCards);
        }

        chips.forEach(function (chip) {
            chip.addEventListener("click", function () {
                activeType = chip.getAttribute("data-filter-type") || "全部";
                chips.forEach(function (item) {
                    item.classList.toggle("is-active", item === chip);
                });
                updateCards();
            });
        });
    }
});
