
const menuBtn = document.getElementById("menu_btn");
const navLinks = document.getElementById("nav_links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen? "fa-solid fa-x" : "fa-solid fa-bars")
})

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
});

const scrollRevealOption = {
    distance : "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".container-left h1", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".container-left .container-btn", {
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".container-right h4", {
    ...scrollRevealOption,
    delay:2000,
});
ScrollReveal().reveal(".container-right h2", {
    ...scrollRevealOption,
    delay:2500,
});
ScrollReveal().reveal(".container-right h3", {
    ...scrollRevealOption,
    delay:3000,
});
ScrollReveal().reveal(".container-right p", {
    ...scrollRevealOption,
    delay:3500,
});
ScrollReveal().reveal(".container-right .nat-1", {
    duration: 1000,
    delay:4000,
});
ScrollReveal().reveal(".container-right .nat-2", {
    duration: 1000,
    delay:4500,
});
ScrollReveal().reveal(".location", {
    ...scrollRevealOption,
    origin:"left",
    delay:5000,
});
ScrollReveal().reveal(".socials span", {
    ...scrollRevealOption,
    origin:"top",
    delay:5500,
    interval : 500,
});