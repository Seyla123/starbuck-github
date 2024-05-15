const createProductCard = (img, isRevers = false, backgroundColor, textColor, title, description, buttonTitle, buttonLink) => {
    // Determine the flex direction based on isRevers flag
    return `
    <div class="flex flex-col md:${isRevers ? "flex-row-reverse" : "flex-row"} ${backgroundColor}">
    <div class="flex-1 flex items-center">
      <img
        class="max-w-full h-auto"
        src="${img}"
        alt="${title}"
        loading="lazy"
      />
    </div>
    <div
      class="w-full flex flex-1 justify-center items-center"
    >
      <div class="max-w-[80%] sodan flex flex-col justify-center items-center md:gap-8 text-center ${textColor} py-8 px-12">
        <h3 class="font-semibold text-3xl lg:text-5xl">${title}</h3>
        <p class="text-base md:text-xl lg:text-2xl leading-10 font-medium">
          ${description}
        </p>
        <div class="flex gap-4 items-center text-sm font-bold">
            <a href="${buttonLink}" class="h-3 p-4 items-center flex justify-center rounded-full outline outline-1 hover:bg-black/5 duration-300">${buttonTitle}</a>
        </div>
      </div>
    </div>
  </div>
      `;
};

export class ProductCard extends HTMLElement {
    // Lifecycle method called when the element is added to the DOM
    connectedCallback() {
        // Retrieve attributes or set default values
        const img = this.getAttribute('img') || '../../images/home/home (1).jpg';
        const isRevers = this.getAttribute('isRevers') === 'true';
        const backgroundColor = this.getAttribute('backgroundColor') || 'bg-white';
        const textColor = this.getAttribute('textColor') || 'text-black';
        const title = this.getAttribute('title') || 'No Title';
        const description = this.getAttribute('description') || 'No description provided.';
        const buttonTitle = this.getAttribute('buttonTitle') || 'Click Me';
        const buttonLink = this.getAttribute('buttonLink') || '#';
        // Set the inner HTML of the custom element
        this.innerHTML = createProductCard(img, isRevers, backgroundColor, textColor, title, description, buttonTitle, buttonLink);
    }
}

// Define a custom element named 'product-card-component'
customElements.define('product-card-component', ProductCard);

