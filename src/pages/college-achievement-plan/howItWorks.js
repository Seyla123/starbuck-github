const howItWorks = (arr) => {
    return `
    <div class="grid min-[480px]:grid-cols-2 grid-cols-1 items-start gap-8 bg-white mb-16">
    ${arr.map((item) => {
        return`
        <div class="bg-white rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] flex flex-col p-4">
            <h1 class="roboto tracking-wider md:text-[21.5px] text-[19px]">${item.title}</h1>
            <p class="mt-3 text-[#737373] sodan tracking-wide">
                ${item.text}
            </p>
            ${item.text2 ? `<p class="mt-4 text-[#737373] sodan tracking-wide"> ${item.text2}</p>` : ""}
        </div>
        `
    }).join("")}
    </div>
    `
}

const howItWorksArr = [
{
    title : "1. Become a partner",
    text : "Apply to Starbucks and join our team.",
},
{
    title : "2. Enroll at ASU",
    text : `Apply to ASU’s online undergrad programs using the SCAP application at
    starbucks.asu.edu and complete a FAFSA® (Free Application for Federal
    Student Aid).`,
  
},
{
    title : "3. Focusing on learning",
    text : "Register for classes and focus on your degree program."
},
{
    title : "3. Focusing on learning",
    text : "Register for classes and focus on your degree program.",
    text2 : `*Tuition coverage does not include other educational expenses, such as
    textbooks and laptops. Financial aid may help cover these costs.`
}

]
class HowItWorks extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = howItWorks(howItWorksArr);
    }
}

customElements.define("how-it-works-content", HowItWorks);