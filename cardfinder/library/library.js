document.addEventListener('DOMContentLoaded', () => {
  const savedCardsContainer = document.querySelector('.saved-cards');

  function renderSavedCards() {
    savedCardsContainer.innerHTML = '';

    let savedLibrary = JSON.parse(localStorage.getItem('cardLibrary')) || [];

    if (savedLibrary.length === 0) {
      savedCardsContainer.innerHTML = `
        <div class="empty-library">
          <p>Your library is empty</p>
        </div>
      `;
      return;
    }

    savedLibrary.forEach(card => {
      const cardEl = document.createElement('article');
      cardEl.className = 'card';
      cardEl.dataset.id = card.id;
      cardEl.innerHTML = `
        <h2>${card.name}</h2>
        <img src="${card.imgSrc || card.image}" alt="${card.name} image">
        <h3>${card.type} - ${card.attribute}</h3>
        <p>${card.description || card.desc}</p>
        <button class="remove-btn" aria-label="Remove card from library">🗑️ Remove</button>
      `;
      savedCardsContainer.appendChild(cardEl);
    });

    addRemoveListeners();
  }

  function addRemoveListeners() {
    const removeButtons = savedCardsContainer.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const cardEl = button.closest('.card');
        const cardId = cardEl.dataset.id;
        removeCard(cardId);
        cardEl.remove();

        if (!savedCardsContainer.querySelector('.card')) {
          renderSavedCards();
        }
      });
    });
  }

  function removeCard(cardId) {
    let savedLibrary = JSON.parse(localStorage.getItem('cardLibrary')) || [];
    savedLibrary = savedLibrary.filter(card => card.id !== cardId);
    localStorage.setItem('cardLibrary', JSON.stringify(savedLibrary));
  }

  renderSavedCards();
});