const bgAudio = document.getElementById('bgAudio');
const bgVideo = document.getElementById('bgVideo');
const muteButton = document.getElementById('muteButton');
const startButton = document.getElementById('start');
const title = document.getElementsByTagName('h1')[0];
const headerWindow = document.getElementsByTagName('header')[0];
const playWindow = document.getElementById('play');

/* FUncion boton start */
startButton.addEventListener('click',()=>{
    bgVideo.style.animation = 'big-zoom 3s ease-out forwards'
    title.style.animation = 'big-zoom 1s ease-out forwards';
    startButton.style.animation = 'big-zoom 1s ease-out forwards';
    playWindow.style.display = 'flex'
    setTimeout(()=>{
        headerWindow.style.display = 'none';
        playWindow.style.zIndex = 20;
        playWindow.classList.add('appear')
    },3000)
})


/* funcion audio activated */
muteButton.addEventListener('click', function() {
    bgAudio.muted = !bgAudio.muted;
    bgAudio.muted ? muteButton.innerHTML = `<i class='bx bx-volume-mute' ></i>` : muteButton.innerHTML = `<i class='bx bx-volume-full' ></i>` 
});