// Smooth scrolling effect for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Adding fade-in effect on scroll
document.addEventListener("scroll", function () {
    let elements = document.querySelectorAll(".fade-in, .slide-in");
    let windowHeight = window.innerHeight;
    
    elements.forEach(el => {
        let positionFromTop = el.getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
});
