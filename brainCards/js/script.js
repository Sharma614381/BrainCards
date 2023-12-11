import { createHeader } from './components/createHeader.js';

const initApp = () => {
	const headerParent = document.querySelector('.header');
	const app = document.querySelector('#app');

	const headerObj = createHeader(headerParent);
	console.log('headerObj:', headerObj);

	const returnIndex = e => {
		// отменяет действие браузера по умолчанию при нажатии на ссылку
		e.preventDefault();
		headerObj.updateHeaderTitle('Категории')
	}

	headerObj.headerLogoLink.addEventListener('click', returnIndex);
// Пишем функцию сразу внутри, так как переиспользовать ее не будем
	headerObj.headerBtn.addEventListener('click', () => {
		headerObj.updateHeaderTitle('Новая категория');
	});
};

initApp();












