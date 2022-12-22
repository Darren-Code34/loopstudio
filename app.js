const header = document.getElementById("header")
const hamburger = document.getElementById("hamburger-menu")
const close = document.getElementById("close-menu")
const menu = document.getElementById("menu")
const headline = document.getElementById("headline")
console.log(headline)

function showMenu(){
    hamburger.style.display = "none"
    header.style.background = "hsl(0, 0%, 0%)"
    close.style.display = "block"
    menu.style.display = "block"
    headline.style.display = "none"
}

function closeMenu(){
    close.style.display = "none"
    hamburger.style.display = "block"
    header.style.backgroundImage = "url(./images/mobile/image-hero.jpg)"
    menu.style.display = "none"
    headline.style.display = "block"
}

hamburger.addEventListener("click", showMenu)
close.addEventListener("click", closeMenu)