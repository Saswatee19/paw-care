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
}, 2000)

// form validation

let form = document.querySelector("form");
let nm = document.querySelector("#name");
let phn = document.querySelector("#phn");
let msg = document.querySelector("#msg");

form.addEventListener('submit', (dets)=>{
    dets.preventDefault();
    let isValid = true;
    if(nm.value.length <= 2){
        document.querySelector(".error1").style.display = "initial";
        isValid = false;
    }if(phn.value.length != 10){
        document.querySelector(".error2").style.display = "initial";
        isValid = false;
    }if(msg.value.length > 200){
        document.querySelector(".error3").style.display = "initial";
        isValid = false;
    }if(isValid) {
        document.querySelector(".confirm").style.display = "flex";
        setTimeout(()=>{
            document.querySelector(".confirm").style.display = "none";
        },5000);
        document.querySelector(".error1").style.display = "none";
        document.querySelector(".error2").style.display = "none";
        document.querySelector(".error3").style.display = "none";
        form.reset();
    }
    
});
