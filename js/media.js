let bgAudio = document.getElementById('bgAudio');
let muteButton = document.getElementById('muteButton');

document.addEventListener('DOMContentLoaded', function() {
    // pagina cargada
    console.log('pagina cargada');
    bgAudio.muted = true;
});

muteButton.addEventListener('click', function() {
    bgAudio.muted = !bgAudio.muted;
    bgAudio.muted ? muteButton.innerHTML = `<i class='bx bx-volume-mute' ></i>` : muteButton.innerHTML = `<i class='bx bx-volume-full' ></i>` 
});