window.addEventListener("load", function(){
    AOS.init();
})



const toggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector('.nav-menu')


toggle.addEventListener("click", function(){
    navMenu.classList.toggle("show-menu")   
})



 

const navLink = document.querySelector(".nav-link")

function linkAction(){
    const navMenu = document.querySelector(".nav-menu")
    navMenu.classList.remove(".show-menu")
}

const linkColor = document.querySelectorAll(".nav-link")
   function colorLink(){
       if(linkColor){
           linkColor.forEach(L => L.classList.remove("active"))
           this.classList.add("active")
       }
   }

   linkColor.forEach(L => L.addEventListener("click",colorLink))

   
   // slide
   var swiper = new Swiper(".gallery-container", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });