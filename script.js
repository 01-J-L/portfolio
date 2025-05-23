// Hamburger Menu
function hamburg(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)"; // Show dropdown
}

function cancel(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-100%)"; // Hide dropdown fully
}

// Typewriter Effect
const texts = [
    "DEVELOPER ",
    "DESIGNER ",
    "PROGRAMMER " // Changed YOUTUBER to STUDENT as per original text
];
let speed = 100;
let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    const textElements = document.querySelector(".typewriter-text"); // Get element inside function
    if (!textElements) return; // Exit if element not found (e.g., on other pages)

    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1500); // Increased delay before erasing
    }
}

function eraseText() {
    const textElements = document.querySelector(".typewriter-text");
    if (!textElements) return;

    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

// Initialize Typewriter only if the element exists (typically on homepage)
window.onload = function() {
    if (document.querySelector(".typewriter-text")) {
        typeWriter();
    }
    // AOS is initialized in each HTML file after the library script.
};