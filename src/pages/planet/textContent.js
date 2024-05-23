const descriptArray = [
    {
        title: "PROGRESS TOWARD OUR COMMITMENTS",
        text: `Starbucks is committed to transparency. Learn more about our commitments to the planet and our progress on our Environmental and Social Impact Reporting Hub.`,
        button: "Learn more"
    },
    {
        title: "ETHICAL SOURCING STANDARDS",
        text: `Track the responsible ways we produce and purchase our coffee, tea, cocoa and manufactured goods.`,
        button: "Learn more"
    },
    {
        title: "ALL THE LATEST",
        text: `Stay up to date with Starbucks commitment to environmental sustainability.`,
        button: "Learn more"
    }
];

export const textContent = (title, text, button) => {
    return`
    <div class="my-16">
        <div class="md:px-[23%] text-center text-emerald-950 my-5 bg-white">
            <h1 class="text-3xl lg:text-5xl leading-tight font-extrabold tracking-[0.20em]">${title}</h1>
            <h1 class="lg:text-xl tracking-[0.05em] my-5 font-normal leading-loose text-lg">${text}</h1>
                <a href="https://stories.starbucks.com/stories/people/">
                ${button? `<button class="border-emerald-950 hover:bg-gray-200 transition delay-20 border-[1px] mx-1 px-5 py-1 rounded-full">Learn more</button>`
                    :''
                }
                
            </a>
        </div>
    </div>
`
}
class TextContentComponent extends HTMLElement {
    constructor(){
        super()
    }
    connectedCallback() {
        descriptArray.map((item)=>{
            this.innerHTML += textContent(item.title,item.text,item.button);
        })
    }
}

customElements.define("text-content-component", TextContentComponent);
