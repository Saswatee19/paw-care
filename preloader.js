let bird = document.querySelector(".bird");
let dog = document.querySelector(".dog");
let cat = document.querySelector(".cat");

let tm1 = setTimeout(()=>{
    bird.style.display = "none"
}, 300);

let tm2 = setTimeout(()=>{
    dog.style.display = "flex"
}, 300);

let tm3 =setTimeout(()=>{
    dog.style.display = "none"
}, 600);

let tm4 = setTimeout(()=>{
    cat.style.display = "flex"
}, 800);


let preloader = document.querySelector(".preloader");

setTimeout(()=>{
    preloader.classList.add('preloader-hidden');
}, 2000)
