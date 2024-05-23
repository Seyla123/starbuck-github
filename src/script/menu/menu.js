

// import * as bakery from "./category-product/bakery.js"
// import * as bottledBeverage from "./category-product/bottled-beverages.js"
// import * as coldCoffee from "./category-product/cold-coffees.js";
// import * as coldCup from "./category-product/cold-cups.js"
// import * as frappuccino from "./category-product/frappuccino-blended-beverages.js"
// import * as hotBeverage from "./category-product/hot-beverages.js"
// import * as hotBreakfast from "./category-product/hot-breakfast.js"
// import * as hotCoffee from "./category-product/hot-coffees.js"
// import * as hotTea from "./category-product/hot-teas.js"
// import * as icedTea from "./category-product/iced-teas.js"
// import * as lunch from "./category-product/lunch.js"
// import * as mugs from "./category-product/mugs.js"
// import * as oatmealYogurt from "./category-product/oatmeal-yogurt.js"
// import * as other from "./category-product/other.js"
// import * as snackSweet from "./category-product/snacks-sweets.js"
// import * as starbuckRefresher from "./category-product/starbucks-refresher-beverages.js"
// import * as tumblers from "./category-product/tumblers.js"
// import * as viaInstant from "./category-product/via-instant.js"
// import * as wholeBean from "./category-product/whole-bean.js"



// menuContent

const productBtns = document.querySelectorAll('.productBtn');
const productComponents = document.querySelectorAll('.productComponent');

productComponents.forEach((component) => {
	if (component.id === 'mainComponent') {
		component.style.display = 'block';
	} else {
		component.style.display = 'none';
	}
});

productBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		const targetComponentId = btn.getAttribute('data-target');
		showProductComponent(targetComponentId);
		hideOtherProductComponents(targetComponentId);
	});
});

const showProductComponent = (componentId) => {
	const component = document.getElementById(componentId);
	console.log(component);
	if (component) {
		component.style.display = 'block';
	}
};

const hideOtherProductComponents = (componentIdToShow) => {
	productComponents.forEach((component) => {
		if (component.id !== componentIdToShow) {
			component.style.display = 'none';
		}
	});
};



