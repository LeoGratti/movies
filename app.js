/*function toggleVideo(event) {
    event.preventDefault();

    const trigger = event.target.closet('[data-trailer]');
    const trailerName = trigger ? trigger.getAttribute('data-trailer') : null;

    if (!trailerName) {
        const openTrailer = document.querySelector(".trailer.active");
        if (openTrailer) {
            const video = openTrailer.querySelector('video');
            if (video)
                video.pause();
                openTrailer.classList.remove('active');
        }
        return;
    }

    document.querySelectorAll('.trailer').forEach(t => {
        t.classList.remove('active');
        const v = t.querySelector('video');
        if (v)
            v.pause();
    });

    const trailer = document.querySelector(`.trailer.${trailerName}`);
    if (trailer) {
        trailer.classList.add('active');
        const video = trailer.querySelector('video');
        if (video)
            video.play();
    } else {
        console.error(`Trailer não encontrado: .trailer.${trailerName}`)
    }
}*/

function changeBg(bg, titulo) {
    const bandeira = document.querySelector('.bandeira');
    const conteudos = document.querySelectorAll('.conteudo');

    bandeira.style.background = `url('./images/${bg}') center / cover no-repeat`;

    /*conteudos.forEach(conteudos => {
        conteudos.classList.toggle('active', conteudos.classList.contains(titulo));
    })*/

    conteudos.forEach(conteudo => {
        conteudo.classList.remove('active');
    });

    const ativo = Array.from(conteudos).find(c =>
        c.querySelector('.titulo-filme')?.src.includes(titulo)
    );
    if (ativo) ativo.classList.add('active');
}