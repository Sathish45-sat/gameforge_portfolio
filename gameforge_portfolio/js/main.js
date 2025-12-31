/* 
   MAIN JAVASCRIPT
   GameForge Studios
*/

// Highlight active navigation link
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});

// Simple console message (for mentor demo)
console.log("GameForge Studios website loaded successfully!");

