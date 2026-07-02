//hamburger logic


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

///preloader logic

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

//faq slide logic

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

  //some animation logic
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




// audio logic

// Audio logic
document.addEventListener("preloaderFinished", () => {

    const audio = document.getElementById("meowAudio");

    function playAudio() {

        console.log("playing...");

        audio.play()
        .then(() => {
            console.log("Played!");

            sessionStorage.setItem("hasMeowed","true");

            window.removeEventListener("wheel", playAudio);
            window.removeEventListener("click", playAudio);
            window.removeEventListener("scroll", playAudio);
        })
        .catch(err=>{
            console.log(err);
        });
    }

    if (sessionStorage.getItem("hasMeowed")) return;

    window.addEventListener("wheel", playAudio,{once:true});
    window.addEventListener("click", playAudio,{once:true});
    window.addEventListener("scroll", playAudio,{once:true});

});
//localStorage replaced with sessionStorage so that the db gets cleared on every relaod and hasMeow gets erased..learn this

//counter

    document.addEventListener("preloaderFinished", () => {
  const counters = [
    { element: document.querySelector("#pets-num"), target: 900, suffix: "+" },
    { element: document.querySelector("#doctors-num"), target: 120, suffix: "+" },
    { element: document.querySelector("#centers-num"), target: 90, suffix: "+" },
    { element: document.querySelector("#years-num"), target: 50, suffix: "+" }
  ];

  counters.forEach(counter => {
    if (!counter.element) return; 

    let currentCount = 0;
    
    
    const customIntervalSpeed = 3000 / counter.target; //did this to measure which num needs what time interval for incrementing bcoz large num should hike in less time 

    const intervalId = setInterval(() => {
      currentCount++;

      if (currentCount >= counter.target) {
        counter.element.textContent = counter.target + counter.suffix;
        clearInterval(intervalId);
      } else {
        counter.element.textContent = currentCount + counter.suffix;
      }
    }, customIntervalSpeed); 
  });
});