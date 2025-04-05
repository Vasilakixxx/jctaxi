document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.main-nav');
    
    burger.addEventListener('click', function() {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });
    
    // Close menu when clicking on nav links
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            burger.classList.remove('active');
        });
    });
});

// Popup functionality
function openPopup(tourType) {
    document.getElementById('popup-overlay').style.display = 'block';
    document.getElementById(`${tourType}-popup`).style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        popup.style.display = 'none';
    });
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close when pressing ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePopup();
    }
});

// Better mobile menu handling
document.querySelectorAll('.category-nav a').forEach(link => {
    link.addEventListener('touchstart', function() {
        this.classList.add('touched');
    });
    
    link.addEventListener('touchend', function() {
        setTimeout(() => {
            this.classList.remove('touched');
        }, 150);
    });
});