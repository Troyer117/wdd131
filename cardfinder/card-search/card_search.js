const cards = [
  {
    id: 1,
    name: "Cyber Dragon",
    image: "../images/cyber_dragon.webp",
    type: "MONSTER",
    subtype: ["EFFECT"],
    monsterType: "MACHINE",
    level: 5,
    attribute: "LIGHT",
    atk: 2100,
    def: 1600,
    description: "If only your opponent controls a monster, you can Special Summon this card (from your hand)."
  },
  {
    id: 2,
    name: "Blue-Eyes White Dragon",
    image: "../images/blue-eyes_white_dragon.webp",
    type: "MONSTER",
    subtype: ["NORMAL"],
    monsterType: "DRAGON",
    level: 8,
    attribute: "LIGHT",
    atk: 3000,
    def: 2500,
    description: "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale."
  },
  {
    id: 3,
    name: "Mirror Force",
    image: "../images/mirror_force.webp",
    type: "TRAP",
    trapType: "NORMAL",
    description: "When an opponent's monster declares an attack: Destroy all your opponent's Attack Position monsters."
  },
  {
  id: 4,
  name: "Dark Magician",
  image: "../images/dark_magician.webp",
  type: "MONSTER",
  subtype: ["NORMAL"],
  monsterType: "SPELLCASTER",
  level: 7,
  attribute: "DARK",
  atk: 2500,
  def: 2100,
  description: "The ultimate wizard in terms of attack and defense."
  },
  {
    id: 5,
    name: "Decode Talker",
    image: "../images/decode_talker.webp",
    type: "MONSTER",
    subtype: ["LINK"],
    monsterType: "CYBERSE",
    linkRating: 3,
    attribute: "DARK",
    atk: 2300,
    description: "[2+ Effect Monsters] Gains 500 ATK for each monster it points to. When your opponent activates a card or effect that targets a card you control, you can tribute 1 monster this card points to; negate the activation."
  },
  {
  id: 6,
  name: "Cycroid",
  image: "../images/cycroid.webp",
  type: "MONSTER",
  subtype: ["NORMAL"],
  monsterType: "MACHINE",
  level: 3,
  attribute: "EARTH",
  atk: 800,
  def: 1000,
  description: "The most lovable and friendly of all the Vehicroids. It can arm itself with training wheels."
  },
  {
  id: 7,
  name: "Aeropixthree",
  image: "../images/aeropixthree.webp",
  type: "MONSTER",
  subtype: ["EFFECT", "TUNER"],
  monsterType: "FAIRY",
  level: 1,
  attribute: "WIND",
  atk: 200,
  def: 200,
  description: "Once per turn (Quick Effect): You can target 1 face-up monster your opponent controls in this card's column; move this card you control to another of your Main Monster Zones, and if you do, move that opponent's monster to their Main Monster Zone in this card's column, then place 1 Burnup Counter on it. (Monsters with Burnup Counters lose 200 ATK/DEF for each Burnup Counter on it.)"
  },
  {
  id: 8,
  name: "Ambulance Rescueroid",
  image: "../images/ambulance_rescueroid.webp",
  type: "MONSTER",
  subtype: ["FUSION"],
  monsterType: "MACHINE",
  level: 6,
  attribute: "FIRE",
  atk: 2300,
  def: 1800,
  description: "[\"Rescueroid\" + \"Ambulanceroid\"] Must be Fusion Summoned. Once per turn, when a monster you control is destroyed by battle and sent to the GY: You can Special Summon that monster in Defense Position."
  },
  {
  id: 9,
  name: "Ambulanceroid",
  image: "../images/ambulanceroid.webp",
  type: "MONSTER",
  subtype: ["EFFECT"],
  monsterType: "MACHINE",
  level: 3,
  attribute: "EARTH",
  atk: 300,
  def: 1200,
  description: "When a \"roid\" monster(s) is added from your GY to your hand (except during the Damage Step): You can Special Summon it."
  },
  {
  id: 10,
  name: "Banisher of the Radiance",
  image: "../images/banisher_of_the_radiance.webp",
  type: "MONSTER",
  subtype: ["EFFECT"],
  monsterType: "FAIRY",
  level: 3,
  attribute: "LIGHT",
  atk: 1600,
  def: 0,
  description: "Any card sent to the GY is banished instead."
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("search-form");
  const filterMenu = document.querySelector(".filter-menu");
  const toggleMainBtn = document.querySelector(".toggle-main");
  const toggleBtns = document.querySelectorAll(".toggle-btn");
  const clearFiltersBtn = document.getElementById("clear-filters");
  const ariaLiveRegion = document.getElementById("aria-live-region");

  const selectors = {
    type: filterMenu.querySelectorAll('div[data-category="type"] input[type="checkbox"]'),
    attribute: filterMenu.querySelectorAll('div[data-category="attribute"] input[type="checkbox"]'),
    monsterType: filterMenu.querySelectorAll('div[data-category="monsterType"] input[type="checkbox"]'),
    subtype: filterMenu.querySelectorAll('div[data-category="subtype"] input[type="checkbox"]'),
    spellType: filterMenu.querySelectorAll('div[data-category="spellType"] input[type="checkbox"]'),
    trapType: filterMenu.querySelectorAll('div[data-category="trapType"] input[type="checkbox"]'),
    exactMatch: filterMenu.querySelector('input[name="exactMatch"]')
  };

  const rangeInputs = {
    levelMin: document.getElementById("level-min"),
    levelMax: document.getElementById("level-max"),
    linkMin: document.getElementById("link-min"),
    linkMax: document.getElementById("link-max"),
    atkMin: document.getElementById("atk-min"),
    atkMax: document.getElementById("atk-max"),
    defMin: document.getElementById("def-min"),
    defMax: document.getElementById("def-max"),
  };

  toggleMainBtn.addEventListener("click", e => {
    e.stopPropagation();
    const expanded = toggleMainBtn.getAttribute("aria-expanded") === "true";
    toggleMainBtn.setAttribute("aria-expanded", !expanded);
    filterMenu.classList.toggle("hidden");
  });

  toggleBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const options = btn.nextElementSibling;
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", !expanded);
      options.classList.toggle("hidden");
    });
    btn.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        btn.click();
      }
    });
  });

  document.addEventListener("click", e => {
    if (!filterMenu.contains(e.target) && !toggleMainBtn.contains(e.target)) {
      filterMenu.classList.add("hidden");
      toggleMainBtn.setAttribute("aria-expanded", "false");
    }
  });

  function toggleCategory(div, show) {
    if (!div) return;
    div.style.display = show ? "" : "none";
    Array.from(div.querySelectorAll('input')).forEach(input => {
      input.disabled = !show;
      if (!show) {
        if (input.type === "checkbox" || input.type === "radio") input.checked = false;
        else input.value = "";
      }
    });
  }

  function updateFilterVisibilityByType() {
    const selectedTypes = Array.from(selectors.type).filter(cb => cb.checked).map(cb => cb.value);

    const categories = {
      attribute: filterMenu.querySelector('div.filter-category[data-category="attribute"]'),
      monsterType: filterMenu.querySelector('div.filter-category[data-category="monsterType"]'),
      subtype: filterMenu.querySelector('div.filter-category[data-category="subtype"]'),
      spellType: filterMenu.querySelector('div.filter-category[data-category="spellType"]'),
      trapType: filterMenu.querySelector('div.filter-category[data-category="trapType"]'),
      level: filterMenu.querySelector('div.filter-category[data-category="level"]'),
      atk: filterMenu.querySelector('div.filter-category[data-category="atk"]'),
      def: filterMenu.querySelector('div.filter-category[data-category="def"]'),
    };

    if (selectedTypes.length === 0) {
      Object.values(categories).forEach(div => toggleCategory(div, true));
    } else {
      const isMonster = selectedTypes.includes("MONSTER");
      const isSpell = selectedTypes.includes("SPELL");
      const isTrap = selectedTypes.includes("TRAP");

      toggleCategory(categories.attribute, isMonster);
      toggleCategory(categories.monsterType, isMonster);
      toggleCategory(categories.subtype, isMonster);
      toggleCategory(categories.spellType, isSpell);
      toggleCategory(categories.trapType, isTrap);
      toggleCategory(categories.level, isMonster);
      toggleCategory(categories.atk, isMonster);
      toggleCategory(categories.def, isMonster);
    }
  }

  function getCheckedValues(checkboxes) {
    return Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
  }

  function parseRange(input, fallback) {
    const val = parseInt(input.value, 10);
    return isNaN(val) ? fallback : val;
  }

  function filterAndDisplay() {
    const searchText = form.querySelector('input[name="searchText"]').value.trim().toLowerCase();
    const exactMatchChecked = selectors.exactMatch.checked;

    const selectedTypes = getCheckedValues(selectors.type);
    const selectedAttributes = getCheckedValues(selectors.attribute);
    const selectedMonsterTypes = getCheckedValues(selectors.monsterType);
    const selectedSubtypes = getCheckedValues(selectors.subtype);
    const selectedSpellTypes = getCheckedValues(selectors.spellType);
    const selectedTrapTypes = getCheckedValues(selectors.trapType);

    const levelMin = parseRange(rangeInputs.levelMin, 1);
    const levelMax = parseRange(rangeInputs.levelMax, 12);
    const linkMin = parseRange(rangeInputs.linkMin, 1);
    const linkMax = parseRange(rangeInputs.linkMax, 5);
    const atkMin = parseRange(rangeInputs.atkMin, 0);
    const atkMax = parseRange(rangeInputs.atkMax, 5000);
    const defMin = parseRange(rangeInputs.defMin, 0);
    const defMax = parseRange(rangeInputs.defMax, 3000);

    const resultsSection = document.querySelector(".card-results");
    resultsSection.classList.remove("hidden");
    resultsSection.innerHTML = "";

    const matchValue = (value) => {
      if (value === undefined || value === null) return false;
      value = value.toString().toLowerCase();
      return exactMatchChecked ? value === searchText : value.includes(searchText);
    };

    const matchedCards = cards.filter(card => {
      if (selectedTypes.length && !selectedTypes.includes(card.type)) return false;
      if (selectedAttributes.length && (!card.attribute || !selectedAttributes.includes(card.attribute))) return false;
      if (selectedMonsterTypes.length && (!card.monsterType || !selectedMonsterTypes.includes(card.monsterType))) return false;
      if (selectedSubtypes.length && (!card.subtype || !card.subtype.some(s => selectedSubtypes.includes(s)))) return false;
      if (selectedSpellTypes.length && (!card.spellType || !selectedSpellTypes.includes(card.spellType))) return false;
      if (selectedTrapTypes.length && (!card.trapType || !selectedTrapTypes.includes(card.trapType))) return false;
      if (card.level !== undefined && (card.level < levelMin || card.level > levelMax)) return false;
      if (card.rank !== undefined && (card.rank < levelMin || card.rank > levelMax)) return false;
      if (card.linkRating !== undefined && (card.linkRating < linkMin || card.linkRating > linkMax)) return false;
      if (card.atk !== undefined && (card.atk < atkMin || card.atk > atkMax)) return false;
      if (card.def !== undefined && (card.def < defMin || card.def > defMax)) return false;

      return (
        matchValue(card.name) ||
        matchValue(card.type) ||
        matchValue(card.attribute) ||
        matchValue(card.monsterType) ||
        matchValue(card.spellType) ||
        matchValue(card.trapType) ||
        matchValue(card.description) ||
        (card.subtype && card.subtype.some(s => matchValue(s))) ||
        (card.level !== undefined && matchValue(card.level)) ||
        (card.rank !== undefined && matchValue(card.rank)) ||
        (card.linkRating !== undefined && matchValue(card.linkRating)) ||
        (card.atk !== undefined && matchValue(card.atk)) ||
        (card.def !== undefined && matchValue(card.def))
      );
    });

    if (!matchedCards.length) {
      resultsSection.style.cssText = "display:flex;justify-content:center;align-items:center;height:300px;";
      resultsSection.innerHTML = `<p style="font-size: 2rem; text-align: center;">No cards found matching your search.</p>`;
      return;
    }

    resultsSection.style.cssText = "";

    matchedCards.forEach(card => {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");

      let html = `<h3>${card.name}</h3><img src="${card.image}" alt="${card.name}" loading="lazy" width="200" height="200">`;

      if (card.type) {
        html += `<p><strong>Type:</strong> ${card.type}`;
        if (card.subtype) {
          html += ` | <strong>Subtype:</strong> ${card.subtype.join(", ")}`;
        }
        html += `</p>`;
      }

      if (card.monsterType) html += `<p><strong>Monster Type:</strong> ${card.monsterType}</p>`;
      if (card.level !== undefined) html += `<p><strong>Level:</strong> ${card.level} | <strong>Attribute:</strong> ${card.attribute}</p>`;
      if (card.rank !== undefined) html += `<p><strong>Rank:</strong> ${card.rank} | <strong>Attribute:</strong> ${card.attribute}</p>`;
      if (card.linkRating !== undefined) html += `<p><strong>Link Rating:</strong> ${card.linkRating} | <strong>Attribute:</strong> ${card.attribute}</p>`;
      if (card.atk !== undefined && card.def !== undefined) html += `<p><strong>ATK:</strong> ${card.atk} | <strong>DEF:</strong> ${card.def}</p>`;
      else if (card.atk !== undefined && card.linkRating !== undefined) html += `<p><strong>ATK:</strong> ${card.atk}</p>`;

      if (card.spellType) {
        const spellTypeText = Array.isArray(card.spellType) ? card.spellType.join(", ") : card.spellType;
        html += `<p><strong>Spell Type:</strong> ${spellTypeText}</p>`;
      }

      if (card.trapType) {
        const trapTypeText = Array.isArray(card.trapType) ? card.trapType.join(", ") : card.trapType;
        html += `<p><strong>Trap Type:</strong> ${trapTypeText}</p>`;
      }

      if (card.description) html += `<p>${card.description}</p>`;

      html += `<button class="save-btn">Save ✔</button>`;
      cardDiv.innerHTML = html;

      let savedCards = JSON.parse(localStorage.getItem("savedCards") || "[]");
      const isSaved = savedCards.some(saved => saved.id === card.id);
      const saveBtn = cardDiv.querySelector(".save-btn");

      if (isSaved) {
        saveBtn.textContent = "Saved ✔";
        saveBtn.style.backgroundColor = "#D04735";
      } else {
        saveBtn.style.backgroundColor = "#80355B";
      }

      saveBtn.addEventListener("click", () => {
        savedCards = JSON.parse(localStorage.getItem("savedCards") || "[]");
        const index = savedCards.findIndex(saved => saved.id === card.id);
        if (index === -1) {
          savedCards.push(card);
          saveBtn.textContent = "Saved ✔";
          saveBtn.style.backgroundColor = "#D04735";
          ariaLiveRegion.textContent = `${card.name} saved to your library.`;
        } else {
          savedCards.splice(index, 1);
          saveBtn.textContent = "Save ✔";
          saveBtn.style.backgroundColor = "#80355B";
          ariaLiveRegion.textContent = `${card.name} removed from your library.`;
        }
        localStorage.setItem("savedCards", JSON.stringify(savedCards));
      });

      resultsSection.appendChild(cardDiv);
    });
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    filterAndDisplay();
  });

  [...selectors.type, ...selectors.attribute, ...selectors.monsterType, ...selectors.subtype, ...selectors.spellType, ...selectors.trapType,
    ...Object.values(rangeInputs), selectors.exactMatch].forEach(input => {
    input.addEventListener("change", () => {
      updateFilterVisibilityByType();
      filterAndDisplay();
    });
  });

  clearFiltersBtn.addEventListener("click", () => {
    [...selectors.type, ...selectors.attribute, ...selectors.monsterType, ...selectors.subtype, ...selectors.spellType, ...selectors.trapType].forEach(cb => cb.checked = false);
    rangeInputs.levelMin.value = 1;
    rangeInputs.levelMax.value = 12;
    rangeInputs.linkMin.value = 1;
    rangeInputs.linkMax.value = 5;
    rangeInputs.atkMin.value = 0;
    rangeInputs.atkMax.value = 5000;
    rangeInputs.defMin.value = 0;
    rangeInputs.defMax.value = 3000;
    selectors.exactMatch.checked = false;
    form.querySelector('input[name="searchText"]').value = "";
    document.querySelector(".card-results").innerHTML = '';
    updateFilterVisibilityByType();
  });

  updateFilterVisibilityByType();
});