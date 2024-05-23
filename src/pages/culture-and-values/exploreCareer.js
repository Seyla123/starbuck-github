const exploreCareers = (arr) => {
    return `
    <div class="grid min-[480px]:grid-cols-2 items-start gap-8 mt-5">
    ${arr.map((item) => {
        return `
        <div class="bg-white rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] flex flex-col items-start overflow-hidden">
            <img src="${item.img}" alt="" />
            <div class="flex flex-col gap-2 items-start p-4">
                <h1 class="roboto tracking-wider text-[21.5px]">${item.title}</h1>
                <h2 class="mb-2 text-[#757575] text-[16px]">
                ${item.text}
                </h2>
                <button
                class="rounded-full border-solid border px-4 py-1 font-semibold border-[#2b8b68] text-[#00754a] hover:bg-[#ebf3f1]"
                >
                Learn more
                </button>
            </div>
        </div>
        
        `
    }).join("")}
    </div>
    `
}

const exploreCareersArr = [
{
    img : "../../images/careers/three staffs.webp",
    title : "Retail Stores",
    text : "Create the Starbucks Experience for our customers",
},
{
    img : "../../images/careers/staff and coffee.webp",
    title : "Corporate Roles",
    text : `Support our brand’s growth and results`,
},
{
    img : "../../images/careers/manufacturing.webp",
    title : "Manufacturing and Distribution",
    text : "Produce and ship products that delight customers",
},
{
    img : "../../images/careers/staff daniel.webp",
    title : "Starbucks Reserve & Princi Production Kitchens",
    text : "Ignite a culinary career with coffee and craft",
}
]

class ExploreCareers extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = exploreCareers(exploreCareersArr);
    }
}

customElements.define("explore-career-content", ExploreCareers)