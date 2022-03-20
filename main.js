// Hamburger Menu JS

const burgerMenu = document.querySelector(".burger_menu");
const headerMenu = document.querySelector("header");
burgerMenu.addEventListener("click", () => {
  headerMenu.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});

// Accordion JS

const faqs = document.querySelectorAll(".faq")

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active")
    })
})