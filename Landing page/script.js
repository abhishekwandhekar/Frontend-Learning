// Smooth scrolling for internal links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple search functionality
document.getElementById('searchButton').addEventListener('click', function() {
    let searchQuery = document.getElementById('searchInput').value.toLowerCase();
    alert('Search feature coming soon! You searched for: ' + searchQuery);
});

// Toggle sign-in button color on click
document.getElementById('signInButton').addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.toggle('active');
});

// Adding active class style for toggle
const signInButton = document.getElementById('signInButton');
signInButton.addEventListener('click', function () {
    signInButton.classList.toggle('active');
});

// Adding some style for the active class
signInButton.addEventListener('click', function() {
    if (signInButton.classList.contains('active')) {
        signInButton.style.backgroundColor = "#00b7e6";
        signInButton.style.transform = "scale(1.1)";
    } else {
        signInButton.style.backgroundColor = "#007bff";
        signInButton.style.transform = "scale(1)";
    }
});
