//efeito hidden dos titulos e paragrafos
window.sr = ScrollReveal({ reset: true })
sr.reveal('.titlle', { rotate: { x: 10, y: 0, z: 0 }, duration: 3000 })
sr.reveal('.efeito-p', { rotate: { x: 10, y: 0, z: 0 }, duration: 4000 })
sr.reveal('.card', { rotate: { x: 0, y: 100, z: 0 }, duration: 2000 })
sr.reveal('.img-foguete', { rotate: { x: 0, y: 0, z: 15 }, duration: 2500 })
sr.reveal('.img-projeto', { rotate: { x: 0, y: 5, z: 0 }, duration: 3500 })

window.onscroll = function () {
  scrollFunction()
}
//Efeito Scroll Navgation
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    var menu = (document.getElementsByClassName(
      'container'
    )[0].style.backgroundColor = 'black')
  } else {
    var menu = (document.getElementsByClassName(
      'container'
    )[0].style.backgroundColor = '')
  }
}
