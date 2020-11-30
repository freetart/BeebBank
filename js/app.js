const menuIcon = document.querySelector(".hamburger-menu");
const menuNavbar = document.querySelector(".menu-navbar");

// Hamburger menu
menuIcon.addEventListener("click", () => menuNavbar.classList.toggle("change"));
