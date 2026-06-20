(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready(function () {
    var video = document.getElementById('movieVideo');
    var overlay = document.getElementById('playOverlay');
    var configNode = document.getElementById('player-config');
    var hlsInstance = null;
    var stream = '';

    if (!video || !configNode) {
      return;
    }

    try {
      stream = JSON.parse(configNode.textContent).stream || '';
    } catch (error) {
      stream = '';
    }

    function attach() {
      if (!stream) {
        return;
      }

      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        if (video.src !== stream) {
          video.src = stream;
        }
        return;
      }

      if (window.Hls && window.Hls.isSupported()) {
        if (!hlsInstance) {
          hlsInstance = new window.Hls({
            enableWorker: true,
            lowLatencyMode: true,
            backBufferLength: 90
          });
          hlsInstance.loadSource(stream);
          hlsInstance.attachMedia(video);
        }
        return;
      }

      if (video.src !== stream) {
        video.src = stream;
      }
    }

    function play() {
      attach();

      if (overlay) {
        overlay.classList.add('hidden');
      }

      var result = video.play();

      if (result && typeof result.catch === 'function') {
        result.catch(function () {
          if (overlay) {
            overlay.classList.remove('hidden');
          }
        });
      }
    }

    if (overlay) {
      overlay.addEventListener('click', play);
    }

    video.addEventListener('click', function () {
      if (video.paused) {
        play();
      }
    });

    video.addEventListener('play', function () {
      if (overlay) {
        overlay.classList.add('hidden');
      }
    });

    video.addEventListener('pause', function () {
      if (overlay && video.currentTime === 0) {
        overlay.classList.remove('hidden');
      }
    });
  });
})();
