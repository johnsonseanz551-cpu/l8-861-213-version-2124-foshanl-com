
(function () {
  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
      return;
    }
    document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    var input = document.getElementById('site-search-input');
    var button = document.getElementById('site-search-button');
    var results = document.getElementById('site-search-results');
    var empty = document.getElementById('site-search-empty');
    var params = new URLSearchParams(window.location.search);
    var initialQuery = params.get('q') || '';

    if (!input || !results || !empty) {
      return;
    }

    input.value = initialQuery;

    function createCard(movie) {
      var tags = (movie.tags || []).slice(0, 3).map(function (tag) {
        return '<span>' + escapeHtml(tag) + '</span>';
      }).join('');

      return '<article class="movie-card">' +
        '<a class="poster-link" href="' + escapeHtml(movie.url) + '">' +
        '<img src="' + escapeHtml(movie.cover) + '" alt="' + escapeHtml(movie.title) + '" loading="lazy">' +
        '</a>' +
        '<div class="movie-card-body">' +
        '<div class="movie-meta"><span>' + escapeHtml(movie.year) + '</span><span>' + escapeHtml(movie.type) + '</span><span>' + escapeHtml(movie.region) + '</span></div>' +
        '<h3><a href="' + escapeHtml(movie.url) + '">' + escapeHtml(movie.title) + '</a></h3>' +
        '<p>' + escapeHtml(movie.oneLine) + '</p>' +
        '<div class="tag-row">' + tags + '</div>' +
        '</div>' +
        '</article>';
    }

    function render() {
      var query = input.value.trim().toLowerCase();
      if (!query) {
        results.innerHTML = '';
        empty.textContent = '请输入关键词开始搜索';
        empty.classList.add('is-visible');
        return;
      }

      var source = window.MOVIE_INDEX || [];
      var matched = source.filter(function (movie) {
        return movie.searchText.indexOf(query) !== -1;
      }).slice(0, 96);

      results.innerHTML = matched.map(createCard).join('');
      empty.textContent = matched.length ? '' : '没有匹配的影片';
      empty.classList.toggle('is-visible', matched.length === 0);
    }

    input.addEventListener('input', render);
    if (button) {
      button.addEventListener('click', render);
    }
    render();
  });
})();
