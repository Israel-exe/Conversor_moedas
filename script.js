// Taxas de câmbio fixas
const taxasDeCambio = {
    BRL: { BRL: 1, USD: 0.20, EUR: 0.17, GBP: 0.15},
    USD: { BRL: 5.40, USD: 1, EUR: 0.92, GBP: 0.75},
    EUR: { BRL: 5.80, USD: 1.08, EUR: 1, GBP: 0.85},
    GBP: {  BRL: 6.88, USD: 1.34, EUR: 1.17, GBP: 1 }
};

// Capturando os elementos do HTML
const form = document.getElementById('conversor-form');
const valorInput = document.getElementById('valor');
const moedaOrigemSelect = document.getElementById('moeda-origem');
const moedaDestinoSelect = document.getElementById('moeda-destino');
const resultadoTexto = document.getElementById('resultado-texto');

// Evento que roda quando o formulário é enviado (clique no botão)
form.addEventListener('submit', function(event) {
    // Evita que a página recarregue ao submeter o formulário
    event.preventDefault();

    // Pegando os valores digitados/selecionados pelo usuário
    const valor = parseFloat(valorInput.value);
    const moedaOrigem = moedaOrigemSelect.value;
    const moedaDestino = moedaDestinoSelect.value;

    // Validação básica para valores negativos ou zero
    if (valor <= 0 || isNaN(valor)) {
        resultadoTexto.textContent = "Por favor, insira um valor válido maior que zero.";
        return;
    }

    // Buscando a taxa correta no nosso objeto de taxas fixas
    const taxa = taxasDeCambio[moedaOrigem][moedaDestino];
    
    // Realizando o cálculo de conversão
    const valorConvertido = valor * taxa;

    // Exibindo o resultado formatado na tela com duas casas decimais
    resultadoTexto.textContent = `${valor.toFixed(2)} ${moedaOrigem} = ${valorConvertido.toFixed(2)} ${moedaDestino}`;
});