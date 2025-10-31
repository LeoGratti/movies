function toggleVideo(){
    const trailer = document.querySelector('.trailer');
    trailer.classList.toggle('active');
}

function toggleVideo(event) {
    if (!event) {
        console.error("Evento não passado para a função toggleVideo");
        return;
    }

    const trailerName = event.target.getAttribute('data-trailer');
    const trailer = document.querySelector(`.trailer.${trailerName}`);
    if (!trailer) {
        console.error("Elemento .trailer não encontrado");
        return;
    }

    const video = trailer.querySelector('video');
    if (!video) {
        console.error("Elemento video não encontrado dentro do trailer");
        return;
    }

    if (trailer.classList.toggle('active')) {
        video.pause();
    } else {
        video.play();
    }

    trailer.classList.toggle('active');
}


function changeBg(bg, titulo) {
    const conteudos = document.querySelectorAll('.conteudo');

    document.getElementsByClassName('bandeira')[0].style.background = `url("./images/${bg}")`
    document.getElementsByClassName('bandeira')[0].style.backgroundSize = 'cover'
    document.getElementsByClassName('bandeira')[0].style.backgroundPosition = 'center'

    conteudos.forEach(conteudo => {
        conteudo.classList.remove('active');
        if (conteudo.classList.contains(titulo)) {
            conteudo.classList.add('active');
        }
    });
}

