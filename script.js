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

  document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const item = question.parentElement;
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('.faq-icon');
        const isActive = item.classList.contains('active');
        
        document.querySelectorAll('.faq-item').forEach(otherItem => {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-answer').style.maxHeight = "0";
          otherItem.querySelector('.faq-icon').textContent = "+";
        });

        if (!isActive) {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + "px";
          icon.textContent = "+";
        }
      });
    });
  });
const boxes = document.querySelectorAll(".box");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("left")) {
                entry.target.classList.add("show-left");
            }
            if (entry.target.classList.contains("right")) {
                entry.target.classList.add("show-right");
            }
            if (entry.target.classList.contains("up")) {
                entry.target.classList.add("show-up");
            }
            if (entry.target.classList.contains("down")) {
                entry.target.classList.add("show-down");
            }
        } else {
            entry.target.classList.remove("show-left");
            entry.target.classList.remove("show-right");
            entry.target.classList.remove("show-up");
            entry.target.classList.remove("show-down");
        }
    });
},{
    threshold:0.3
});
boxes.forEach((box)=>{
    observer.observe(box);
});


const doctors = document.querySelectorAll(".item");
const doctorObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            if(entry.target.classList.contains("left-doctor")){
                entry.target.classList.add("show-left-doctor");
            }
            if(entry.target.classList.contains("right-doctor")){
                entry.target.classList.add("show-right-doctor");
            }
        }
        else{
            entry.target.classList.remove("show-left-doctor");
            entry.target.classList.remove("show-right-doctor");
        }
    });
},{
    threshold:0.3
});
doctors.forEach((doctor)=>{
    doctorObserver.observe(doctor);
});

  
