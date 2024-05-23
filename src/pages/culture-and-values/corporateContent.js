const corporateContent = (arr) => {
    return `
    <div class="grid md:grid-cols-2 gap-8">
    ${arr.map((item) => {
        return`
        <div>
            <img src="${item.img}" alt="" class="w-full" />
            <div class="lg:w-[266px] lg:h-[380px] ml-[26px] whitespace-normal">
            <h1 class="sodan font-semibold text-lg my-3">${item.title}</h1>
            <p class="mb-5 text-[#757575]">
                ${item.text}
            </p>
            <a href="${item.link}">
                <button
                class="rounded-full border-solid border px-4 py-1 font-semibold border-[#00754a] hover:bg-[#ebf3f1] text-[#00754a]">
                Learn more
                </button>
            </a>
            </div>
        </div>    
        `
    }).join("")}
    </div>
    `
}

const corporateContentArr = [
{
    img : "../../images/careers/victoria1.webp",
    title : "Opportunity for all",
    text : `As a leader in hiring great talent, Starbucks has and will always
    look to create opportunities for our partners and customers in the
    communities we serve. Our goals are focused on hiring more
    Opportunity Youth, refugees, veterans and military spouses. To date,
    we have hired over 40,000 Veterans and military spouses since 2013.`,
    link : "../social-impact/people.html"
},
{
    img : "../../images/careers/house.webp",
    title : "Greener retail",
    text : `Starbucks is building and operating stores with an aim to minimize
    our environmental footprint with ambitious goals for 2020 and
    beyond. We plan to build and operate 10,000 greener retail stores,
    improve the recyclability of our cup and invest in 100% renewable
    energy.`,
    link : "../social-impact/planet.html"
},
{
    img : "../../images/careers/fruit.webp",
    title : "Sustainable coffee",
    text : `Starbucks® coffee is verified 99% ethically sourced. We are working
    with other industry leaders to make coffee the first sustainable
    agricultural product. We plan to invest in training and financing
    for coffee farmers, and providing 100 million coffee trees by 2025.`,
    link : ""
},
{
    img : "../../images/careers/teamwork.webp",
    title : "Strengthening Communities",
    text : `Each Starbucks® store is a part of a community, and we’re committed
    to strengthening neighborhoods wherever we do business. We plan to
    rescue 100% of food available to donate by 2020 in U.S.
    company-owned stores and have 100% of our stores worldwide
    participating in community service annually by 2020.`,
    link : ""
}
]
class CorporateContent extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = corporateContent(corporateContentArr);
    }
}

customElements.define("corporate-content", CorporateContent);