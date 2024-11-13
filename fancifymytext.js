// Function to display the alert
function showAlert() {
    alert("Hello, world!");
}

// Increase font size function
function increaseFontSize() {
    // Get the text area element
    const textInput = document.getElementById('textInput');
    
    // Get the current font size
    const currentSize = parseFloat(window.getComputedStyle(textInput).fontSize);
    
    // Increase the font size by 2px
    textInput.style.fontSize = `${currentSize + 2}px`;
}

function radioAlert() {
    const textInput = document.getElementById('textInput');

    if (document.getElementById('fancyShmancy').checked) {
        alert("FancyShmancy style selected!");
        textInput.style.fontWeight = 'bold';
        textInput.style.color = 'blue';
        textInput.style.textDecoration = 'underline';
        textInput.style.fontFamily = 'cursive';
    } else if (document.getElementById('boringBetty').checked) {
        alert("BoringBetty style selected!")
        textInput.style.fontWeight = 'normal';
        textInput.style.color = 'black';
        textInput.style.textDecoration = 'none';
        textInput.style.fontFamily = 'Arial, sans-serif';
    }
}


function mooText() {
    const textInput = document.getElementById('textInput');
    let text = textInput.value.toUpperCase();
    
    // Split the text into sentences
    let sentences = text.split('.');

    // Add "-Moo" to the last word of each sentence
    sentences = sentences.map(sentence => {
        let words = sentence.trim().split(' ');
        if (words.length > 0 && words[0] !== '') {
            words[words.length - 1] += '-MOO';
        }
        return words.join(' ');
    });

    // Join the sentences back together, ensuring proper punctuation
    textInput.value = sentences.join('. ').trim() + '.';
}

// Display text from textarea in the output area
document.getElementById('textInput').addEventListener('input', function () {
    document.getElementById('output').innerText = this.value;
});
