const cards = [
  {
    id: "blue-eyes",
    name: "Blue-Eyes White Dragon",
    type: "Dragon",
    attribute: "LIGHT",
    description: "This legendary dragon is a powerful engine of destruction.",
    image: "../images/blue-eyes_white_dragon.jpg"
  },
  {
    id: "dark-magician",
    name: "Dark Magician",
    type: "Spellcaster",
    attribute: "DARK",
    description: "The ultimate wizard in terms of attack and defense.",
    image: "../images/dark_magician.jpg"
  },
  {
    id: "red-eyes",
    name: "Red-Eyes Black Dragon",
    type: "Dragon",
    attribute: "DARK",
    description: "A ferocious dragon with a deadly attack.",
    image: "../images/red-eyes_b._dragon.jpg"
  },
  {
    id: "cyber-dragon",
    name: "Cyber Dragon",
    type: "Machine",
    attribute: "LIGHT",
    description: "Easy to summon and powerful, often used in combos.",
    image: "../images/cyber_dragon.jpg"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("search-form");
  const cardResults = document.querySelector('.card-results');
  let savedLibrary = JSON.parse(localStorage.getItem('cardLibrary')) || [];

  function isCardSaved(cardId) {
    return savedLibrary.some(card => card.id === cardId);
  }

  function updateSaveButtons() {
    const cardsOnPage = cardResults.querySelectorAll('.card');
    cardsOnPage.forEach(card => {
      const id = card.getAttribute('data-id');
      const btn = card.querySelector('.save-btn');
      if (isCardSaved(id)) {
        btn.textContent = '✔️ Saved';
        btn.disabled = true;
        btn.style.cursor = 'default';
      } else {
        btn.textContent = '✔️';
        btn.disabled = false;
        btn.style.cursor = 'pointer';
      }
    });
  }

  function getCardData(cardElem) {
    return {
      id: cardElem.getAttribute('data-id'),
      name: cardElem.querySelector('h2').textContent,
      imgSrc: cardElem.querySelector('img').src,
      type: cardElem.querySelector('h3').textContent.split(' - ')[0],
      attribute: cardElem.querySelector('h3').textContent.split(' - ')[1],
      description: cardElem.querySelector('p').textContent,
    };
  }

  cardResults.addEventListener('click', (e) => {
    if (e.target.classList.contains('save-btn')) {
      const cardElem = e.target.closest('.card');
      const cardData = getCardData(cardElem);

      if (!isCardSaved(cardData.id)) {
        savedLibrary.push(cardData);
        localStorage.setItem('cardLibrary', JSON.stringify(savedLibrary));
        updateSaveButtons();
      }
    }
  });

  function renderCards(filteredCards) {
    cardResults.innerHTML = '';
    if (filteredCards.length === 0) {
      cardResults.innerHTML = '<p>No matching cards found.</p>';
      return;
    }

    filteredCards.forEach(card => {
      const cardEl = document.createElement('article');
      cardEl.className = 'card';
      cardEl.dataset.id = card.id;
      cardEl.innerHTML = `
        <h2>${card.name}</h2>
        <img src="${card.image}" alt="${card.name}">
        <h3>${card.type} - ${card.attribute}</h3>
        <p>${card.description}</p>
        <button class="save-btn" aria-label="Save card to library">✔️</button>
      `;
      cardResults.appendChild(cardEl);
    });

    cardResults.classList.remove('hidden');
    updateSaveButtons();
  }

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = searchForm.querySelector('input').value.toLowerCase();
    const filterValue = document.getElementById('filter').value.toLowerCase();

    const filtered = cards.filter(card => {
      const matchesQuery = 
        card.name.toLowerCase().includes(query) ||
        card.type.toLowerCase().includes(query) ||
        card.attribute.toLowerCase().includes(query) ||
        card.description.toLowerCase().includes(query);

      const matchesFilter = 
        !filterValue ||
        card.type.toLowerCase() === filterValue ||
        card.attribute.toLowerCase() === filterValue;

      return matchesQuery && matchesFilter;
    });

    renderCards(filtered);
  });
});