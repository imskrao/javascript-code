const msg = new SpeechSynthesisUtterance();
const speak = document.querySelector('#speak')
const inputText = document.querySelector('#text')

speechSynthesis.addEventListener('voiceschanged', function() {
    const voices = this.getVoices()
    msg.voice = voices.find(voice => voice.name === 'Google हिन्दी');
})

speak.addEventListener('click', () => {
    msg.text = inputText.value
    window.speechSynthesis.speak(msg)
})