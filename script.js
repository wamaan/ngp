var toggleButton = document.getElementsByClassName("toggle-button")[0]
var navbarLinks = document.getElementsByClassName("navbar-links")[0]
var navbar = document.getElementsByClassName("navbar")[0]
var navtext = document.getElementsByClassName("navtext")[0]
toggleButton.addEventListener("click", () => {
        navbarLinks.classList.toggle("active")
        navbar.classList.toggle("active")
        navtext.classList.toggle("active")
})
