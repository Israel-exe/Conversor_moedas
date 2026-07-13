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