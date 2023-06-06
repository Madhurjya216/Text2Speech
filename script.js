const text = document.querySelector('textarea');
const btn = document.getElementById('btn').addEventListener('click', () => {
    if(text.value == ''){
        alert('Please type something!')
    }
    let speech = new SpeechSynthesisUtterance(text.value);
    speechSynthesis.speak(speech)
})

