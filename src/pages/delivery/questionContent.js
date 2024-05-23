const questionContent= (arr) => {
    return `
    <div class="bg-[#f3f0eb] flex-col justify-center text-center">
    <div class="max-w-md mx-auto md:max-w-2xl">
        <div class=" font-semibold  text-[#1e3934] text-[24px] py-10">
            <h2 class="">Questions? We’ve got answers.</h2>
        </div>
        ${arr.map((item) =>{
            return `
            <div class=" text-[#1e3934] text-[19px] ">
            <div class="font-semibold ">
                <h3>${item.question}</h3>
            </div>
            <div class="mt-2">
                <h5>${item.answer}</h5>
            </div>
            <br>
        </div>
            `
        }).join('')}
  
    </div>
  
  </div>
    `
  }

const questionArr = [{
    question : "How do I order Starbucks® delivery?",
    answer : 'Place an order through the DoorDash app <a class="underline hover:no-underline" href="https://www.doordash.com/sdl/Starbucks/?ignore_splash_experience=true&utm_source=Enterprise&utm_medium=Enterprise&utm_campaign=CX_US_EP_EP_EP_PAR_CUSXXX__+Starbucks_Delivery_Landing_Page_Dec2023">here </a>or check the Uber Eats app <a class="underline hover:no-underline" href="https://www.ubereats.com/brand/starbucks?&utm_campaign=bd-starbucks-US-evergreendelivery_Owned_landingpage_US&utm_source=starbucks&utm_medium=Web&publisher=Uber%20Eats%20-%20BD%20(Biz%20Dev)%20-%20Partnerships&publisher_sub_campaign_name=bd-starbucks-US-evergreendelivery_Owned_landingpage_US">here </a> for availability.',
},
{
    question : "Can I get the full menu of items available at my local Starbucks® store delivered?",
    answer : 'To maintain the high standards of quality and consistency we know you expect from us, we’ve optimized our menu for Starbucks® delivery. Consequently, select items are currently unavailable for Starbucks® delivery.',
},
{
    question : "Can I pay for Starbucks® delivery with my Starbucks card or through the Starbucks app?",
    answer : 'Paying for delivery with a Starbucks Card or app isn’t supported at this time. We encourage you to place an order for Starbucks® delivery using the DoorDash app or the Uber Eats app (both available in select markets); you can always use the Starbucks app to order ahead with Mobile Order and Pay and pick up your treats at a participating store.',
},
{
    question : "Will I earn stars when I order Starbucks® delivery?",
    answer : 'Starbucks® delivery is currently not eligible for Starbucks® Rewards benefits. Learn more about Starbucks® Rewards benefits here.',
},
{
    question : "Is Starbucks® delivery available near me?",
    answer : 'To find out if Starbucks® delivery is available where you are, check the DoorDash app here or check the Uber Eats app here',
},
{
    question : "What do I do if I have an issue with my Starbucks® delivery?",
    answer : 'Please reach out to DoorDash customer service at 1-855-431-0459 or Uber Eats customer service at 1-800-253-9377 , or go to the Help section in the DoorDash or Uber Eats apps..',
},
{
    question : "What if I want to pick up my Starbucks® delivery order in the store?",
    answer : "Starbucks® delivery isn't available for pick up in a Starbucks store. However, you can still order on the Starbucks® app with Mobile Order and Pay and pick up your favorite treats at a participating store. Click here to learn more.",
},
]
  class Question extends HTMLElement {
    constructor(){
      super()
    }
    connectedCallback(){
      this.innerHTML= questionContent(questionArr)
    }
  }
  
  customElements.define("question-content", Question)