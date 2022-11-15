

/* ---- menu hamburguesa ---- */
// selector
var menu = document.querySelector('.hamburger');

// metodo
function toggleMenu (event) {
	this.classList.toggle('is-active');
	document.querySelector( ".menuppal" ).classList.toggle("is_active");
	event.preventDefault();
}

// evento
menu.addEventListener('click', toggleMenu, false);
