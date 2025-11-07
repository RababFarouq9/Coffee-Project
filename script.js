const navLinks=document.querySelectorAll(".nav-menu .nav-link")
const menuOpenButton=document.getElementById("menu-open-button");
menuOpenButton.addEventListener("click",()=>{
   document.body.classList.toggle("show-mobile-menu") 

})

const menuCloseButton=document.getElementById("menu-close-button");
menuCloseButton.addEventListener("click",()=>menuOpenButton.click())
 navLinks.forEach(link => {
   link.addEventListener("click",()=>menuOpenButton.click())
 });



//*Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {

  loop: true,
  grabCursor:true,
  spaceBetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // *Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
//*responsive
  breakpoints:{
   0:{
      slidesPerView:1
   },
   768:{
      slidesPerView:2
   },
   1024:{
      slidesPerView:3
   }
  }
});


//*select all bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

  allBullets.forEach(bullet => {
    bullet.addEventListener("click", e => {
      const sectionSelector = e.currentTarget.dataset.section;
      document.querySelector(sectionSelector).scrollIntoView({
        behavior: "smooth"
      });
    });
  });