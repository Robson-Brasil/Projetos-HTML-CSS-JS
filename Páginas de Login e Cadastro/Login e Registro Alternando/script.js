window.addEventListener('load', function () {
	document.body.classList.add('hide')
})



const allLink = document.querySelectorAll('a')

allLink.forEach(item=> {
	item.addEventListener('click', function (e) {
		e.preventDefault()
		document.body.classList.remove('hide')
		setTimeout(()=> {
			window.location.href = this.href
		}, 500)
	})
})