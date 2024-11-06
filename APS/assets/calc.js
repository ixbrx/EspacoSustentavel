// script.js

document.getElementById('menu-toggle').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('hidden'); // Adiciona ou remove a classe 'hidden'
    
    // Alterna a classe para mostrar/ocultar o menu
    if (!navbar.classList.contains('hidden')) {
        navbar.classList.add('visible'); // Adiciona a classe para mostrar
    } else {
        navbar.classList.remove('visible'); // Remove a classe para ocultar
    }
});

// Lógica para calcular as emissões
document.getElementById('calculadora-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    const combustivel = document.getElementById('combustivel').value;
    const quantidade = parseFloat(document.getElementById('quantidade').value);
    const lancamentos = parseInt(document.getElementById('lancamentos').value);

    // Fatores de emissão (em kg de CO₂ por kg de combustível)
    const fatores_emissao = {
        "RP-1": 3.15,
        "Hidrogênio Líquido": 0,  // LH2 não emite CO₂ diretamente
        "Metano": 2.75,
        "Combustível Sólido": 2.7
    };

    // Obter o fator de emissão para o combustível escolhido
    const fator_emissao = fatores_emissao[combustivel] || 0;

    // Calcular as emissões totais (em kg de CO₂)
    const emissoes_totais = quantidade * fator_emissao * lancamentos; // kg
    const emissoes_totais_ton = emissoes_totais / 1000; // Convertendo para toneladas

    // Supondo que 1 crédito de carbono = 1 tonelada de CO₂
    const creditos_carbono = emissoes_totais_ton;

    // Exibir os resultados
    document.getElementById('emissoes').innerText = `Emissões totais de CO₂: ${emissoes_totais_ton.toFixed(2)} toneladas`;
    document.getElementById('creditos').innerText = `Créditos de carbono necessários: ${creditos_carbono.toFixed(2)} créditos de carbono.`;
    document.getElementById('resultado').style.display = 'block';
});

document.getElementById('calculadora-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    const formData = new FormData(this);

    fetch('/calcular', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('emissoes').innerText = `Emissões totais de CO₂: ${data.emissoes_totais.toFixed(2)} toneladas`;
        document.getElementById('creditos').innerText = `Créditos de carbono necessários: ${data.creditos_carbono.toFixed(2)} créditos de carbono.`;
        document.getElementById('resultado').style.display = 'block';
    })
    .catch(error => console.error('Erro:', error));
});
