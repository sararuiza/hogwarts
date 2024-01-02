import { startButton, title} from './audio.js';

const bgVideo = document.getElementById('bgVideo');
const headerWindow = document.getElementsByTagName('header')[0];
export const playWindow = document.getElementById('play');

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

