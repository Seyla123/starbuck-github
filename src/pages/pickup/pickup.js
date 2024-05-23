

const createPickup = (title,text,img,button,btnColor,reverse) => {
    
    return `
        <div class="py-4 flex flex-col  md:${reverse ? 'flex-row-reverse' : 'flex-row'} mt-4" >
            <div class="w-full md:w-full">
                <img src=" ${img}" class="block w-full">
            </div>

            <div  class="bg-[#1c3a33] text-center w-full md:w-full flex justify-center items-center">
                <div class="max-w-md mx-auto md:max-w-2xl text-white">
                    <div class="p-4 text-start ">
                        <div class="text-2xl md:text-4xl font-bold"> ${title}</div>
                        <p class="py-5 mt-2 text-[19px] md:text-xl"> ${text}</p>
                        ${button ? `<button class="${btnColor ? 'bg-white text-green-700' : 'bg-green-700 text-white'}  text-[16px] font-medium  p-2 px-4 rounded-full">${button}</button>` : ''}
                    </div>
                </div>
            </div>
        </div>
        `

}
const pickupCardArr = [{
title: "Classic Café",
img: "../../images/order/pickup-image-1.webp",
text: 'The original, iconic “third place”. A place to sit and stay or order ahead and get on your way. <a class="underline hover:no-underline" href="../../pages/find-a-store/find-a-store.html"> Find a Classic Café</a>, your home away from home.',
button : false,

},
{
title: "drive-thru",
img: "../../images/order/pickup-image-2.webp",
text: 'Drive up, check out the menu and order from the comfort of your car. You can also order ahead of time on the app—just let the barista know when you pull in.',
button : false,

},
{
title: "Pick Up",
img: "../../images/order/pickup-image-3.webp",
text: 'Stores exclusively designed for mobile orders and quick pick up without the wait. Order ahead using the Starbucks app, grab your items and get back to your day!',
button: "Learn more",

},
{
title: "Starbucks Reserve® and Starbucks Reserve® Roastery",
img: "../../images/order/pickup-image-4.webp",
text: "can’t-miss experience for anyone with a passion for coffee. Here you'll find exclusive <a class='underline hover:no-underline' href=''>Starbucks Reserve® </a>coffees, signature cocktails, decadent dishes and hands-on experiences.</p> ",
button : "Learn more",
btnColor:"bg-white text-",

},

{
title: "Delivery",
img: "../../images/order/pickup-image-5.webp",
text: 'Enjoy the ultimate convenience when you have your Starbucks order delivered right to you using our partners like <a class="underline hover:no-underline" href="https://www.doordash.com/sdl/Starbucks/?ignore_splash_experience=true&utm_source=Enterprise&utm_medium=Enterprise&utm_campaign=CX_US_EP_EP_EP_PAR_CUSXXX__+Starbucks_Delivery_Landing_Page_Dec2023">DoorDash</a> and<a class="underline hover:no-underline" href="https://www.ubereats.com/brand/starbucks?&utm_campaign=bd-starbucks-US-evergreendelivery_Owned_landingpage_US&utm_source=starbucks&utm_medium=Web&publisher=Uber%20Eats%20-%20BD%20(Biz%20Dev)%20-%20Partnerships&publisher_sub_campaign_name=bd-starbucks-US-evergreendelivery_Owned_landingpage_US"> Uber Eats*.</a>',
button : "Learn more",

},
{
title: "Groceries, Airports, Hotels & More",
img: "../../images/order/pickup-image-6.webp",
text: 'TWherever your day takes you, find a Starbucks® café on your route. From errands to airports, your next coffee run is just around the corner.',

},
]
class PickUpCard extends HTMLElement {
constructor() {
    super()
}
connectedCallback() {
    let isRevers = false;
    pickupCardArr.map((item)=>{
        this.innerHTML += createPickup(item.title,item.text,item.img,item.button,item.btnColor,isRevers)
        isRevers = !isRevers
    })
    
}
}

customElements.define('pickup-card', PickUpCard);