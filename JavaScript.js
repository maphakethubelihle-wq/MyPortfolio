
alert("JavaScript is working");

// Sticky navbar + scroll button
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");
    const scrollBtn = document.querySelector(".scroll-up-btn");

    // Sticky navbar
    if (window.scrollY > 20) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

    // Show scroll button
    if (window.scrollY > 500) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

// Scroll to top
document.querySelector(".scroll-up-btn").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Mobile menu toggle
document.querySelector(".menu-btn").addEventListener("click", function () {

    document.querySelector(".navbar .menu").classList.toggle("active");

    document.querySelector(".menu-btn i").classList.toggle("active");
});

// Typing animation
var typed = new Typed(".typing", {
    strings: [
        "Software Developer",
        "Software Engineer",
        "Frontend Developer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});