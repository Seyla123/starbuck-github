const contentArray = [
    {
        flex:"flex-row",
        image:"../../images/social-impact/people-1.png",
        title:"Inclusion & Diversity",
        text:"Our commitment to equal opportunity means cultivating an environment where differences are embraced and building a culture that fosters a sense of belonging.",
        button:"Find examples",
    },
    {
        // content image 2
        flex:"flex-row-reverse",
        image:"../../images/social-impact/people-2.png",
        title:"Opportunity",
        text:"We put our partners (employees) first, empowering them by providing meaningful opportunities to pursue their aspirations.",
        button:"Read Stories",
    },
    {
        flex:"flex-row",
        image:"../../images/social-impact/people-3.png",
        title:"Inclusion & Diversity",
        text:"Our commitment to equal opportunity means cultivating an environment where differences are embraced and building a culture that fosters a sense of belonging.",
        button:"Find examples",
    }
];


export const contentPeople = (image,title,text,flex,button) => {
    return `
    <div class="text-[#1f3932] my-9">
        <div class="flex flex-col md:${flex} mx-auto items-center h-90 bg-[#d4e9e2] md:h-auto">
            <div class="w-[100%] md:w-[50%]">
                <a class="w-full"><img class="w-full" src="${image}" alt=""></a>
            </div>
            <div class="w-[100%] md:w-[50%] flex flex-col justify-center items-start gap-6 pl-8 py-8">
                <h1 class="font-semibold text-2xl tracking-[0.05em]">${title}</h1>
                <h1 class="text-lg leading-normal max-w-[80%] tracking-[0.05em]">${text}</h1>
                <a href="https://stories.starbucks.com/stories/inclusion-diversity/">
                    <button class="bg-[#d4e9e2] hover:bg-[#c1d8d1] transition delay-20 border-[1px] border-[#1f3932] py-1 px-4 rounded-full text-base font-semibold">${button}</button>
                </a>
            </div>
        </div>
    </div>
    `;
}

class ContentPeople extends HTMLElement {
    connectedCallback() {
        contentArray.map((item)=>{
            this.innerHTML += contentPeople(item.image, item.title, item.text, item.flex,item.button);
        })

    }
}

customElements.define("content-people", ContentPeople);