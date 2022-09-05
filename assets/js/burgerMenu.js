(function(){
	const list = document.querySelector('.menu__links');
	const menu = document.querySelector('.menu__hamburguer');

	const link = document.querySelectorAll('.menu__link')


	const open = document.querySelector('#open');
	const close = document.querySelector('#close')


	link.forEach((Element) => {
		Element.addEventListener('click', () => {
			openOrClose("", "icon_none");
			list.classList.toggle('menu__links--show');
		});
	});

	menu.addEventListener('click', ()=> {
		openOrClose("", 'icon_none');
		list.classList.toggle('menu__links--show');
	});

	function openOrClose(nameClassBtn, nameClassNone) {
		//variable auxiliar encargada de guardar la clase para verificar si es un icono o el otro
		const aux = open.classList.value;
		if (aux === nameClassBtn) {
				open.classList.add(nameClassNone);
				close.classList.remove(nameClassNone);
		} else {
				open.classList.remove(nameClassNone);
				close.classList.add(nameClassNone);
		}
	}

})();

