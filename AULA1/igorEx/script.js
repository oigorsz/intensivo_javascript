/*
const audio = window.document.getElementById("audio_chapter");
const buttonPlayPause = window.document.getElementById("button_play_pause");
const buttonRight = window.document.getElementById("button_rigth");
const buttonLeft = window.document.getElementById("button_left");
const nameChapter = window.document.getElementById("chapter_name");
const maxChapter = 10;
let chapter = 1;
let control = false;


function playSong (){
    console.log("play");
    audio.play();
    buttonPlayPause.classList.remove("bi-play-circle");
    buttonPlayPause.classList.add("bi-pause-circle");
    control = true;
}

function pauseSong(){
    console.log("pause");
    audio.pause();
    buttonPlayPause.classList.remove("bi-pause-circle");
    buttonPlayPause.classList.add("bi-play-circle")
    control = false;
}

function playOrPause(){
    if(control == false){
        playSong();
    } else {
        pauseSong();
    }
}

function nextChapter(){
    console.log("next");
    if(chapter < maxChapter){
        chapter++;
    } else {
        chapter = 1; //reseta o ciclo
    }

    nameChapter.innerHTML = "Cápitulo " + chapter;
    audio.src = "./books/dom-casmurro/" + chapter + ".mp3"
    playSong();
}

function previousChapter(){
    console.log("previous");
    if(chapter === 1){
        chapter = maxChapter;
    } else {
        chapter--;
    }

    nameChapter.innerHTML = "Cápitulo " + chapter;
    audio.src = "./books/dom-casmurro/" + chapter + ".mp3";
    playSong();

}

buttonPlayPause.addEventListener("click", playOrPause);
buttonRight.addEventListener("click", nextChapter);
buttonLeft.addEventListener("click", previousChapter);
audio.addEventListener("ended", nextChapter);

*/