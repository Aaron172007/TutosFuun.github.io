// script.js
const menuToggle = document.getElementById("menu-toggle");
const desplegables = document.querySelectorAll(".desplegable");
const colorunoLink = document.querySelector(".coloruno a");
const colordosLink = document.querySelector(".colordos a");

desplegables.forEach(function (desplegable) {
    const desplegableLink = desplegable.querySelector("a");
    desplegableLink.addEventListener("click", function () {
        if (window.innerWidth <= 1170) {
            menuToggle.checked = false;
        }
    });
});

colorunoLink.addEventListener("click", function () {
    if (window.innerWidth <= 1170) {
        menuToggle.checked = false;
    }
});

colordosLink.addEventListener("click", function () {
    if (window.innerWidth <= 1170) {
        menuToggle.checked = false;
    }
});






