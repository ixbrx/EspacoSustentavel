// Seleciona todos os cards
const cards = document.querySelectorAll('.card');

// Modal
const modal = document.querySelector('.modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close');

// Informações detalhadas de cada iniciativa
const details = {
    reflorestamento: {
        title: "Reflorestamento e Agroflorestas",
        description: "Projetos de reflorestamento ajudam a restaurar áreas devastadas pelo desmatamento. Essas iniciativas são vitais para a recuperação de ecossistemas e também absorvem grandes quantidades de CO2 da atmosfera, o que auxilia na mitigação dos efeitos das mudanças climáticas."
    },
    ccs: {
        title: "Captura de Carbono e Armazenamento (CCS)",
        description: "A tecnologia de Captura e Armazenamento de Carbono (CCS) retira CO2 diretamente das emissões de indústrias pesadas, armazenando-o em locais subterrâneos para evitar que ele atinja a atmosfera, reduzindo significativamente as emissões globais."
    },
    "energia-renovavel": {
        title: "Energia Renovável",
        description: "Investir em energia renovável como solar, eólica e hidroelétrica para instalações espaciais reduz a dependência de combustíveis fósseis, diminuindo a pegada de carbono do setor espacial."
    },
    "compensacao-lancamentos": {
        title: "Compensação de Emissões de Lançamentos",
        description: "Parcerias com iniciativas de compensação de carbono que investem em energia limpa e reflorestamento ajudam a neutralizar as emissões geradas durante lançamentos espaciais, criando um impacto ambiental positivo."
    },
    "tecnologias-sustentaveis": {
        title: "Tecnologias de Lançamento Sustentável",
        description: "O desenvolvimento de foguetes mais eficientes, utilizando combustíveis mais limpos ou propulsionados por tecnologias alternativas, tem o potencial de reduzir diretamente as emissões da indústria espacial."
    },
    monitoramento: {
        title: "Iniciativas de Monitoramento Ambiental",
        description: "Satélites são usados",
    },
}

// script.js
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('hidden'); // Adiciona ou remove a classe 'hidden'
    if (!navbar.classList.contains('hidden')) {
        navbar.style.left = '0'; // Mostra o menu ao lado da tela
    } else {
        navbar.style.left = '-250px'; // Oculte o menu fora da tela
    }
});

