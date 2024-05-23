const coldCoffeeProducts = [
	{
		sectionTitle: 'Cold Brews',
		products: [
			{
				name: 'Salted Caramel Cream Cold Brew',
			},
			{
				name: 'Salted Caramel Cream Cold Brew',
			},
			{
				name: 'Salted Caramel Cream Cold Brew',
			},
			{
				name: 'Salted Caramel Cream Cold Brew',
			},
			{
				name: 'Salted Caramel Cream Cold Brew',
			},
			{
				name: 'Salted Caramel Cream Cold Brew',
			},
			{
				name: 'Salted Caramel Cream Cold Brew',
			},
		],
	},

	{
		sectionTitle: 'Nitro Cold Brews',
		products: [
			{
				name: 'Featured Blonde Roast',
			},
			{
				name: 'Featured Medium Roast Pike Place Roast',
			},
			{
				name: 'Featured Dark Roast',
			},
		],
	},

	{
		sectionTitle: 'Iced Americano',
		products: [
			{
				name: 'Iced Caffe Americano',
			},
		],
	},

	{
		sectionTitle: 'Iced Coffees',
		products: [
			{
				name: 'Espresso',
			},
			{
				name: 'Espresso Con Panna',
			},
			{
				name: 'Espresso Con Panna',
			},
		],
	},

	{
		sectionTitle: 'Iced Shaken Espresso',
		products: [
			{
				name: 'Flat White',
			},
			{
				name: 'Honey Almondmilk Flat WHite',
			},
			{
				name: 'Flat White',
			},
			{
				name: 'Honey Almondmilk Flat WHite',
			},
		],
	},

	{
		sectionTitle: 'Iced Flat Whites',
		products: [
			{
				name: 'Lavender Oatmilk Latte',
			},
			{
				name: 'Oleato Caffe Latte with Oatmilk',
			},
		],
	},

	{
		sectionTitle: 'Iced Lattes',
		products: [
			{
				name: 'Lavender Oatmilk Latte',
			},
			{
				name: 'Oleato Caffe Latte with Oatmilk',
			},
			{
				name: 'Lavender Oatmilk Latte',
			},
			{
				name: 'Oleato Caffe Latte with Oatmilk',
			},
			{
				name: 'Lavender Oatmilk Latte',
			},
			{
				name: 'Oleato Caffe Latte with Oatmilk',
			},
		],
	},

	{
		sectionTitle: 'Iced Macchiatos',
		products: [
			{
				name: 'Lavender Oatmilk Latte',
			},
		],
	},

	{
		sectionTitle: 'Iced Mochas',
		products: [
			{
				name: 'Lavender Oatmilk Latte',
			},
			{
				name: 'Guatemala Huehuetenango Clover® Starbucks Reserve®',
			},
		],
	},
];
const createColdCoffeeProducts = (title) => {
	return `
      <div id="hotCoffeesProduct" class="max-w-[1500px] ">
			<p class="text-sm md:text-md text-gray-500 font-semibold">
				Menu / <span class="text-black">${title}</span>
			</p>
			<h2 class="md:mt-8 mt-4 font-bold text-xl lg:text-3xl">${title}</h2>
			<!-- Drink -->
         ${coldCoffeeProducts
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
											if (productCount === 18) {
												productCount = 1;
											}
											const imgSrc = `../../images/menu/hot-drink-img/p${productCount++}.jpg`;
											return `
                     <a href="../../pages/product/product_detail.html?1" class="h-full w-full flex flex-col items-center gap-4">
                     <div class="w-36 h-36 rounded-full overflow-hidden">
                        <img
                           class="w-full h-full object-cover"
                           src="${imgSrc}"
                           alt=""
                        />
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

class ColdCoffeeProduct extends HTMLElement {
	connectedCallback() {
		const title = this.getAttribute('title');
		this.innerHTML = createColdCoffeeProducts(title);
	}
}

customElements.define('cold-coffee-products-component', ColdCoffeeProduct);
