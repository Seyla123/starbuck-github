const cardArray = [
    {
        imgURL: "../../images/social-impact/planet-hamburger.png",
        text: `Expanding <span class="font-extrabold text-xl">plant-based menu options</span>`
    },
    {
        imgURL: "../../images/social-impact/planet-cup.png",
        text: `Shifting away from single-use to <span class="font-extrabold text-xl">reusable packaging</span>`
    },
    {
        imgURL: "../../images/social-impact/planet-plants.png",
        text: `Investing in <span class="font-extrabold text-xl"> regenerative agriculture, reforestation, forest conservation and water replenishment</span> in our supply chain`
    },
    {
        imgURL: "../../images/social-impact/planet-trash.png",
        text: `Working on better ways to <span class="font-extrabold text-xl">manage our waste</span>`
    },
    {
        imgURL: "../../images/social-impact/planet-store.png",
        text: `Innovating with more <span class="font-extrabold text-xl">plant-based menu options</span>operations, manufacturing and delivery`
    }
];

const cardPlanet = (imgURL,text) => {
    return `
        <div class="text-[#1f3932] my-12">
            <div class="flex flex-col md:flex-row md:h-auto mx-auto items-center h-90">
                <div class="w-[100%] md:w-[50%]">
                    <a href=""><img class="w-full" src="${imgURL}" alt=""></a>
                </div>
                <div class="max-w-[90%] md:w-[40%] flex flex-col items-start justify-center py-8">
                    <h1 class="font-normal text-xl tracking-[0.04em]">${text}</h1>
                </div>
            </div>
        </div>
    `;
};

class CardPlanet extends HTMLElement {
    connectedCallback(){
        cardArray.map((item)=>{
            this.innerHTML += cardPlanet(item.imgURL,item.text);
        })


    }
}

customElements.define("card-planet", CardPlanet);
