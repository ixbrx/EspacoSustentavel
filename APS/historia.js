document.addEventListener('DOMContentLoaded', function () {
    // Menu toggle
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
    
    
    
    // Gráfico de Emissões por Foguetes
    const ctx1 = document.getElementById('graficoFoguetes').getContext('2d');
    if (ctx1) {
        const graficoFoguetes = new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: ['Saturno V', 'Ônibus espacial', 'Falcon 9'],
                datasets: [{
                    label: 'Emissões de CO₂ (toneladas)',
                    data: [15000, 2000, 500], // Dados atualizados com emissões reais
                    backgroundColor: ['rgba(52, 152, 219, 0.8)', 'rgba(231, 76, 60, 0.8)', 'rgba(46, 204, 113, 0.8)']
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Gráfico de Linha para Emissões ao longo do Tempo
    const ctx2 = document.getElementById('graficoEmissoes').getContext('2d');
    if (ctx2) {
        const graficoEmissoes = new Chart(ctx2, {
            type: 'line',
            data: {
                labels: ['1970', '1980', '1990', '2000', '2010', '2020'], 
                datasets: [
                    {
                        label: 'Apollo 11 (Saturno V)',
                        data: [15000, 15000, 0, 0, 0, 0], 
                        borderColor: 'rgba(255, 99, 132, 1)',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        fill: true
                    },
                    {
                        label: 'Ônibus Espacial',
                        data: [0, 0, 2000, 2000, 2000, 0], // Emissões do Ônibus Espacial
                        borderColor: 'rgba(54, 162, 235, 1)',
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        fill: true
                    },
                    {
                        label: 'Falcon 9',
                        data: [0, 0, 0, 0, 500, 500], 
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Emissões de CO₂ (toneladas)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Ano'
                        }
                    }
                }
            }
        });
    }
});
