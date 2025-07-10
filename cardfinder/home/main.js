const cardData = [
    {
        name: "Blue-Eyes White Dragon",
        type: "Monster",
        color: "#4a90e2"
    },
    {
        name: "Dark Magician",
        type: "Spellcaster",
        color: "#7b68ee"
    },
    {
        name: "Red-Eyes Black Dragon",
        type: "Dragon",
        color: "#dc143c"
    },
    {
        name: "Elemental HERO Sparkman",
        type: "Warrior",
        color: "#ffd700"
    },
    {
        name: "Mystical Space Typhoon",
        type: "Spell",
        color: "#32cd32"
    }
];

// Current card index
let currentCardIndex = 0;

// DOM elements
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const cardContent = document.querySelector('.card-content');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayCard(currentCardIndex);
    setupEventListeners();
    addInteractiveEffects();
});

// Setup event listeners
function setupEventListeners() {
    leftArrow.addEventListener('click', previousCard);
    rightArrow.addEventListener('click', nextCard);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            previousCard();
        } else if (e.key === 'ArrowRight') {
            nextCard();
        }
    });
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    const cardFrame = document.querySelector('.card-frame');
    
    cardFrame.addEventListener('touchstart', function(e) {
        touchStartX = e.touches[0].clientX;
    });
    
    cardFrame.addEventListener('touchend', function(e) {
        const touchEndX = e.changedTouches[0].clientX;
        const difference = touchStartX - touchEndX;
        
        if (Math.abs(difference) > 50) { // Minimum swipe distance
            if (difference > 0) {
                nextCard();
            } else {
                previousCard();
            }
        }
    });
}

// Display card function
function displayCard(index) {
    const card = cardData[index];
    
    cardContent.innerHTML = `
        <div class="card-info" style="text-align: center; color: ${card.color};">
            <h3 style="font-size: 18px; margin-bottom: 10px;">${card.name}</h3>
            <p style="font-size: 14px; opacity: 0.8;">${card.type}</p>
            <div class="card-visual" style="
                width: 60px; 
                height: 60px; 
                background: ${card.color}; 
                border-radius: 50%; 
                margin: 15px auto;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                font-size: 20px;
                box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            ">
                ${card.name.charAt(0)}
            </div>
        </div>
    `;
    
    // Add animation
    cardContent.style.opacity = '0';
    cardContent.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        cardContent.style.transition = 'all 0.3s ease';
        cardContent.style.opacity = '1';
        cardContent.style.transform = 'translateY(0)';
    }, 50);
}

// Previous card function
function previousCard() {
    currentCardIndex = (currentCardIndex - 1 + cardData.length) % cardData.length;
    displayCard(currentCardIndex);
    
    // Visual feedback for left arrow
    leftArrow.style.transform = 'translateY(-1px) scale(0.95)';
    setTimeout(() => {
        leftArrow.style.transform = 'translateY(-3px) scale(1)';
    }, 150);
}

// Next card function
function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % cardData.length;
    displayCard(currentCardIndex);
    
    // Visual feedback for right arrow
    rightArrow.style.transform = 'translateY(-1px) scale(0.95)';
    setTimeout(() => {
        rightArrow.style.transform = 'translateY(-3px) scale(1)';
    }, 150);
}

// Add interactive effects
function addInteractiveEffects() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add hover effects to cards
    const heroCard = document.querySelector('.hero-card');
    if (heroCard) {
        heroCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        heroCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }
    
    // Add parallax effect to header
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header');
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
    });
    
    // Add loading animation
    const cardFrame = document.querySelector('.card-frame');
    if (cardFrame) {
        cardFrame.addEventListener('click', function() {
            this.style.animation = 'pulse 0.3s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 300);
        });
    }
}

// Auto-rotate cards (optional feature)
let autoRotateInterval;

function startAutoRotate() {
    autoRotateInterval = setInterval(nextCard, 3000); // Change card every 3 seconds
}

function stopAutoRotate() {
    clearInterval(autoRotateInterval);
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .card-info {
        animation: fadeIn 0.5s ease;
    }
`;
document.head.appendChild(style);

// Optional: Start auto-rotation on page load (uncomment if desired)
// setTimeout(startAutoRotate, 5000);

// Stop auto-rotation when user interacts
document.addEventListener('click', stopAutoRotate);
document.addEventListener('keydown', stopAutoRotate);