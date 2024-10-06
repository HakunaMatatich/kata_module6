let leftSlideContainer = document.querySelector('.container-left-slide')
let burgerOpen = document.querySelector('.btn--burger')
let burgerClose = leftSlideContainer.querySelector('.btn--burger-close')
let mainContainer = document.querySelector('.main-content-container')

let callBtnLeftSide = leftSlideContainer.querySelector('.call-btn-left-side')
let callBtnMain = mainContainer.querySelector('.call-btn-main')
let chatBtnLeftSide = leftSlideContainer.querySelector('.chat-btn-left-side')
let chatBtnMain = mainContainer.querySelector('.chat-btn-main')

let feedbackContainer = document.querySelector('.container-feedback')
let feedbackBtnClose = document.querySelector('.feedback__btn-close')

let callbackContainer = document.querySelector('.callback-container')
let callbackBtnClose = document.querySelector('.callback__btn-close')

let upperMenuLeftSide = mainContainer.querySelector('.upper-menu--left-side')
let upperMenuCental = mainContainer.querySelector('.upper-menu__container')

// left side module
burgerClose.addEventListener('click', () => {
  leftSlideContainer.classList.add('container-left-slide--close')
  mainContainer.classList.remove('main-content-container--blur')
  document.body.classList.remove('body--overflow-hidden')
})

burgerOpen.addEventListener('click', () => {
  leftSlideContainer.classList.remove('container-left-slide--close')
  mainContainer.classList.add('main-content-container--blur')
  document.body.classList.add('body--overflow-hidden')
})

// feedback module
feedbackBtnClose.addEventListener('click', () => {
  feedbackContainer.classList.add('feedback--close')
  mainContainer.classList.remove('main-content-container--blur')
  document.body.classList.remove('body--overflow-hidden')
})

callBtnMain.addEventListener('click', () => {
  feedbackContainer.classList.remove('feedback--close')
  mainContainer.classList.add('main-content-container--blur')
  callbackContainer.classList.add('callback--close')
  document.body.classList.add('body--overflow-hidden')
})

callBtnLeftSide.addEventListener('click', () => {
  feedbackContainer.classList.remove('feedback--close')
  mainContainer.classList.add('main-content-container--blur')
  callbackContainer.classList.add('callback--close')
  document.body.classList.add('body--overflow-hidden')
})

// callback module
callbackBtnClose.addEventListener('click', () => {
  callbackContainer.classList.add('callback--close')
  mainContainer.classList.remove('main-content-container--blur')
  document.body.classList.remove('body--overflow-hidden')
})

chatBtnMain.addEventListener('click', () => {
  callbackContainer.classList.remove('callback--close')
  mainContainer.classList.add('main-content-container--blur')
  feedbackContainer.classList.add('feedback--close')
  document.body.classList.add('body--overflow-hidden')
})

chatBtnLeftSide.addEventListener('click', () => {
  callbackContainer.classList.remove('callback--close')
  mainContainer.classList.add('main-content-container--blur')
  feedbackContainer.classList.add('feedback--close')
  document.body.classList.add('body--overflow-hidden')
})

// close modules
mainContainer.addEventListener('click', (e) => {
  const withinBoundariesLeftSide = e.composedPath().includes(upperMenuLeftSide)
  const withinBoundariesCentral = e.composedPath().includes(upperMenuCental)
  if (!withinBoundariesLeftSide && !withinBoundariesCentral) {
    leftSlideContainer.classList.add('container-left-slide--close')
    mainContainer.classList.remove('main-content-container--blur')
    feedbackContainer.classList.add('feedback--close')
    callbackContainer.classList.add('callback--close')
    document.body.classList.remove('body--overflow-hidden')
  }
})
