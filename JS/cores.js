
// Função para gerar uma cor aleatória da paleta especificada
function getRandomColorFromPalette() {
    let palette = [
        '#9914FF', // Roxo
        '#4900E6', // Roxo mais claro
        '#BB5B01', // Laranja
        '#FFD700'  // Amarelo
    ];
    let randomIndex = Math.floor(Math.random() * palette.length);
    return palette[randomIndex];
}

// Função para atualizar a cor do h1 a cada 1 segundo
function changeHeadingColor() {
    let heading = document.getElementById('mudacor');
    setInterval(function() {
        let newColor = getRandomColorFromPalette();
        heading.style.color = newColor;
    }, 1000);
}

// Chamar a função para iniciar a mudança de cor
changeHeadingColor();
