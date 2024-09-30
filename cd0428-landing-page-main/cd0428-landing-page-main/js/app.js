// Define Global Variables
const sections = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');
const navbar = document.querySelector('.page__header');

// Create an object to store section-specific colors if needed
const sectionColors = {
    section1: '#f6b93b',
    section2: '#38ada9',
    section3: '#e55039',
    section4: '#48dbfb',
    section5: '#bdc3c7'
};

// Helper Function: Check if a section is in the viewport
function isInViewport(section) {
    const bounding = section.getBoundingClientRect();
    return bounding.top >= 0 && bounding.top <= window.innerHeight / 2;
}

// Build the navigation menu
function buildNav() {
    sections.forEach(section => {
        const navItem = document.createElement('li');
        const navLink = document.createElement('a');
        navLink.href = `#${section.id}`;
        navLink.textContent = section.dataset.nav;
        navLink.classList.add('menu__link');
        
        // Scroll to section on click with smooth behavior
        navLink.addEventListener('click', function (event) {
            event.preventDefault();
            section.scrollIntoView({ behavior: 'smooth' });
        });
        
        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    });
}

// Add 'active' class to both section and corresponding navbar link
function setActiveSection() {
    sections.forEach(section => {
        const navLinks = document.querySelectorAll('.menu__link');
        
        if (isInViewport(section)) {
            // Add active class to the section
            section.classList.add('your-active-class');
            
            // Find and highlight the corresponding navbar link
            navLinks.forEach(link => {
                if (link.getAttribute('href').substring(1) === section.id) {
                    link.classList.add('active-link'); // Highlight this link
                } else {
                    link.classList.remove('active-link'); // Remove highlight from other links
                }
            });
            
        } else {
            // Remove active class from the section if it's not in view
            section.classList.remove('your-active-class');
        }
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', buildNav); // Build the menu on DOM load
window.addEventListener('scroll', setActiveSection); // Highlight active section & navbar link on scroll
