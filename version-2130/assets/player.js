function initPlayer(source) {
    var video = document.getElementById("movieVideo");
    var playButton = document.getElementById("posterPlay");
    var hlsInstance = null;
    var loaded = false;

    if (!video || !source) {
        return;
    }

    function attachSource() {
        if (loaded) {
            return;
        }

        loaded = true;

        if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = source;
            return;
        }

        if (window.Hls && window.Hls.isSupported()) {
            hlsInstance = new Hls({
                enableWorker: true,
                lowLatencyMode: true,
                backBufferLength: 90
            });
            hlsInstance.loadSource(source);
            hlsInstance.attachMedia(video);
            return;
        }

        video.src = source;
    }

    function startPlayback() {
        attachSource();

        if (playButton) {
            playButton.classList.add("is-hidden");
        }

        var playPromise = video.play();

        if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(function () {
                if (playButton) {
                    playButton.classList.remove("is-hidden");
                }
            });
        }
    }

    if (playButton) {
        playButton.addEventListener("click", startPlayback);
    }

    video.addEventListener("click", function () {
        if (video.paused) {
            startPlayback();
        }
    });

    video.addEventListener("play", function () {
        if (playButton) {
            playButton.classList.add("is-hidden");
        }
    });

    video.addEventListener("pause", function () {
        if (playButton && !video.ended) {
            playButton.classList.remove("is-hidden");
        }
    });

    window.addEventListener("pagehide", function () {
        if (hlsInstance) {
            hlsInstance.destroy();
            hlsInstance = null;
        }
    });
}
