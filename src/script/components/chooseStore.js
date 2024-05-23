const createChooseStore = ()=>{
    return `
    <div class="bg-[#1e3932] w-full h-[74px] lg:h-[94px] sticky bottom-0 flex justify-center mt-10">
  <div class="w-full p-6 md:p-0 md:w-[80%] h-full flex justify-center">
    <div class="flex  justify-between gap-2 w-full h-full items-center">
      <a href="../../pages/find-a-store/find-a-store.html" class="hidden  md:flex flex-col gap-2 lg:ml-40">
        <div class="flex justify-between w-60">
          <div class="flex flex-col items-stretch text-base">
            <span class="text-gray-300">For item availability</span>
            <strong class="text-white">Choose a store</strong>
            
          </div>
          <div class="flex items-center justify-end">
            <i class="fa-solid fa-chevron-down text-white text-[10px]"></i>
            
          </div>
        </div>
        <hr class="border-gray-400">
      </a>
      <a href="../../pages//find-a-store/find-a-store.html" class=" md:hidden w-full h-full">
        <div class="flex justify-between">
            <span class="text-gray-300 text-sm">For item availability</span>
            <span class="flex items-center">
                <i class="fa-solid fa-chevron-down text-white text-[10px]"></i>
            </span>
        </div>
        <hr class="border-gray-500">
      </a>
      <button class=" h-full flex items-center justify-end">
        <!-- <p class="text-xl text-white font-bold absolute flex right-[160px]">2</p> -->
        <span class="relative">
            <svg class="w-9 h-9 " viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_176_817)">
            <g clip-path="url(#clip1_176_817)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.10216 5.11537C7.30829 2.59922 9.57225 0.617188 12.3347 0.617188C15.0972 0.617188 17.3612 2.59922 17.5673 5.11537H19.9473C20.9499 5.11537 21.3134 5.21976 21.6799 5.41577C22.0464 5.61179 22.3341 5.89943 22.5301 6.26595C22.7261 6.63247 22.8305 6.99602 22.8305 7.99857V20.9746C22.8305 21.9771 22.7261 22.3407 22.5301 22.7072C22.3341 23.0737 22.0464 23.3614 21.6799 23.5574C21.3134 23.7534 20.9499 23.8578 19.9473 23.8578H4.72219C3.71964 23.8578 3.35609 23.7534 2.98957 23.5574C2.62305 23.3614 2.33541 23.0737 2.13939 22.7072C1.94338 22.3407 1.83899 21.9771 1.83899 20.9746V7.99857C1.83899 6.99602 1.94338 6.63247 2.13939 6.26595C2.33541 5.89943 2.62305 5.61179 2.98957 5.41577C3.35609 5.21976 3.71964 5.11537 4.72219 5.11537H7.10216ZM8.59456 5.11537H16.0749C15.9465 3.37924 14.3427 1.96664 12.3347 1.96664C10.3268 1.96664 8.72298 3.37924 8.59456 5.11537ZM4.77999 6.61476C4.27871 6.61476 4.09693 6.66696 3.91367 6.76497C3.73042 6.86297 3.58659 7.0068 3.48858 7.19005C3.39058 7.37331 3.33838 7.55509 3.33838 8.05637V20.9168C3.33838 21.4181 3.39058 21.5998 3.48858 21.7831C3.58659 21.9664 3.73042 22.1102 3.91367 22.2082C4.09693 22.3062 4.27871 22.3584 4.77999 22.3584H19.8895C20.3908 22.3584 20.5726 22.3062 20.7558 22.2082C20.9391 22.1102 21.0829 21.9664 21.1809 21.7831C21.2789 21.5998 21.3311 21.4181 21.3311 20.9168V8.05637C21.3311 7.55509 21.2789 7.37331 21.1809 7.19005C21.0829 7.0068 20.9391 6.86297 20.7558 6.76497C20.5726 6.66696 20.3908 6.61476 19.8895 6.61476H4.77999Z" fill="white" fill-opacity="0.7"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_176_817">
            <rect width="23.9903" height="23.9903" fill="white" transform="translate(0.339905 0.617188)"/>
            </clipPath>
            <clipPath id="clip1_176_817">
            <rect width="23.9903" height="23.9903" fill="white" transform="translate(0.339722 0.617188)"/>
            </clipPath>
            </defs>
        </svg>
         </span>
        
            
      </button>
    </div>
  </div>
</div>

    `
}

export class ChooseStore extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = createChooseStore();
    }
}
customElements.define('choose-store-component', ChooseStore);