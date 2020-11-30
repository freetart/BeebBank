// DOM ELEMENTS
const menuIcon = document.querySelector(".hamburger-menu");
const menuNavbar = document.querySelector(".menu-navbar");
const close = document.getElementById("close");
const open = document.querySelector(".open");
const open2 = document.querySelector(".open2");
const open3 = document.querySelector(".open3");
const open4 = document.querySelector(".open4");
const modal = document.getElementById("modal");

// HAMBURGER MENU
menuIcon.addEventListener("click", () => menuNavbar.classList.toggle("change"));

// MODAL
open.addEventListener("click", () => modal.classList.add("show-modal"));
open2.addEventListener("click", () => modal.classList.add("show-modal"));
open3.addEventListener("click", () => modal.classList.add("show-modal"));
open4.addEventListener("click", () => modal.classList.add("show-modal"));

close.addEventListener("click", () => modal.classList.remove("show-modal"));
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);
