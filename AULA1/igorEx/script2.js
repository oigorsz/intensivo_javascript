const audio = window.document.getElementById("audio_chapter");
const seekBar = document.getElementById("audio_seek_bar");
const buttonPlayPause = window.document.getElementById("button_play_pause");
const buttonLeft = window.document.getElementById("button_left");
const buttonRight = window.document.getElementById("button_right");
const chapterName = window.document.getElementById("chapter_name");
const maxChapter = 10;
let chapter = 1;
let control = false;

function playSong(){
    console.log("play");
    audio.play();
    control = true;

    buttonPlayPause.classList.remove("bi-play-circle")
    buttonPlayPause.classList.add("bi-pause-circle")
}

function pauseSong(){
    console.log("pause");
    audio.pause();
    control = false;

    buttonPlayPause.classList.remove("bi-pause-circle")
    buttonPlayPause.classList.add("bi-play-circle")
}

function playOrPause(){
    if(control == false){
        playSong();
    } else {
        pauseSong();
    }
}

function nextChapter(){
    if(chapter < maxChapter){
        chapter++;
    } else {
        chapter = 1;
    }

    chapterName.innerText = "Cápitulo " + chapter;
    audio.src = "./books/dom-casmurro/" + chapter + ".mp3";
    playSong();
}

function previousChapter(){
    if(chapter == 1){
        chapter = maxChapter;
    } else {
        chapter--;
    }

    chapterName.innerText = "Cápitulo " + chapter;
    audio.src = "./books/dom-casmurro/" + chapter + ".mp3";
    pauseSong();
}

function calculatePosition(){
    const newPosition = audio.duration * seekBar.value/100;
    audio.currentTime = newPosition;
}

function timeUptade(){
    const newPosition = (audio.currentTime / audio.duration) * 100;
    seekBar.value = newPosition;
    
}


buttonPlayPause.addEventListener("click", playOrPause);
buttonLeft.addEventListener("click", previousChapter);
buttonRight.addEventListener("click", nextChapter);
audio.addEventListener("ended", nextChapter);
audio.addEventListener("timeupdate", timeUptade)
seekBar.addEventListener("input", calculatePosition );

