const frequentlyAsked = (arr) => {
    return `
    <div class="p-3 w-full max-w-screen-2xl mx-auto ">
        <div class="block divide-y">
        ${arr.map((item) => {
            return `
            <div class="hover:text-[#01764B]">
                <button class="buttonHead w-full flex justify-between items-center py-4 text-xl cursor-pointer">
                <h2 class="sodan text-left tracking-wider md:text-[21.5px] text-[19px]">
                    ${item.question}
                </h2>
                <span class="w-[18px] chevron duration-300">
                    <img class="" src="../../images/layout/down-arrow.png" alt="" />
                </span>
                </button>
                <div class="contentDropdown overflow-hidden max-h-0 transition-max-height duration-500">
                <p class=" text-left text-[18px] mb-4 text-[#7d7d7d] tracking-wider lato">
                    ${item.text}
                </p>
                </div>
            </div>
            `
        }).join("")}
        
        </div>
    </div>
    `
}
const frequentlyAskedArr = 
[
{
    question : `Why is Starbucks offering the College Achievement Plan benefit in
    the U.S.?`,
    text : `Starbucks believes in the promise and pursuit of the American Dream.
    According to the U.S. Department of Education, only half of
    Americans who begin college today will actually finish, largely due
    to financial and work / life barriers. In the U.S., we are on the
    verge of seeing an entire generation of young people left behind due
    in part to skyrocketing tuition costs that prevent more and more
    people from starting or finishing their undergraduate degree. To
    address this growing inequality in America, Starbucks partnered with
    a like-minded university who recognizes the need to address one of
    the single most important challenges facing young adults, and our
    U.S. partners, today - earning a bachelor’s degree. We’re in a
    position to help. Investing in our partners and education is one of
    the very best investments Starbucks can make.`
},
{
    question : "Why is Starbucks partnering with Arizona State University(ASU)?",
    text : `We spent considerable time looking for the right collaboration for
    our partners. ASU’s mission, values and brand are a good match to
    our own. ASU can stand side-by-side with Starbucks to offer a
    high-quality education, at scale, to all of our eligible U.S.
    partners. In addition, ASU is ranked as the #1 most innovative
    school in the country by U.S. News & World Report. Starbucks is
    proud to partner with an academic institution that recognizes the
    need for innovation to offer more people an opportunity of a quality
    higher education, and the freedom to pursue their passions in any
    field.`
},
{
    question : `I'm interested in working at Starbucks. How soon can I participate
    in the Starbucks College Achievement Plan?`,
    text : `To participate in the Starbucks College Achievement Plan, partners
    (employees) must be benefits-eligible. Part-time U.S. mainland
    partners establish initial benefits eligibility the first day of the
    second month after receiving a minimum of 240 total hours over three
    full, consecutive months. There are six ASU start dates every
    year—two sessions in the fall semester, two in the spring semester
    and two in the summer semester. It is recommended you complete the
    application process at least one month before your preferred start
    date.`
},
{
    question : `I'm a partner (emplyee). How do I know if I'm eligible for the
    Starbucks College Achievement Plan?`,
    text : `All U.S.-based, eligible partners employed by Starbucks-owned
    businesses—including Evolution Fresh, Siren Retail Corporation, and
    Starbucks Manufacturing —regardless of role, who do not yet have a
    bachelor’s degree are eligible to apply.`
},
{
    question : `I'm a benefits-eligible partner. How does the program work and how
    do I get started?`,
    text : `<ul
    class="list-disc list-inside sodan my-2 text-left text-[18px] mb-8 text-[#7d7d7d] tracking-wider lato"
  >
    <li>
      Apply to ASU: Visit starbucks.asu.edu to learn more about SCAP and
      to start your free application. Through the enrollment process,
      you will submit your official transcripts from high school and all
      colleges and/or universities you have attended. An ASU Enrollment
      Coach can walk you through each step of the application process:
      (844) ASU-SBUX.
    </li>
    <li>
      Complete your financial aid file: You must complete the Free
      Application for Federal Student Aid (FAFSA). You're required to
      submit the FAFSA and any other financial aid documents each year.
      Your financial-aid counselor can help you apply. Visit
      fafsa.ed.gov to get started, and be sure to request that a copy be
      sent to ASU (school code 001081).
    </li>
    <li>
      Register for classes: Once you’re admitted to your degree program,
      an academic advisor will help you choose classes and make an
      academic plan to carry you all the way to graduation.
    </li>
    <li>
      Get ready: Before classes start complete “ASU 10: Connect–ASU
      Orientation” (created just for Starbucks partners!). This is a
      brief orientation to ASU and online learning that gives you the
      tools to succeed in achieving your academic goals.
    </li>
    <li>
      Start classes: Now you’re set up for success—it’s time to focus on
      the rigorous and rewarding classes you are taking with ASU’s
      award-winning faculty.
    </li>
  </ul>`
},
{
    question : `I'm a Starbucks partner enrolled at another college and want to
    transfer, what should I do?`,
    text : `You can transfer to ASU at any time—we recommend sooner to get the
    most benefit from the program—provided you meet their admissions
    criteria. We encourage you to discuss your options with an ASU
    enrollment coach, with no obligation to apply or transfer.`
},
{
    question : `As a program participant, what should I expect to pay out-of-pocket
    for my tuition and fees?`,
    text : `ASU tuition and fees are fully covered. Other educational expenses,
    such as textbooks and laptops, are not covered.`
}
]

class FrequentlyAsked extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = frequentlyAsked(frequentlyAskedArr);
        this.setUpEventListener();
    }
    setUpEventListener(){
        // accordion 
        const buttonHead = this.querySelectorAll(".buttonHead");
        const contentDropdown = this.querySelectorAll(".contentDropdown");
        const chevron = this.querySelectorAll(".chevron");
    
        for (let i = 0; i < buttonHead.length; i++) {
        buttonHead[i].addEventListener("click", () => {
            buttonHead[i].classList.toggle("active");
            if (buttonHead[i].classList.contains("active")) {
            contentDropdown[i].classList.add("max-h-screen");
            contentDropdown[i].classList.remove("max-h-0");
            chevron[i].classList.add("rotate-180");
            } 
            else {
            contentDropdown[i].classList.remove("max-h-screen");
            contentDropdown[i].classList.add("max-h-0");
            chevron[i].classList.remove("rotate-180");
            }
        });
        }  
    }
}

customElements.define("frequently-asked-content", FrequentlyAsked);