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
let form = document.querySelector(".appointment-form");
let nm = document.querySelector("#fullName");
let phn = document.querySelector("#phone");
let petName = document.querySelector("#petName");

form.addEventListener('submit', (dets)=>{
    dets.preventDefault();
    let isValid = true;

    document.querySelector(".error1").style.display = "none";
    document.querySelector(".error2").style.display = "none";
    document.querySelector(".error3").style.display = "none";

    if (nm.value.length <= 2) {
        document.querySelector(".error1").style.display = "block";
        isValid = false;
    }
    
    if (phn.value.length != 10) {
        document.querySelector(".error2").style.display = "block";
        isValid = false;
    }

    if (petName.value.length < 3) {
        document.querySelector(".error3").style.display = "block";
        isValid = false;
    }

    
    if (isValid) {
        let confirmBox = document.querySelector(".confirm");
        confirmBox.style.display = "flex";
        
        setTimeout(() => {
            confirmBox.style.display = "none";
        }, 5000);

        form.reset();
    }
});

// let hamburger_icon = document.querySelector(".hamburger-icon");
// let close_icon = document.querySelector(".close-icon");
// let hamburger_text = document.querySelector(".hamburger-text");
// let card = document.querySelector(".card");

// hamburger_icon.addEventListener('click', ()=>{
//     hamburger_text.classList.add('open');
//     hamburger_icon.classList.add('fade_out');
//     card.classList.add('fade_out');
// })
// close_icon.addEventListener('click', () => {
//     hamburger_text.classList.remove('open');
//     hamburger_icon.classList.remove('fade_out');
//     // card.classList.remove('fade_out');
// });