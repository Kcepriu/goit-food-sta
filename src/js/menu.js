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

for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() 
    
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}
})();
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
