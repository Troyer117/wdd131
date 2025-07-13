document.addEventListener("DOMContentLoaded", () => {
  const savedCardsSection = document.querySelector(".saved-cards");

  const createButton = (text, className, onClick, ariaLabel) => {
    const btn = document.createElement("button");
    btn.className = className;
    btn.innerHTML = text;
    if (ariaLabel) btn.setAttribute("aria-label", ariaLabel);
    btn.addEventListener("click", onClick);
    return btn;
  };

  const buildCardHTML = card => {
    let html = `<h3>${card.name}</h3><img src="${card.image}" alt="${card.name}" loading="lazy">`;
    if (card.type) html += `<p><strong>Type:</strong> ${card.type}</p>`;
    if (card.monsterType) html += `<p><strong>Monster Type:</strong> ${card.monsterType}</p>`;
    if (card.level !== undefined) html += `<p><strong>Level:</strong> ${card.level} | <strong>Attribute:</strong> ${card.attribute}</p>`;
    if (card.rank !== undefined) html += `<p><strong>Rank:</strong> ${card.rank} | <strong>Attribute:</strong> ${card.attribute}</p>`;
    if (card.linkRating !== undefined) html += `<p><strong>Link Rating:</strong> ${card.linkRating} | <strong>Attribute:</strong> ${card.attribute}</p>`;
    if (card.atk !== undefined && card.def !== undefined) html += `<p><strong>ATK:</strong> ${card.atk} | <strong>DEF:</strong> ${card.def}</p>`;
    if (card.atk !== undefined && card.linkRating !== undefined) html += `<p><strong>ATK:</strong> ${card.atk}</p>`;
    if (card.spellType) html += `<p><strong>Spell Type:</strong> ${card.spellType}</p>`;
    if (card.trapType) html += `<p><strong>Trap Type:</strong> ${card.trapType}</p>`;
    if (card.description) html += `<p>${card.description}</p>`;
    return html;
  };

  const renderLibrary = () => {
    const savedCards = JSON.parse(localStorage.getItem("savedCards")) || [];
    savedCardsSection.innerHTML = '';

    if (!savedCards.length) {
      savedCardsSection.innerHTML = `
        <div class="empty-library">
          <img src="../images/back_of_card.jpg" alt="Empty Library" loading="lazy">
          <p>Your library is currently empty.</p>
        </div>`;
      return;
    }

    const clearBtn = createButton(
      `Clear Library <span class="trash-icon">🗑️</span>`,
      "clear-library-btn",
      () => {
        localStorage.removeItem("savedCards");
        renderLibrary();
      }
    );
    savedCardsSection.appendChild(clearBtn);

    const cardsContainer = document.createElement("div");
    cardsContainer.className = "saved-cards-grid";

    savedCards.forEach(card => {
      const cardDiv = document.createElement("div");
      cardDiv.className = "card";
      cardDiv.innerHTML = buildCardHTML(card);

      const removeBtn = createButton(
        `Remove <span class="trash-icon">🗑️</span>`,
        "remove-btn",
        () => {
          const updatedCards = savedCards.filter(c => c.id !== card.id);
          localStorage.setItem("savedCards", JSON.stringify(updatedCards));
          renderLibrary();
        },
        `Remove ${card.name} from library`
      );

      cardDiv.appendChild(removeBtn);
      cardsContainer.appendChild(cardDiv);
    });

    savedCardsSection.appendChild(cardsContainer);
  };

  renderLibrary();
});