const flag = (arr) => {
    return `
    <div class="grid min-[480px]:grid-cols-2 gap-6 p-3 py-4">
    ${arr.map((item)=>{
        return `
        <div class="flex cursor-pointer items-center h-[112px] p-2 hover:bg-[#edebe9] duration-300 gap-5 rounded-lg">
        <img src="${item.img}" alt="" class="w-[80px]">
        <h1 class="text-slate-800 sodan text-[18px] sodan tracking-wide">${item.flagName}</h1>
    </div>
        `
    }).join('')}

    </div>
    `
}
const flagArr = [{
    img:"../../images/careers/australia.webp",
    flagName:"Careers in Australia",
},
{
    img:"../../images/careers/austria.png",
    flagName:"Careers in Austria",
},
{
    img:"../../images/careers/brazil.webp",
    flagName:"Careers in Brazil",
},
{
    img:"../../images/careers/canada.webp",
    flagName:"Careers in Canada",
},
{
    img:"../../images/careers/chile.webp",
    flagName:"Careers in Chile",
},
{
    img:"../../images/careers/china.webp",
    flagName:"Careers in China",
},
{
    img:"../../images/careers/france.png",
    flagName:"Careers in France",
},
{
    img:"../../images/careers/germany.png",
    flagName:"Careers in Germany",
},
{
    img:"../../images/careers/singapore.webp",
    flagName:"Careers in Singapore",
},
{
    img:"../../images/careers/switzerland.png",
    flagName:"Careers in Switzerland",
},
{
    img:"../../images/careers/thailand.png",
    flagName:"Careers in Thailand",
},
{
    img:"../../images/careers/Uk.webp",
    flagName:"Careers in UK",
},
{
    img:"../../images/careers/usa.webp",
    flagName:"Careers in USA",
},
]
class FlagContent extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = flag(flagArr);
    }
}
customElements.define("flag-content", FlagContent);