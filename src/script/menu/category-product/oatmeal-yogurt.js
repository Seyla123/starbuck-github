const oatmealYogurtProducts = [
	{
		products: [
			{
				name: 'Chicken, Maple Butter & Egg Sandwich',
			},
			{
				name: 'White Hot Chocolate',
			},
			
		],
	},
];

const createOatmealYogurtProduct = (title) => {
	let productCount = 1;

	return `
         <div id="hotCoffeesProduct" class="max-w-[1500px] ">
            <p class="text-sm md:text-md text-gray-500 font-semibold">
                  Menu / <span class="text-black">${title}</span>
            </p>
            <h2 class="md:mt-8 mt-4 font-bold text-xl lg:text-3xl">${title}</h2>
            <!-- Drink -->
            ${oatmealYogurtProducts
							.map((product) => {
								return `
                        <div class="mt-10">
                              
                              <div class="grid md:grid-cols-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-10 gap-4 gap-y-14 my-14">
                                 <!-- Card -->
                                 ${product.products
																		.map((item) => {
																			const imgSrc = `../../images/menu/oatmeal-img/p${productCount++}.jpg`;

																			return `
                                             <a href="../../pages/product/product_detail.html?5" class="h-full w-full flex flex-col items-center gap-4">
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

class OatmealYogurtProduct extends HTMLElement {
	connectedCallback() {
		const title = this.getAttribute('title');
		this.innerHTML = createOatmealYogurtProduct(title);
	}
}

customElements.define('oatmeal-yogurt-component', OatmealYogurtProduct);
