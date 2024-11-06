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
