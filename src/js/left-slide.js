let leftSlideContainer = document.querySelector('.container-left-slide')
let burgerOpen = document.querySelector('.btn--burger')
let burgerClose = leftSlideContainer.querySelector('.btn--burger-close')

console.log(leftSlideContainer)

burgerClose.addEventListener('click', () => {
  leftSlideContainer.classList.add('container-left-slide--close')
})

burgerOpen.addEventListener('click', () => {
  leftSlideContainer.classList.remove('container-left-slide--close')
})
