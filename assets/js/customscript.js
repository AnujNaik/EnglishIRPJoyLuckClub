const keys = document.querySelectorAll(".key"),
  note = document.querySelector(".nowplaying"),
  hints = document.querySelectorAll(".hints");

var songAudio1 = document.getElementById("songAudio1");
var songAudio2 = document.getElementById("songAudio2");

var buttonAudio1 = document.getElementById("song1Button");
var buttonAudio2 = document.getElementById("song2Button");

var song1Playing = false;
var song2Playing = false;


function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!key) return;

  const keyNote = key.getAttribute("data-note");

  key.classList.add("playing");
  note.innerHTML = "Current Key: " + keyNote;
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function hintsOn(e, index) {
  e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}

function playSong1() {
    if (!song1Playing){
        songAudio1.play()
        song1Playing = true;
        buttonAudio1.innerHTML = "Pause"
    } else {
        songAudio1.pause();
        song1Playing = false;
        buttonAudio1.innerHTML = "Play"
    }
    
}

function playSong2() {
    if (!song2Playing){
        songAudio2.play()
        song2Playing = true;
        buttonAudio2.innerHTML = "Pause"
    } else {
        songAudio2.pause();
        song2Playing = false;
        buttonAudio2.innerHTML = "Play"
    }
}

hints.forEach(hintsOn);

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playNote);