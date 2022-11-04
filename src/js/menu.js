(() => {
	const menuBtnRef = document.querySelector("[data-menu-button]");
	const mobileMenuRef = document.querySelector("[data-menu]");
	const pageBody = document.querySelector(".body");

	menuBtnRef.addEventListener("click", () => {
		const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;

		menuBtnRef.classList.toggle("is-open");
		menuBtnRef.setAttribute("aria-expanded", !expanded);

		mobileMenuRef.classList.toggle("is-open");
		pageBody.classList.toggle("no-scroll");
	});

	const anchors = document.querySelectorAll('a[href^="#"]')

	for (let anchor of anchors) {
		anchor.addEventListener("click", function (e) {
			e.preventDefault()
    
			const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    
			document.querySelector(goto).scrollIntoView({
				behavior: "smooth",
				block: "start"
			})
		})
	}
	
	if (mobileMenuRef && menuBtnRef) {
	
	mobileMenuRef.querySelectorAll('.menu__item').forEach(link => {
		link.addEventListener('click', () => {
			mobileMenuRef.classList.remove('is-open')
			menuBtnRef.classList.remove('is-open')
		})
	})
}
})();

let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
})

// const menu = document.querySelector('.menu__body')
// const menuBtn = document.querySelector('.menu__icon')

// const body = document.body;

// if (menu && menuBtn) {
// 	menuBtn.addEventListener('click', e => {
// 		menu.classList.toggle('active')
// 		menuBtn.classList.toggle('active')
// 		body.classList.toggle('lock')
// 	})

// 	menu.addEventListener('click', e => {
// 		if (e.target.classList.contains('menu__body')) {
// 			menu.classList.remove('active')
// 			menuBtn.classList.remove('active')
// 			body.classList.remove('lock')
// 		}
// 	})

// 	menu.querySelectorAll('.menu__link').forEach(link => {
// 		link.addEventListener('click', () => {
// 			menu.classList.remove('active')
// 			menuBtn.classList.remove('active')
// 			body.classList.remove('lock')
// 		})
// 	})
// }

//  мои попытки сделать норм закрытие меню,тут 3 варианта

// var block = document.getElementById('menuList');

// document.addEventListener('click', function(e) {
//   if (e.target.id != 'menuList') {
//     menu.classList.toggle('is-open');
//   }
// });
	
// const menu = document.querySelector('menu');
// document.addEventListener('click', (e) => {
//   const click = e.composedPath().includes(menu);
//   if ( click ) {
//     menu.classList.remove("is-open");
//   }
// })

	// pageBody.addEventListener('click', function () {
	// 	document.querySelector('.menu.is-open').classList.remove('is-open');
	// 	this.classList.remove('is-open');
	// 	bodyScrollLock.classList.remove('no-scroll');
	// });
