function abrirTrailer(event) {
    event.preventDefault();

    const videoSrc = event.currentTarget.getAttribute('data-video');
    const popup = document.getElementById('popup-trailer');
    const video = document.getElementById('video-trailer');

    if (videoSrc) {
        video.src = videoSrc;
        popup.classList.add('active');
        video.play();
    } else {
        console.error('Nenhum vídeo encontrado no atributo data-video');
    }
}

function fecharTrailer() {
    const popup = document.getElementById('popup-trailer');
    const video = document.getElementById('video-trailer');
    video.pause();
    video.currentTime = 0;
    popup.classList.remove('active');
}
