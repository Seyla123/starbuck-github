const createDelivery = (arr)=>{
    return `
    <div class="py-3 flex flex-col md:flex-row gap-10 ">
    ${arr.map((item)=>{
        return `
        <div class="bg-[#d4e9e2] w-full md:w-1/2 flex py-10 items-center justify-center text-center">
        <div class="max-w-md mx-auto md:max-w-2xl text-white">
            <img src="${item.img}"  alt="${item.title}">
            <div class="flex items-center justify-center text-center">
                <a href="${item.link}">
                    <button class="bg-[#d4e9e2] hover:bg-slate-300 outline outline-1 text-black font-bold py-2 px-4 rounded-full">Order now</button>
                </a>
                
            </div>
        </div>
    </div>
        `
    }).join('')}

    
    
</div>
    `
}
const deliveryCardArr = [{
    title:"doordash",
    img:"../../images/order/doordash logo.webp",
    link:"https://www.doordash.com/sdl/Starbucks/?ignore_splash_experience=true&utm_source=Enterprise&utm_medium=Enterprise&utm_campaign=CX_US_EP_EP_EP_PAR_CUSXXX__+Starbucks_Delivery_Landing_Page_Dec2023"
},
{
    title:'UberEats',
    img:"../../images/order/UberEats logo.webp",
    link:"https://www.ubereats.com/brand/starbucks?&utm_campaign=bd-starbucks-US-evergreendelivery_Owned_landingpage_US&utm_source=starbucks&utm_medium=Web&publisher=Uber%20Eats%20-%20BD%20(Biz%20Dev)%20-%20Partnerships&publisher_sub_campaign_name=bd-starbucks-US-evergreendelivery_Owned_landingpage_US"
},
]
class DeliveryCard extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = createDelivery(deliveryCardArr)
    }
}

customElements.define('delivery-card', DeliveryCard);