let bird = document.querySelector(".bird");
let dog = document.querySelector(".dog");
let cat = document.querySelector(".cat");

let tm1 = setTimeout(()=>{
    bird.style.display = "none"
}, 800);

let tm2 = setTimeout(()=>{
    dog.style.display = "flex"
}, 800);

let tm3 =setTimeout(()=>{
    dog.style.display = "none"
}, 1600);

let tm4 = setTimeout(()=>{
    cat.style.display = "flex"
}, 1600);

let preloader = document.querySelector(".preloader");

setTimeout(()=>{
    preloader.classList.add('preloader-hidden');
    AOS.init({ 
        duration: 1200, 
        once: true, 
        startEvent: 'preloaderFinished' 
    }); 

    
    document.dispatchEvent(new Event('preloaderFinished')); 
}, 2000);

let hamburger_icon = document.querySelector(".hamburger-icon");
let close_icon = document.querySelector(".close-icon");
let hamburger_text = document.querySelector(".hamburger-text");

hamburger_icon.addEventListener('click', ()=>{
    hamburger_text.classList.add('open');
    hamburger_icon.classList.add('fade_out');
})
close_icon.addEventListener('click', () => {
    hamburger_text.classList.remove('open');
    hamburger_icon.classList.remove('fade_out');
});