console.log("welcome to spotify")
let songs = [ new Audio('Kesariya.mp3' , 'Machayenge 4.mp3' , )]
let audioElement = new Audio('Kesariya.mp3');
let masterPlay = document.getElementById('masterPlay');
let player= document.getElementById('playerbar');
let gif= document.getElementById('gif');



//handle pause and play
masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused|| audioElement.currentTime <=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;    
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
    }
)
//progress bar change

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    player.value = progress;
    
})