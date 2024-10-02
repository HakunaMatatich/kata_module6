const swiper = function () {
  new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },

    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: true,
    loopedSlides: 10
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth
  if (width < 768) {
    swiper()
  }
})

let showButtonBrands = document.querySelector('.swiper-brands__show-all-btn')
let hideButtonBrands = document.querySelector('.swiper-brands__hide-btn')
let swiperWrapperBrands = document.querySelector('.swiper-brands__wrapper')

showButtonBrands.addEventListener('click', () => {
  swiperWrapperBrands.classList.remove(
    'swiper-brands__wrapper--overflow-hidden'
  )
  showButtonBrands.classList.add('btn--hidden')
  hideButtonBrands.classList.remove('btn--hidden')
})

hideButtonBrands.addEventListener('click', () => {
  swiperWrapperBrands.classList.add('swiper-brands__wrapper--overflow-hidden')
  showButtonBrands.classList.remove('btn--hidden')
  hideButtonBrands.classList.add('btn--hidden')
})

let showButtonRepair = document.querySelector('.swiper-repair__show-all-btn')
let hideButtonRepair = document.querySelector('.swiper-repair__hide-btn')
let swiperWrapperRepair = document.querySelector('.swiper-repair__wrapper')

showButtonRepair.addEventListener('click', () => {
  swiperWrapperRepair.classList.remove(
    'swiper-repair__wrapper--overflow-hidden'
  )
  showButtonRepair.classList.add('btn--hidden')
  hideButtonRepair.classList.remove('btn--hidden')
})

hideButtonRepair.addEventListener('click', () => {
  swiperWrapperRepair.classList.add('swiper-repair__wrapper--overflow-hidden')
  showButtonRepair.classList.remove('btn--hidden')
  hideButtonRepair.classList.add('btn--hidden')
})

let showButtonMain = document.querySelector('.read-next__show-all-btn')
let hideButtonMain = document.querySelector('.read-next__hide-btn')
// let swiperWrapperMain = document.querySelector('.swiper-repair__wrapper')

showButtonMain.addEventListener('click', () => {
  // swiperWrapperMain.classList.remove('swiper-repair__wrapper--overflow-hidden')
  showButtonMain.classList.add('btn--hidden')
  hideButtonMain.classList.remove('btn--hidden')
})

hideButtonMain.addEventListener('click', () => {
  // swiperWrapperRepair.classList.add('swiper-repair__wrapper--overflow-hidden')
  showButtonMain.classList.remove('btn--hidden')
  hideButtonMain.classList.add('btn--hidden')
})
