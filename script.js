document.addEventListener("DOMContentLoaded", function () {

    console.log("Sheakh Super Shop Website Loaded 🚀");

    /* =========================
       MOBILE MENU TOGGLE
    ========================= */

    const nav = document.querySelector("nav ul");
    const header = document.querySelector("header");

    // Create mobile menu button
    const menuBtn = document.createElement("div");
    menuBtn.innerHTML = "☰";
    menuBtn.style.fontSize = "28px";
    menuBtn.style.cursor = "pointer";
    menuBtn.style.color = "#fff";

    header.querySelector(".container").appendChild(menuBtn);

    let isOpen = false;

    menuBtn.addEventListener("click", function () {
        if (!isOpen) {
            nav.style.display = "flex";
            nav.style.flexDirection = "column";
            nav.style.position = "absolute";
            nav.style.top = "70px";
            nav.style.right = "20px";
            nav.style.background = "#0d47a1";
            nav.style.padding = "10px";
            nav.style.borderRadius = "8px";

            isOpen = true;
        } else {
            nav.style.display = "none";
            isOpen = false;
        }
    });

    /* =========================
       SMOOTH SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    /* =========================
       SIMPLE ANIMATION ON SCROLL
    ========================= */

    const cards = document.querySelectorAll(".category-card, .product-card, .why-card, .info-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.2
    });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = "translateY(20px)";
        card.style.transition = "0.5s";
        observer.observe(card);
    });

});