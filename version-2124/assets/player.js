
(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
      return;
    }
    document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    document.querySelectorAll('.player-card').forEach(function (card) {
      var video = card.querySelector('video');
      var button = card.querySelector('[data-play-button]');
      var hlsInstance = null;
      var loaded = false;

      function play() {
        if (!video) {
          return;
        }

        var stream = video.getAttribute('data-stream');
        if (!stream) {
          return;
        }

        if (!loaded) {
          if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = stream;
          } else if (window.Hls && window.Hls.isSupported()) {
            hlsInstance = new window.Hls({
              enableWorker: true,
              lowLatencyMode: true
            });
            hlsInstance.loadSource(stream);
            hlsInstance.attachMedia(video);
          } else {
            video.src = stream;
          }
          loaded = true;
        }

        if (button) {
          button.classList.add('is-hidden');
        }

        var promise = video.play();
        if (promise && typeof promise.catch === 'function') {
          promise.catch(function () {});
        }
      }

      if (button) {
        button.addEventListener('click', play);
      }

      if (video) {
        video.addEventListener('click', function () {
          if (video.paused) {
            play();
          }
        });
        video.addEventListener('play', function () {
          if (button) {
            button.classList.add('is-hidden');
          }
        });
        video.addEventListener('error', function () {
          if (hlsInstance) {
            hlsInstance.destroy();
            hlsInstance = null;
            loaded = false;
          }
        });
      }
    });
  });
})();
