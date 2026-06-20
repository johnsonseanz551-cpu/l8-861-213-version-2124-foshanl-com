(function () {
    function initMoviePlayer(source) {
        var video = document.getElementById('movie-player');
        var overlay = document.querySelector('[data-player-overlay]');
        var startButton = document.querySelector('[data-player-start]');
        var attached = false;
        var hls = null;

        if (!video || !source) {
            return;
        }

        function attachSource() {
            if (attached) {
                return;
            }
            attached = true;
            if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = source;
            } else if (window.Hls && window.Hls.isSupported()) {
                hls = new Hls({ enableWorker: true });
                hls.loadSource(source);
                hls.attachMedia(video);
            } else {
                video.src = source;
            }
        }

        function playNow() {
            attachSource();
            if (overlay) {
                overlay.classList.add('is-hidden');
            }
            video.controls = true;
            var playPromise = video.play();
            if (playPromise && typeof playPromise.catch === 'function') {
                playPromise.catch(function () {
                    if (overlay) {
                        overlay.classList.remove('is-hidden');
                    }
                });
            }
        }

        if (overlay) {
            overlay.addEventListener('click', playNow);
        }
        if (startButton) {
            startButton.addEventListener('click', function (event) {
                event.stopPropagation();
                playNow();
            });
        }
        video.addEventListener('click', function () {
            if (video.paused) {
                playNow();
            }
        });
        window.addEventListener('pagehide', function () {
            if (hls) {
                hls.destroy();
                hls = null;
            }
        });
    }

    window.initMoviePlayer = initMoviePlayer;
}());
