const audio = new Audio();
const tracksCard = document.getElementsByClassName('track');
const player = document.querySelector('.player');
const pauseBtn = document.querySelector('.player__controller-pause');
const stopBtn = document.querySelector('.player__controller-stop');

const playMusic = (event) => {
    const trackActive = event.currentTarget

    audio.src = trackActive.dataset.track;
    audio.play();
    pauseBtn.classList.remove('player__controller-play');
    player.classList.add('player_active');

    for (let i = 0; i < tracksCard.length; i++) {
        tracksCard[i].classList.remove('track_active');
    };

    trackActive.classList.add('track_active');

    stopBtn.addEventListener('click', () => {
        trackActive.classList.remove('track_active');
    });
}

for (let i = 0; i < tracksCard.length; i++) {
    tracksCard[i].addEventListener('click', playMusic);
};

pauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        pauseBtn.classList.remove('player__controller-play');
    } else {
        audio.pause();
        pauseBtn.classList.add('player__controller-play');
    }
});

stopBtn.addEventListener('click', () => {
    // ! скрыть player и удалить из src трек
    audio.pause();
    player.classList.remove('player_active');
    audio.src = '';
});
