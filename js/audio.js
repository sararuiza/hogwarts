export const startButton = document.getElementById('start');
export const title = document.getElementsByTagName('h1')[0];
const muteButton = document.getElementById('muteButton');
const bgAudio = document.getElementById('bgAudio');

startButton.style.display = 'none'
title.style.display = 'none'

/* funcion audio activated */
muteButton.addEventListener('click', function() {
    bgAudio.muted = !bgAudio.muted;
    bgAudio.muted ? muteButton.innerHTML = `<i class='bx bx-volume-mute' ></i>` : muteButton.innerHTML = `<i class='bx bx-volume-full' ></i>` 
});


/* funciopn play audio forzado */
function preload(){
    const blackBox = document.createElement('div')
    const clickHere = document.createElement('i')
    clickHere.classList.add('bx', 'bx-circle')
    blackBox.appendChild(clickHere)
    blackBox.classList.add('blackBox')
    document.body.appendChild(blackBox)
    blackBox.addEventListener('click',()=>{
        startButton.style.display = 'flex'
        title.style.display = 'flex'
        blackBox.remove()
        bgAudio.muted = false
        bgAudio.play()
    })
}
preload()