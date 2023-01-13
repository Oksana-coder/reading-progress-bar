const parags = document.querySelectorAll("article p");
let firstFourParags = [];
for (let i = 1; i < 5; i++) {
    firstFourParags.push(parags[i]);
}
let textArr = [];
firstFourParags.forEach(p => textArr.push(p.innerText));
const textToSpeak = textArr.join('\n');
console.log("textToSpeak: ", textToSpeak);

const playPauseBtn = document.getElementById("playPauseBtn");

const playText = document.getElementById("play-text");
const pauseText = document.getElementById("pause-text");
const soundIcon = document.getElementById("sound-icon");
const pauseIcon = document.getElementById("pause-icon");

const synth = window.speechSynthesis;
let isPaused = true;

function setListenToArticleBtn() {
    soundIcon.style.display = "block";
    pauseIcon.style.display = "none";
    playText.style.display = "inline-block";
    pauseText.style.display = "none";
}

function setPauseArticleBtn() {
    soundIcon.style.display = "none";
    pauseIcon.style.display = "block";
    playText.style.display = "none";
    pauseText.style.display = "inline-block";
}

function textToSpeech(text) {
    let utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.lang = 'de-De';
    const voices = synth.getVoices();
    console.log("voices: ", voices);
    synth.speak(utterance);
    utterance.addEventListener("end", () => {
        synth.cancel();
        setListenToArticleBtn();
    })
}

playPauseBtn.addEventListener("click", () => {
    if (textToSpeak !== "") {
        if (!synth.speaking) {
            textToSpeech(textToSpeak);
            setPauseArticleBtn();
        }

        if (isPaused) {
            synth.resume();
            isPaused = false;
            setPauseArticleBtn();
        } else {
            synth.pause();
            isPaused = true;
            setListenToArticleBtn();
        }
    }
});

