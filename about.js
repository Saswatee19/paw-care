document.addEventListener("DOMContentLoaded", () => {
    let hamburger_icon = document.querySelector(".hamburger-icon");
    let close_icon = document.querySelector(".close-icon");
    let hamburger_text = document.querySelector(".hamburger-text");
    let card = document.querySelector(".card"); // Ensured the dot (.) is here

    // Only attach events if the elements actually exist on the current page
    if (hamburger_icon && close_icon && hamburger_text && card) {
        hamburger_icon.addEventListener('click', () => {
            hamburger_text.classList.add('open');
            hamburger_icon.classList.add('fade_out');
            card.classList.add('fade_out');
        });

        close_icon.addEventListener('click', () => {
            hamburger_text.classList.remove('open');
            hamburger_icon.classList.remove('fade_out');
            card.classList.remove('fade_out');
        });
    }

    // --- Preloader Logic ---
    let bird = document.querySelector(".bird");
    let dog = document.querySelector(".dog");
    let cat = document.querySelector(".cat");
    let preloader = document.querySelector(".preloader");

    if (bird) setTimeout(() => { bird.style.display = "none"; }, 800);
    if (dog) setTimeout(() => { dog.style.display = "flex"; }, 800);
    if (dog) setTimeout(() => { dog.style.display = "none"; }, 1600);
    if (cat) setTimeout(() => { cat.style.display = "flex"; }, 1600);
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('preloader-hidden');
        }, 2000);
    }
});
