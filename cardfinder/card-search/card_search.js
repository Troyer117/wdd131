const cardDatabase = [
    {
        name: "Blue-Eyes White Dragon",
        type: "Dragon Monster",
        attribute: "Light",
        description: "Lorem ipsum dolor sit amet et delictus accommodare his consul copiosae.",
        color: "#4a90e2"
    },
    {
        name: "Dark Magician",
        type: "Spellcaster Monster",
        attribute: "Dark",
        description: "Lorem ipsum dolor sit amet et delictus accommodare his consul copiosae.",
        color: "#7b68ee"
    },
    {
        name: "Red-Eyes Black Dragon",
        type: "Dragon Monster",
        attribute: "Dark",
        description: "Lorem ipsum dolor sit amet et delictus accommodare his consul copiosae.",
        color: "#dc143c"
    },
    {
        name: "Mystical Space Typhoon",
        type: "Spell Card",
        attribute: "Spell",
        description: "Lorem ipsum dolor sit amet et delictus accommodare his consul copiosae.",
        color: "#32cd32"
    },
    {
        name: "Mirror Force",
        type: "Trap Card",
        attribute: "Trap",
        description: "Lorem ipsum dolor sit amet et delictus accommodare his consul copiosae.",
        color: "#ff69b4"
    },
    {
        name: "Elemental HERO Sparkman",
        type: "Warrior Monster",
        attribute: "Light",
        description: "Lorem ipsum dolor sit amet et delictus accommodare his consul copiosae.",
        color: "#ffd700"
    }
];

// DOM elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsGrid = document.getElementById('resultsGrid');

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    displayInitialCards();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Real-time search as user types (debounced)
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            if (searchInput.value.trim()) {
                performSearch();
            } else {
                displayInitialCards();
            }
        }, 300);
    });
}

// Display initial cards
function displayInitialCards() {
    displayCards(cardDatabase);
}

// Perform search
function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (!query) {
        displayInitialCards();
        return;
    }
    
    // Show loading state
    showLoading();
    
    // Simulate API call delay
    setTimeout(() => {
        const filteredCards = cardDatabase.filter(card => 
            card.name.toLowerCase().includes(query) ||
            card.type.toLowerCase().includes(query) ||
            card.attribute.toLowerCase().includes(query)
        );
        
        displayCards(filteredCards, query);
        hideLoading();
    }, 500);
}

// Display cards
function displayCards(cards, searchQuery = '') {
    if (cards.length === 0) {
        displayEmptyState();
        return;
    }
    
    resultsGrid.innerHTML = '';
    
    cards.forEach(card => {
        const cardElement = createCardElement(card, searchQuery);
        resultsGrid.appendChild(cardElement);
    });
}

// Create card element
function createCardElement(card, searchQuery = '') {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'result-card';
    
    // Highlight search terms
    const highlightedName = highlightSearchTerm(card.name, searchQuery);
    const highlightedType = highlightSearchTerm(card.type, searchQuery);
    
    cardDiv.innerHTML = `
        <div class="result-card-header">${highlightedName}</div>
        <div class="result-card-image">
            <div class="placeholder-icon" style="color: ${card.color};">🎴</div>
        </div>
        <div class="result-card-type">${highlightedType}</div>
        <div class="result-card-description">${card.description}</div>
    `;
    
    // Add click handler
    cardDiv.addEventListener('click', function() {
        selectCard(card);
    });
    
    // Add animation
    cardDiv.style.opacity = '0';
    cardDiv.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        cardDiv.style.transition = 'all 0.5s ease';
        cardDiv.style.opacity = '1';
        cardDiv.style.transform = 'translateY(0)';
    }, 100);
    
    return cardDiv;
}

// Highlight search terms
function highlightSearchTerm(text, searchQuery) {
    if (!searchQuery) return text;
    
    const regex = new RegExp(`(${searchQuery})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
}

// Display empty state
function displayEmptyState() {
    resultsGrid.innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">🔍</div>
            <div class="empty-state-text">No cards found</div>
            <div class="empty-state-subtext">Try adjusting your search terms</div>
        </div>
    `;
}

// Show loading state
function showLoading() {
    searchButton.disabled = true;
    searchButton.textContent = 'Searching...';
    resultsGrid.classList.add('loading');
}

// Hide loading state
function hideLoading() {
    searchButton.disabled = false;
    searchButton.textContent = 'Search';
    resultsGrid.classList.remove('loading');
}

// Select card (navigate to results page)
function selectCard(card) {
    // Store selected card in sessionStorage
    sessionStorage.setItem('selectedCard', JSON.stringify(card));
    
    // Add selection animation
    event.currentTarget.style.transform = 'scale(0.95)';
    event.currentTarget.style.transition = 'all 0.2s ease';
    
    setTimeout(() => {
        // Navigate to results page
        window.location.href = 'results.html';
    }, 200);
}

// Advanced search filters (for future enhancement)
function createAdvancedFilters() {
    const filterContainer = document.createElement('div');
    filterContainer.className = 'advanced-filters';
    
    const typeFilter = document.createElement('select');
    typeFilter.innerHTML = `
        <option value="">All Types</option>
        <option value="monster">Monster</option>
        <option value="spell">Spell</option>
        <option value="trap">Trap</option>
    `;
    
    const attributeFilter = document.createElement('select');
    attributeFilter.innerHTML = `
        <option value="">All Attributes</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="earth">Earth</option>
        <option value="wind">Wind</option>
    `;
    
    filterContainer.appendChild(typeFilter);
    filterContainer.appendChild(attributeFilter);
    
    return filterContainer;
}

// Export functions for potential use
window.CardSearchPage = {
    performSearch,
    displayCards,
    cardDatabase
};

// Analytics tracking (placeholder)
function trackSearch(query) {
    console.log('Search tracked:', query);
    // Add analytics tracking here
}

// Auto-complete functionality
function setupAutoComplete() {
    const suggestions = [...new Set(cardDatabase.map(card => card.name))];
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        if (query.length < 2) return;
        
        const matches = suggestions.filter(name => 
            name.toLowerCase().includes(query)
        ).slice(0, 5);
        
        displaySuggestions(matches);
    });
}

function displaySuggestions(suggestions) {
    // Remove existing suggestions
    const existingSuggestions = document.querySelector('.suggestions');
    if (existingSuggestions) {
        existingSuggestions.remove();
    }
    
    if (suggestions.length === 0) return;
    
    const suggestionsDiv = document.createElement('div');
    suggestionsDiv.className = 'suggestions';
    suggestionsDiv.style.cssText = `
        position: absolute;
        background: white;
        border: 1px solid #ddd;
        border-radius: 5px;
        max-height: 200px;
        overflow-y: auto;
        z-index: 1000;
        width: 100%;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    `;
    
    suggestions.forEach(suggestion => {
        const item = document.createElement('div');
        item.textContent = suggestion;
        item.style.cssText = `
            padding: 10px;
            cursor: pointer;
            border-bottom: 1px solid #eee;
        `;
        
        item.addEventListener('click', function() {
            searchInput.value = suggestion;
            suggestionsDiv.remove();
            performSearch();
        });
        
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f5f5f5';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'white';
        });
        
        suggestionsDiv.appendChild(item);
    });
    
    searchInput.parentNode.style.position = 'relative';
    searchInput.parentNode.appendChild(suggestionsDiv);
    
    // Position suggestions
    const rect = searchInput.getBoundingClientRect();
    suggestionsDiv.style.top = searchInput.offsetHeight + 'px';
    suggestionsDiv.style.left = '0px';
}