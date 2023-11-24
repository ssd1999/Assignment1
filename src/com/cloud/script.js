let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function appendCharacter(char) {
    display.value += char;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}