// Function to create a button element with customizable properties
const createButton = (title, btnLink,customClass) => {
    return  `
    <a href="${btnLink}">
        <button class="h-3 p-4 flex justify-center items-center duration-300  rounded-full outline outline-1  hover:bg-gray-200 ${customClass}">
            ${title}
        </button>
    </a>
    `;
}
// Define a custom button element that inherits from HTMLElement
export class button extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render(){
        const title = this.getAttribute("title") || 'Sign in';
        const btnLink = this.getAttribute("btnLink") || '#';
        const customClass = this.getAttribute("customClass")
        this.innerHTML = createButton(title, btnLink,customClass);
    }
}

customElements.define('button-component', button);


