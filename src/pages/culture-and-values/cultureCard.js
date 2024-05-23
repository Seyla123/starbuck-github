const  cultureCard = (arr) => {
    return `
    <div class="grid min-[480px]:grid-cols-2 gap-8 bg-white">
    ${arr.map((item) => {
        return `
        <div class="bg-white rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-4 flex flex-col gap-4">
            <h1 class="sodan tracking-wider text-2xl">${item.title}</h1>
            <p class="text-[#757575]">
                ${item.text1}
            </p>
            <p class="text-[#757575]">
                ${item.text2}
            </p>
            <p class="text-[#757575]">
                ${item.text3}
            </p>
        </div>
        `
    }).join("")}
    </div>
    `
}

const cultureCardArr = [
{
    title : "Craft",
    text1 : "We delight in the rigor of the details—no matter what our job is",
    text2 : "We learn and teach in the pursuit of growth",
    text3 : "We deliver excellence with passion and creativity"
},
{
    title : "Courage",
    text1 : "We embrace the difficult conversations, with respect, to make us better",
    text2 : "We pursue audacious ideas beyond our comfort zone",
    text3 : "We do the right thing, even when it's hard"
},
{
    title : "Results",
    text1 : "We consistently achieve our goals with focus, integrity, and drive",
    text2 : "We continuously innovate to stay ahead",
    text3 : "We exceed the expectations of the people we serve"
},
{
    title : "Belongings",
    text1 : "We actively listen and connect with warmth and transparency",
    text2 : "We recognize every person for who they are",
    text3 : "We treat each other with dignity and care"
}
]

class CultureCard extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        this.innerHTML = cultureCard(cultureCardArr);
    }
}

customElements.define("culture-card", CultureCard);