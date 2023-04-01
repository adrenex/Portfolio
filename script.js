var typed = new Typed(".multiple-text", {
    strings: ["Data Scientist","Machine Learner",
    "DevOps Engineer", "Software Developer"],
    typeSpeed: 50,
    backspeed: 100,
    backDelay: 1000,
    loop: true
  });


let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    scrollBtn.style.display = "block";
  }else{
    scrollBtn.style.display = "none";
  }

}


document.addEventListener('scroll', () =>{
  const navbar = document.querySelector('#navbar');

  if(window.screenY > 0){
    navbar.classList.add('.scrolled');
  }else{
    navbar.classList.remove('.scrolled');
  }
})


let darkmode = document.querySelector("#darkmode");
     
darkmode.onclick = function() {
  document.body.classList.toggle("dark-theme");
  if(darkmode.classList.contains('bx-moon'))
    darkmode.classList.replace('bx-moon','bx-sun');
  else
    darkmode.classList.replace('bx-sun','bx-moon');

}


