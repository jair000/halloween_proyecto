const navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

let navMenu = document.getElementById('nav-menu')

if (navToggle) {
  navToggle.addEventListener("click",()=>{
    navMenu.classList.add("show-menu")
  })
}

if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu")
    })
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  navMenu.classList.remove("show-menu")
}
navLink.forEach(nav => nav.addEventListener("click", linkAction))

// Nav active

let sections = document.querySelectorAll("section[id]")
function scrollActive() {
    let scrollY = window.pageYOffset
    sections.forEach(current => {
      let sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop -58,
      sectionId = current.getAttribute("id")
      if (scrollY>sectionTop && scrollY<= sectionTop+sectionHeight) {
        document.querySelector(".nav__menu a[href*=" + sectionId +"]").classList.add("active-link")
      } else{
        document.querySelector(".nav__menu a[href*=" + sectionId +"]").classList.remove("active-link")
      }
    })
}
window.addEventListener("scroll", scrollActive)

// ! SwiperJS

let homeSwiper = new Swiper('.home-swiper',{
  // Optional parameters
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

let newSwiper = new Swiper('.new-swiper',{
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 15,
})

// ! Scroll up

function scrollUp() {
    let scrollup = document.getElementById("scroll-up")
    if (this.scrollY>= 500){
      scrollup.classList.add("show-scroll")
    } else {
      scrollup.classList.remove("show-scroll")
    }
}
window.addEventListener("scroll", scrollUp)

// ! Scroll reveal

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2700,
  delay: 150
})

sr.reveal(`.home-swiper,.category,.new-swiper,.newsletter__container,.trick__container,.about__container`)
sr.reveal(`.category__data,.trick__content,.footer__content`,{interval: 150})
sr.reveal(`.about__data,.discount__img`,{origin:"left"})
sr.reveal(`.about__img,.discount__data,.footer__img-one,.footer__img-two`,{origin: "right"})