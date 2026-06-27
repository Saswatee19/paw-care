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