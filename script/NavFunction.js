function NavFunction() {
	var x = document.getElementById('nav-Top')
	if (x.className === 'topnav') {
		x.className += ' responsive'
	} else {
		x.className = 'topnav'
	}
}
