import { textContent } from "../planet/textContent.js";

class TextContent extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        const title = this.getAttribute('title');
        const text = this.getAttribute('text');
        const button = this.getAttribute('button');
        this.innerHTML = textContent(title,text,button)
    }
}
customElements.define("text-content-people", TextContent)