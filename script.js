document.addEventListener('DOMContentLoaded', function () {
    const textToRead = document.getElementById('textToRead');
    const voiceSelect = document.getElementById('voiceSelect');
    const readButton = document.getElementById('readButton');

    let voices = [];

    // Fetch the available voices and populate the dropdown
    function populateVoiceList() {
        voices = window.speechSynthesis.getVoices();
        voiceSelect.innerHTML = '';

        voices.forEach(function (voice, index) {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = voice.name + ' (' + voice.lang + ')';
            voiceSelect.appendChild(option);
        });
    }

    populateVoiceList();

    // Update the list when voices change
    window.speechSynthesis.onvoiceschanged = function () {
        populateVoiceList();
    };

    readButton.addEventListener('click', function () {
        const text = "Hello" + textToRead.value + " this is shivam sharma and i wish you a very heppy diwali " +" may the festival of lights bring warmth happiness and abundance of life";
        if (text !== '') {
            const selectedVoiceIndex = voiceSelect.value;
            speakText(text, selectedVoiceIndex);
        }
    });

    function speakText(text, voiceIndex) {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);

        // Set the selected voice
        utterance.voice = voices[voiceIndex];

        synth.speak(utterance);
    }
});
