// NAVBAR
const navToggle = document.querySelector('.nav__toggle')
const navMenuWrapper = document.querySelector('.nav__menu__wrapper')

navToggle.addEventListener('click', function () {
	navMenuWrapper.classList.toggle('show')
})







// PAGE TRANSITION
const allLink = document.querySelectorAll('a')
const pageTransition = document.querySelector('.page__transition')

window.addEventListener('load', function () {
	pageTransition.classList.add('hide')
})

allLink.forEach(item=> {
	item.addEventListener('click', function (e) {
		e.preventDefault()
		pageTransition.classList.remove('hide')
		setTimeout(()=> {
			window.location.href = this.href
		}, 1200)
	})
})