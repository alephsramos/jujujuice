let currentIndex = 1; // Índice inicial do elemento central

function updateDisplay() {
    const cards = document.querySelectorAll('.card-produtos');
    cards.forEach((card, index) => {
        card.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        card.style.opacity = '0.1';
        card.style.transform = 'scale(1)';
        card.style.display = 'none';
    });

    const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
    const nextIndex = (currentIndex + 1) % cards.length;

    cards[prevIndex].classList.remove('next');
    cards[prevIndex].classList.add('previous');
    cards[prevIndex].style.display = 'flex';
    cards[prevIndex].style.opacity = '0.2';
    cards[prevIndex].style.transform = 'scale(1)';

    cards[currentIndex].classList.remove('previous', 'next');
    cards[currentIndex].classList.add('active');
    cards[currentIndex].style.display = 'flex'; // Garante que o elemento central esteja visível
    setTimeout(() => {
        cards[currentIndex].style.opacity = '1';
        cards[currentIndex].style.transform = 'scale(1.8)';
    }, 50); // Adding a slight delay to trigger transition

    cards[nextIndex].classList.remove('previous');
    cards[nextIndex].classList.add('next');
    cards[nextIndex].style.display = 'flex';
    cards[nextIndex].style.opacity = '0.2';
    cards[nextIndex].style.transform = 'scale(1)';
}

function navigate(direction) {
    const cards = document.querySelectorAll('.card-produtos');
    const totalCards = cards.length;
    
    // Calcula o índice do próximo card central
    let nextIndex;
    if (direction === -1) {
        nextIndex = (currentIndex - 1 + totalCards) % totalCards;
    } else if (direction === 1) {
        nextIndex = (currentIndex + 1) % totalCards;
    }

    // Define o novo índice atual
    currentIndex = nextIndex;

    // Atualiza a exibição dos cards
    updateDisplay();
}

document.addEventListener("DOMContentLoaded", () => {
    updateDisplay();
});

// Adicionar eventos aos botões de navegação
const leftButton = document.querySelector('.nav-button.left');
const rightButton = document.querySelector('.nav-button.right');

leftButton.addEventListener('click', () => {
    navigate(-1); // Navega para o card anterior
});

rightButton.addEventListener('click', () => {
    navigate(1); // Navega para o próximo card
});


