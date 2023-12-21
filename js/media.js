const bgAudio = document.getElementById('bgAudio');
const bgVideo = document.getElementById('bgVideo');
const muteButton = document.getElementById('muteButton');
const startButton = document.getElementById('play');
const title = document.getElementsByTagName('h1')[0]

startButton.addEventListener('click',()=>{
    bgVideo.style.animation = 'big-zoom 3s ease-out forwards'
    title.style.animation = 'big-zoom 1s ease-out forwards';
    startButton.style.animation = 'big-zoom 1s ease-out forwards';
})

muteButton.addEventListener('click', function() {
    bgAudio.muted = !bgAudio.muted;
    bgAudio.muted ? muteButton.innerHTML = `<i class='bx bx-volume-mute' ></i>` : muteButton.innerHTML = `<i class='bx bx-volume-full' ></i>` 
});