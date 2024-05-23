const snacksSweetsProducts = [
	{
		sectionTitle: 'Biscotti & Cookies',
		products: [
			{
				name: 'Madeleines',
			},
			{
				name: 'White Hot Chocolate',
			},
			{
				name: 'Madeleines',
			},
			{
				name: 'Madeleines',
			},
		],
	},

	{
		sectionTitle: 'Chocolates & Candy',
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
		sectionTitle: 'Fruit & Nuts',
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
			{
				name: 'Steamed Apple Juice',
			},
		],
	},
	{
		sectionTitle: 'Gum & Mints',
		products: [
			{
				name: 'Caramel Apple Spice',
			},
		],
	},
	{
		sectionTitle: 'Popcorn & Chips',
		products: [
			{
				name: 'Caramel Apple Spice',
			},
			{
				name: 'Caramel Apple Spice',
			},
			{
				name: 'Caramel Apple Spice',
			},
			{
				name: 'Caramel Apple Spice',
			},
		],
	},
	{
		sectionTitle: 'Meat & Cheese',
		products: [
			{
				name: 'Caramel Apple Spice',
			},
			{
				name: 'Caramel Apple Spice',
			},
		],
	},
	{
		sectionTitle: 'Snack Bars',
		products: [
			{
				name: 'Caramel Apple Spice',
			},
			{
				name: 'Caramel Apple Spice',
			},
			{
				name: 'Caramel Apple Spice',
			},
			{
				name: 'Caramel Apple Spice',
			},
			{
				name: 'Caramel Apple Spice',
			},
			{
				name: 'Caramel Apple Spice',
			},
			{
				name: 'Caramel Apple Spice',
			},
		],
	},
	{
		sectionTitle: 'Snack Bars',
		products: [
			{
				name: 'Caramel Apple Spice',
			},
		],
	},
];

const createSnacksSweetsProduct = (title) => {
	let productCount = 1;

	return `
         <div id="hotCoffeesProduct" class="max-w-[1500px] ">
            <p class="text-sm md:text-md text-gray-500 font-semibold">
                  Menu / <span class="text-black">${title}</span>
            </p>
            <h2 class="md:mt-8 mt-4 font-bold text-xl lg:text-3xl">${title}</h2>
            <!-- Drink -->
            ${snacksSweetsProducts
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
																			const imgSrc = `../../images/menu/snacks-img/p${productCount++}.jpg`;

																			return `
                                             <a href="../../pages/product/product_detail.html?0" class="h-full w-full flex flex-col items-center gap-4">
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

class SnacksSweetsProduct extends HTMLElement {
	connectedCallback() {
		const title = this.getAttribute('title');
		this.innerHTML = createSnacksSweetsProduct(title);
	}
}

customElements.define('snacks-sweets-component', SnacksSweetsProduct);
