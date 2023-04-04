// For home page animation
var typed = new Typed(".multiple-text", {
    strings: ["Data Scientist","Machine Learner",
    "DevOps Engineer", "Software Developer"],
    typeSpeed: 50,
    backspeed: 100,
    backDelay: 1000,
    loop: true
  });


// For Scroll to top button and changing color of navbar while scrolling
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    document.body.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    document.body.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}


// For Dark and Light Mode Settings
let darkmode = document.querySelector("#darkmode");
darkmode.onclick = function() {
  document.body.classList.toggle("dark-theme");
  if(darkmode.classList.contains('bx-moon'))
    darkmode.classList.replace('bx-moon','bx-sun');
  else
    darkmode.classList.replace('bx-sun','bx-moon');

}


// For highlighting the active section when clicked
var btnContainer = document.getElementById("navlinks");
var btns = btnContainer.getElementsByClassName("link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}