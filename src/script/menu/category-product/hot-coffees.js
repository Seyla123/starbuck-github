const hotCoffeeProducts = [
	{
		sectionTitle: 'Americanos',
		products: [
			{
				name: 'Caffe Americano',
			},
		],
	},

	{
		sectionTitle: 'Brewed Coffees',
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
			{
				name: 'Featured Decaf Roast Decaf Pike Place Roast',
			},
			{
				name: 'Veranda Blend Clover Vertica',
			},
			{
				name: 'Featured Medium Roast Pike Place Roast',
			},
			{
				name: 'Featured Decaf Roast Decaf Pike Place Roast',
			},
			{
				name: 'Featured Decaf Roast Decaf Pike Place Roast',
			},
			{
				name: 'Veranda Blend Clover Vertica',
			},
			{
				name: 'Featured Medium Roast Pike Place Roast',
			},
			{
				name: 'Featured Decaf Roast Decaf Pike Place Roast',
			},
			{
				name: 'Featured Decaf Roast Decaf Pike Place Roast',
			},
			{
				name: 'Veranda Blend Clover Vertica',
			},
			{
				name: 'Featured Medium Roast Pike Place Roast',
			},
			{
				name: 'Featured Decaf Roast Decaf Pike Place Roast',
			},
			{
				name: 'Featured Decaf Roast Decaf Pike Place Roast',
			},
			{
				name: 'Veranda Blend Clover Vertica',
			},
			{
				name: 'Featured Medium Roast Pike Place Roast',
			},
			{
				name: 'Featured Decaf Roast Decaf Pike Place Roast',
			},
			{
				name: 'Featured Decaf Roast Decaf Pike Place Roast',
			},
		],
	},

	{
		sectionTitle: 'Cappuccinos',
		products: [
			{
				imgUrl: '../',
				name: 'Cappuccino',
			},
		],
	},

	{
		sectionTitle: 'Espresso Shots',
		products: [
			{
				imgUrl: '../',
				name: 'Espresso',
			},
			{
				imgUrl: '../',
				name: 'Espresso Con Panna',
			},
		],
	},

	{
		sectionTitle: 'Flat Whites',
		products: [
			{
				imgUrl: '../',
				name: 'Flat White',
			},
			{
				imgUrl: '../',
				name: 'Honey Almondmilk Flat WHite',
			},
		],
	},

	{
		sectionTitle: 'Lattes',
		products: [
			{
				imgUrl: '../',
				name: 'Lavender Oatmilk Latte',
			},
			{
				imgUrl: '../',
				name: 'Oleato Caffe Latte with Oatmilk',
			},
			{
				imgUrl: '../',
				name: 'Pistachino Latte',
			},
			{
				imgUrl: '../',
				name: 'Lavender Oatmilk Latte',
			},
			{
				imgUrl: '../',
				name: 'Oleato Caffe Latte with Oatmilk',
			},
			{
				imgUrl: '../',
				name: 'Pistachino Latte',
			},
		],
	},

	{
		sectionTitle: 'Macchiatos',
		products: [
			{
				imgUrl: '../',
				name: 'Lavender Oatmilk Latte',
			},
			{
				imgUrl: '../',
				name: 'Oleato Caffe Latte with Oatmilk',
			},
		],
	},

	{
		sectionTitle: 'Mochas',
		products: [
			{
				imgUrl: '../',
				name: 'Lavender Oatmilk Latte',
			},
			{
				imgUrl: '../',
				name: 'Oleato Caffe Latte with Oatmilk',
			},
		],
	},

	{
		sectionTitle: 'Coffee Travelers',
		products: [
			{
				imgUrl: '../',
				name: 'Lavender Oatmilk Latte',
			},
			{
				imgUrl: '../',
				name: 'Guatemala Huehuetenango Clover® Starbucks Reserve®',
			},
			{
				imgUrl: '../',
				name: 'Lavender Oatmilk Latte',
			},
			{
				imgUrl: '../',
				name: 'Oleato Caffe Latte with Oatmilk',
			},
		],
	},
];
let productCount = 1;

const totalProductsCount = hotCoffeeProducts.reduce(
	(acc, section) => acc + section.products.length,
	0
);

const createHotCoffeeProducts = (title) => {
	return `
      <div id="hotCoffeesProduct" class="max-w-[1500px] ">
			<p class="text-sm md:text-md text-gray-500 font-semibold">
				Menu / <span class="text-black">${title}</span>
			</p>
			<h2 class="md:mt-8 mt-4 font-bold text-xl lg:text-3xl">${title}</h2>
			<!-- Drink -->
         ${hotCoffeeProducts
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
											if (productCount === 25) {
												productCount = 1;
											}
											const imgSrc = `../../images/menu/hot-drink-img/p${productCount++}.jpg`;
											return `
                     <a href="../../pages/product/product_detail.html?6" class="h-full w-full flex flex-col items-center gap-4">
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

class HotCoffeesProduct extends HTMLElement {
	connectedCallback() {
		const title = this.getAttribute('title');
		this.innerHTML = createHotCoffeeProducts(title);
	}
}

customElements.define('hot-coffee-products-component', HotCoffeesProduct);
