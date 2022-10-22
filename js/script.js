// (Event) Burger listener
const burger = document.querySelector(".burger");
const curtain = document.querySelector(".curtain");
const list = document.querySelector(".curtain__list");
const burgerClose = document.querySelector(".burger-close");
const listLi = document.querySelector(".list-item-contact");


burger.addEventListener("click", function(event) {
    curtain.classList.add("curtain_active");
    list.classList.add("curtain__list_active");
});

burgerClose.addEventListener("click", function(event) {    
    curtain.classList.remove("curtain_active");
    list.classList.remove("curtain__list_active");
});

listLi.addEventListener("click", function(event) {    
    curtain.classList.remove("curtain_active");
    list.classList.remove("curtain__list_active");
});


// (Event) Scroll listener
const buttonUp = document.querySelector(".button-up");

window.addEventListener("scroll", function(event) {
    if (window.scrollY >= 1100) {
        buttonUp.style.display = "flex";
    } else {
        buttonUp.style.display = "none";
    }
});