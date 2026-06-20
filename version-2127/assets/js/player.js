(function () {
  function ready(callback) {
    if (document.readyState !== 'loading') {
      callback();
      return;
    }
    document.addEventListener('DOMContentLoaded', callback);
  }

  function loadHls(callback) {
    if (window.Hls) {
      callback();
      return;
    }

    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/hls.js@1/dist/hls.min.js';
    script.onload = callback;
    document.head.appendChild(script);
  }

  ready(function () {
    Array.prototype.slice.call(document.querySelectorAll('.player-shell')).forEach(function (shell) {
      var video = shell.querySelector('video');
      var overlay = shell.querySelector('.play-overlay');
      var stream = shell.dataset.stream;
      var initialized = false;

      function beginPlayback() {
        if (!video || !stream) {
          return;
        }

        var playVideo = function () {
          var promise = video.play();
          if (promise && typeof promise.catch === 'function') {
            promise.catch(function () {});
          }
          shell.classList.add('playing');
        };

        if (initialized) {
          playVideo();
          return;
        }

        initialized = true;

        if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = stream;
          video.addEventListener('loadedmetadata', playVideo, { once: true });
          video.load();
          return;
        }

        loadHls(function () {
          if (window.Hls && window.Hls.isSupported()) {
            var hls = new window.Hls({ enableWorker: true });
            hls.loadSource(stream);
            hls.attachMedia(video);
            hls.on(window.Hls.Events.MANIFEST_PARSED, playVideo);
          } else {
            video.src = stream;
            video.addEventListener('loadedmetadata', playVideo, { once: true });
            video.load();
          }
        });
      }

      if (overlay) {
        overlay.addEventListener('click', beginPlayback);
      }

      if (video) {
        video.addEventListener('click', function () {
          if (!initialized || video.paused) {
            beginPlayback();
          }
        });
        video.addEventListener('play', function () {
          shell.classList.add('playing');
        });
        video.addEventListener('pause', function () {
          if (!video.ended) {
            shell.classList.remove('playing');
          }
        });
      }
    });
  });
})();
