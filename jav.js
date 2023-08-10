// Variável para armazenar o valor atual do display
let displayValue = '';

// Função para atualizar o valor exibido no display
function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

// Função para adicionar um valor ao display
function appendToDisplay(value) {
    // Evita a inserção de múltiplos pontos decimais
    if (value === '.' && displayValue.includes('.')) {
        return;
    }
    displayValue += value;
    updateDisplay();
}

// Função para limpar o display
function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

// Função para calcular e exibir o resultado
function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Erro';
        updateDisplay();
    }
}

// Função para lidar com operações
function handleOperation(operation) {
    // Remove o último operador antes de adicionar um novo
    if (displayValue.endsWith('+') || displayValue.endsWith('-') ||
        displayValue.endsWith('*') || displayValue.endsWith('/')) {
        displayValue = displayValue.slice(0, -1);
    }
    appendToDisplay(operation);
}