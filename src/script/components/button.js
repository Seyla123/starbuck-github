// Function to create a button element with customizable properties
export const createButton = (title, btnColor, textColor, hoverColor, btnLink) => {
    return  `
    <a href="${btnLink}">
        <button class="h-3 p-4 flex justify-center items-center duration-300 ${btnColor} rounded-full outline outline-1 ${textColor} hover:${hoverColor}">
            ${title}
        </button>
    </a>
    `;
}

// Define a custom button element that inherits from HTMLElement
export class Button extends HTMLElement {
    constructor(){
        super()
    }
    connectedCallback() {
        const title = this.getAttribute("title") || 'Sign in';
        const btnColor = this.getAttribute("btnColor") || '';
        const textColor = this.getAttribute("textColor") || '';
        const hoverColor = this.getAttribute("hoverColor") || 'bg-gray-200';
        const btnLink = this.getAttribute("btnLink") || '#';
        this.innerHTML = createButton(title, btnColor, textColor, hoverColor, btnLink);
    }
}

customElements.define('button-component', Button);
