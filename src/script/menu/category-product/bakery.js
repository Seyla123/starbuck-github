const bakeryProducts = [
	{
		sectionTitle: 'Bagels',
		products: [
			{
				name: 'Hot Chocolates',
			},
			{
				name: 'White Hot Chocolate',
			},
			{
				name: 'Hot Chocolates',
			},
		],
	},

	{
		sectionTitle: 'Cake Pops',
		products: [
			{
				name: 'Caramel Apple Spice',
			},
			{
				name: 'Steamed Apple Juice',
			},
			{
				name: 'Steamed Apple Juice',
			},
		],
	},

	{
		sectionTitle: 'Cookies, Brownies & Bars',
		products: [
			{
				name: 'Iced Chai Tea Latte',
			},
			{
				name: 'Pistachio Crème Frappuccino® Blended Beverage',
			},
			{
				name: 'Iced Chai Tea Latte',
			},
		],
	},

	{
		sectionTitle: 'Croissants',
		products: [
			{
				name: 'Iced Chai Tea Latte',
			},
			{
				name: 'Pistachio Crème Frappuccino® Blended Beverage',
			},
			{
				name: 'Iced Chai Tea Latte',
			},
		],
	},

	{
		sectionTitle: 'Loaves, Cakes & Buns',
		products: [
			{
				name: 'Iced Chai Tea Latte',
			},
			{
				name: 'Pistachio Crème Frappuccino® Blended Beverage',
			},
			{
				name: 'Iced Chai Tea Latte',
			},
			{
				name: 'Iced Chai Tea Latte',
			},
		],
	},

	{
		sectionTitle: 'Danishes & Doughnuts',
		products: [
			{
				name: 'Iced Chai Tea Latte',
			},
			{
				name: 'Pistachio Crème Frappuccino® Blended Beverage',
			},
			{
				name: 'Iced Chai Tea Latte',
			},
		],
	},

	{
		sectionTitle: 'Muffins & Scones',
		products: [
			{
				name: 'Iced Chai Tea Latte',
			},
			{
				name: 'Pistachio Crème Frappuccino® Blended Beverage',
			},
			{
				name: 'Iced Chai Tea Latte',
			},
		],
	},
];

const createBakeryProduct = (title) => {
	let productCount = 1;

	return `
         <div id="hotCoffeesProduct" class="max-w-[1500px] ">
            <p class="text-sm md:text-md text-gray-500 font-semibold">
                  Menu / <span class="text-black">${title}</span>
            </p>
            <h2 class="md:mt-8 mt-4 font-bold text-xl lg:text-3xl">${title}</h2>
            <!-- Drink -->
            ${bakeryProducts
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
																			const imgSrc = `../../images/menu/bakery-img/p${productCount++}.jpg`;

																			return `
                                             <a href="" class="h-full w-full flex flex-col items-center gap-4">
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

class BakeryProduct extends HTMLElement {
	connectedCallback() {
		const title = this.getAttribute('title');
		this.innerHTML = createBakeryProduct(title);
	}
}

customElements.define('bakery-component', BakeryProduct);
