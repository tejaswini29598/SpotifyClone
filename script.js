console.log("Welcome to Spotify");
let songIndex=0;
let audioElement =new Audio('songs/01.mp3');
let masterPlay =document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems =Array.from(document.getElementsByClassName('songItem'));
let songs =[
    {songName:"Konte-Chuputho",filePath:"songs/01.mp3",coverPath:"covers/image.jpg"},
    {songName:"ullasam",filePath:"songs/Ullasam.mp3",coverPath:"covers/Saripodha.jpg"},
    {songName:"Channa-Mereya",filePath:"songs/Channa Mereya - Arijit Singh(Pagalourld.in).mp3",coverPath:"covers/ChannaMereya.jpg"},
    {songName:"Monna-Kanipinchavu",filePath:"songs/04 - Monna Kanipinchavu - SenSongsMp3.co.mp3",coverPath:"covers/MonnaKanipinchavu.jpg"},
]
songItems.forEach((element,i) =>{
    //console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
// handle play/pause clicks
masterPlay.addEventListener('click',() =>{
 if(audioElement.paused || audioElement.currentTime <=0){
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
     gif.style.opacity = 1;
 }
else{
     audioElement.pause();
     masterPlay.classList.remove('fa-pause-circle');
     masterPlay.classList.add('fa-play-circle');
      gif.style.opacity = 0;
}
})
//listen to events
audioElement.addEventListener('timeupdate',() =>{
 //update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value =progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays =()=>{
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
   })
} 
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click',(e) =>{
        //console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-cirlce');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>4){
        songIndex=0;
    }
    else{
    songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
    songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})