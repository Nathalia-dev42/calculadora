let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    if (currentInput === '') return;  // Não permite inserir um operador sem um número antes
    currentInput += operator;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();  // Usando eval para calcular a expressão
        display.value = currentInput;
    } catch (error) {
        display.value = 'Erro';
        currentInput = '';
    }
}
