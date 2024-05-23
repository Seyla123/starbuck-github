const starbucksRefreshersBeveragesProducts = [
	{
		sectionTitle: 'Spicy Lemonades',
		products: [
			{
				name: 'Spicy Pineapple',
			},
			{
				name: 'Spicy Dragonfruit',
			},
			{
				name: 'Spicy Strawberry',
			},
		],
	},

	{
		sectionTitle: 'Lemonades and Frozen',
		products: [
			{
				name: 'Strawberry Açaí Lemonade Starbucks Refreshers® Beverage',
			},
			{
				name: 'Featured Medium Roast Pike Place Roast',
			},
			{
				name: 'Strawberry Açaí Lemonade Starbucks Refreshers® Beverage',
			},
			{
				name: 'Strawberry Açaí Lemonade Starbucks Refreshers® Beverage',
			},
			{
				name: 'Strawberry Açaí Lemonade Starbucks Refreshers® Beverage',
			},
			{
				name: 'Strawberry Açaí Lemonade Starbucks Refreshers® Beverage',
			},
		],
	},

	{
		sectionTitle: 'Coconutmilk Collection',
		products: [
			{
				name: 'Pink Drink Starbucks Refreshers Beverages',
			},
			{
				name: 'Pink Drink Starbucks Refreshers Beverages',
			},
			{
				name: 'Pink Drink Starbucks Refreshers Beverages',
			},
			{
				name: 'Pink Drink Starbucks Refreshers Beverages',
			},
			{
				name: 'Pink Drink Starbucks Refreshers Beverages',
			},
		],
	},

	{
		sectionTitle: 'Classics',
		products: [
			{
				name: 'Strawberry Acai Starbuck Refreshers Beverages',
			},
			{
				name: 'Strawberry Acai Starbuck Refreshers Beverages',
			},
			{
				name: 'Strawberry Acai Starbuck Refreshers Beverages',
			},
		],
	},
];

const createStarbucksRefreshersBeveragesProduct = (title) => {
	let productCount = 1;

	return `
         <div id="hotCoffeesProduct" class="max-w-[1500px] ">
            <p class="text-sm md:text-md text-gray-500 font-semibold">
                  Menu / <span class="text-black">${title}</span>
            </p>
            <h2 class="md:mt-8 mt-4 font-bold text-xl lg:text-3xl">${title}</h2>
            <!-- Drink -->
            ${starbucksRefreshersBeveragesProducts
							.map((product) => {
								return `
                        <div class="mt-10">
                              <h2 class="font-bold text-xl lg:text-3xl">${
																product.sectionTitle
															}</h2>
                              <hr class="mt-6 " />
                              <div class="grid md:grid-cols-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-10 gap-4 gap-y-14 my-14">
                                 <!-- Card -->
                                 ${product.products
																		.map((item) => {
																			const imgSrc = `../../images/menu/starbucks-refreshers-img/p${productCount++}.jpg`; // Update imgSrc
																			return `
                                             <a href="../../pages/product/product_detail.html?6" class="h-full w-full flex flex-col items-center gap-4">
                                                <div class="w-36 h-36 rounded-full overflow-hidden">
                                                      <img class="w-full h-full object-cover" src="${imgSrc}" alt="" />
                                                </div>
                                                <h4 class="text-lg lg:text-xl text-center">${item.name}</h4>
                                             </a>
                                          `;
																		})
																		.join(' ')}
                              </div>
                        </div>
                     `;
							})
							.join('')}
         </div>
      `;
};

class StarbucksRefreshersBeveragesProduct extends HTMLElement {
	connectedCallback() {
		const title = this.getAttribute('title');
		this.innerHTML = createStarbucksRefreshersBeveragesProduct(title);
	}
}

customElements.define(
	'starbucks-refresher-beverages-component',
	StarbucksRefreshersBeveragesProduct
);
