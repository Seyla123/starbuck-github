const firstStep = (arr) => {
    return `
    <div class="grid min-[480px]:grid-cols-2 gap-4">
    ${arr.map((item) => {
        return`
        <div class="flex items-center text-start h-[112px] p-4 hover:bg-[#edebe9] rounded-lg">
            <img
                class="w-[80px]"
                src="${item.img}"/>
            
            <h1 class="px-3 py-4 sodan text-[18px] tracking-wider">${item.text}</h1>
        </div>
        `
    }).join("")}
    </div>
    `
}

const firstStepArr = [
{
    img : "../../images/careers/computer-man.webp",
    text : "Apply for retail jobs",

},
{
    img : "../../images/careers/graduation-purple.webp",
    text : "Learn more about ASU's degree offerings",
  
},
{
    img : "../../images/careers/short-hair.webp",
    text : "Download SCAP overview",
}
]
class FirstStep extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = firstStep(firstStepArr);
    }
}

customElements.define("first-step-content", FirstStep);