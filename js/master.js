// top scroll
document.addEventListener('scroll', () => {
  const span = document.querySelector('.up');
  span.style.display = window.scrollY >= 100 ? 'block' : 'none';
});

document.querySelector('.up').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll',  function() {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY > 600) { 
      navbar.classList.add('scrolled'); 
  } else {
      navbar.classList.remove('scrolled'); 
  }
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function() {
      
      document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
      this.classList.add('active');
  });
});





let nums =document.querySelectorAll('.nums .num');
let section = document.querySelector('.counter');
let started = false;


window.onscroll = function (){
    if(window.scrollY >=section.offsetTop){
        if(!started){
        nums.forEach((num) => startConunter(num));
            
        }
        started = true;}

    }




 function startConunter(el){
     let goal =el.dataset.goal;
     let count =setInterval(()=>{
    el.textContent++;    
     if(el.textContent==goal){
       clearInterval(count)
   }
    

 },2000/goal); 

}







  
 
 
    // JavaScript to highlight the active link in the navbar
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
          currentSection = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    });


 

