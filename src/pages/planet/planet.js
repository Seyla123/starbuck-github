import { contentPeople } from "../people/img-content.js"
class CardContent extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        const imgUrl = this.getAttribute('imgUrl');
        const text = this.getAttribute('text');
        const title = this.getAttribute('title');
        const flex = "flex-row";
        const button = this.getAttribute('button');
        this.innerHTML = contentPeople(imgUrl,title,text,flex,button)
    }
}
customElements.define("card-component", CardContent);   