document.addEventListener('DOMContentLoaded', function () {

    let display = document.getElementById('display');
    let buttons = document.querySelectorAll('.button');


    buttons.forEach(button => {
        button.addEventListener('click', function () {
            handleButtonClick(button.textContent);
        });
    });

    function handleButtonClick(value) {
        switch (value) {
            case 'C':
                clearDisplay();
                break;
            case '←':
                removeLastChar();
                break;
            case '=':
                calculate();
                break;
            default:
                appendToDisplay(value);
        }
    }

    function appendToDisplay(value) {
        display.textContent += value;
    }


    function clearDisplay() {
        display.textContent = '';
    }


    function removeLastChar() {
        display.textContent = display.textContent.slice(0, -1);
    }

    function calculate() {
        try {
            display.textContent = eval(display.textContent);
        } catch (error) {
            display.textContent = 'Error';
        }
    }
});
