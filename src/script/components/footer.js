const createFooter = (maxWidth, dropdown) => {
    return `
    <footer class="p-6 2xl:px-8 w-full ${maxWidth ? maxWidth : ''} mx-auto">
        <!-- screen phone lg -->
        <div class="block ${dropdown ? 'block' : 'lg:hidden'}">
            <div>
                <button class="btn1 w-full flex justify-between items-center py-4 text-xl cursor-pointer">
                    <h2 class="sodan">About Us</h2>
                    <span class="w-4 imgArrow duration-300">
                        <img class="" src="../../images/layout/down-arrow.png" alt="" />
                    </span>
                </button>
                <div class="drop1 overflow-hidden max-h-0 transition-max-height duration-500">
                    <ul class="flex flex-col gap-3 my-4 manrope-sans text-gray-500 font-thin">
                        <li>
                        <a class="hover:text-black" href="../../pages/our-company/our-company.html">Our Company</a>
                        </li>
                        <li>
                        <a class="hover:text-black" href="../../pages/our-coffee/our-coffee.html">Our Coffee</a>
                        </li>
                        <li>
                        <a class="hover:text-black" href="">Stories and News</a>
                        </li>
                        <li>
                        <a class="hover:text-black" href="">Starbucks Archive</a>
                        </li>
                        <li>
                        <a class="hover:text-black" href="">Investor Relations</a>
                        </li>
                        <li>
                        <a class="hover:text-black" href="">Customer Service</a>
                        </li>
                        <li>
                        <a class="hover:text-black" href="../../pages/contact-us/contact-us.html">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        <div>
            <div class="btn1 flex justify-between items-center py-4 text-xl cursor-pointer">
                <h2 class="sodan">Careers</h2>
                <div class="w-4 imgArrow duration-300">
                    <img class="" src="../../images/layout/down-arrow.png" alt="" />
                </div>
            </div>
            <div class="drop1 overflow-hidden max-h-0 transition-max-height duration-500">
                <ul class="flex flex-col gap-3 my-4 manrope-sans text-gray-500 font-thin">
                    <li>
                        <a class="hover:text-black" href="../../pages/culture-and-values/culture-and-values.html">Culture and Values</a>
                    </li>
                    <li>
                        <a class="hover:text-black" href="">Inclusion, Diversity, and Equity</a>
                    </li>
                    <li>
                        <a class="hover:text-black" href="../../pages/college-achievement-plan/college-achievement-plan.html">College Achievement Plan</a>
                    </li>
                    <li>
                        <a class="hover:text-black" href="">Alumni Community</a>
                    </li>
                    <li>
                        <a class="hover:text-black" href="../../pages/u.s. careers/u.s.-careers.html">U.S. Careers</a>
                    </li>
                    <li>
                        <a class="hover:text-black" href="../../pages/international-careers/international-careers.html">International Careers</a>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <div class="btn1 flex justify-between items-center py-4 text-xl cursor-pointer">
                <h2 class="sodan">Social Impact</h2>
                <div class="w-4 imgArrow duration-300">
                    <img class="" src="../../images/layout/down-arrow.png" alt="" />
                </div>
            </div>
            <div class="drop1 overflow-hidden max-h-0 transition-max-height duration-500">
                <ul class="flex flex-col gap-3 my-4 manrope-sans text-gray-500 font-thin">
                    <li>
                        <a class="hover:text-black" href="../../pages/people/people.html">People</a>
                    </li>
                    <li>
                        <a class="hover:text-black" href="../../pages/planet/planet.html">Planet</a>
                    </li>
                    <li>
                        <a class="hover:text-black" href="">Environmental and Social Impact Reporting</a>
                    </li>
                    <li>
                        <a class="hover:text-black" href="">For Business Partners</a>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <div class="btn1 flex justify-between items-center py-4 text-xl cursor-pointer">
                <h2 class="sodan">For Business Partners</h2>
                <div class="w-4 imgArrow duration-300">
                    <img class="" src="../../images/layout/down-arrow.png" alt="" />
                </div>
            </div>
            <div class="drop1 overflow-hidden max-h-0 transition-max-height duration-500">
                <ul class="flex flex-col gap-3 my-4 manrope-sans text-gray-500 font-thin">
                    <li>
                        <a class="hover:text-black" href="">Landlord Support Center</a>
                    </li>
                    <li>
                        <a class="hover:text-black" href="">Suppliers</a>
                    </li>
                    <li>
                        <a class="hover:text-black" href="">Corporate Gift Card Sales</a>
                    </li>
                    <li>
                        <a class="hover:text-black" href="">Office and Foodservice Coffee</a>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <div class="btn1 flex justify-between items-center py-4 text-xl cursor-pointer">
                <h2 class="sodan">Order and Pick Up</h2>
                <div class="w-4 imgArrow duration-300">
                    <img class="" src="../../images/layout/down-arrow.png" alt="" />
                </div>
            </div>
            <div class="drop1 overflow-hidden max-h-0 transition-max-height duration-500">
                <ul class="flex flex-col gap-3 my-4 manrope-sans text-gray-500 font-thin">
                    <li>
                        <a class="hover:text-black" href="../../pages/order-vai-app/order.html">Order on the App</a>
                    </li>
                    <li>
                    <a class="hover:text-black" href="../../pages/menu/menu.html">Order on the Web</a>
                    </li>
                    <li>
                        <a class="hover:text-black" href="../../pages/delivery/delivery.html">Delivery</a>
                    </li>
                    <li>
                        <a class="hover:text-black" href="../../pages/pickup/pickup.html">Order and Pick Up Options</a>
                    </li>
                    <li>
                        <a class="hover:text-black" href="https://athome.starbucks.com/?utm_source=starbucks.com&utm_medium=referral&utm_campaign=footer">Explore and Find Coffee for Home</a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    
        <!-- screen greater than lg -->
        <div class="hidden lg:${dropdown ? 'hidden' : 'flex'} justify-start">
            <div class="">
                <h2 class="sodan text-xl">About Us</h2>
                <ul class="flex w-48 flex-col gap-3 my-4 manrope-sans text-gray-500 font-thin">
                <li>
                <a class="hover:text-black" href="../../pages/our-company/our-company.html">Our Company</a>
                </li>
                <li>
                <a class="hover:text-black" href="../../pages/our-coffee/our-coffee.html">Our Coffee</a>
                </li>
                <li>
                <a class="hover:text-black" href="">Stories and News</a>
                </li>
                <li>
                <a class="hover:text-black" href="">Starbucks Archive</a>
                </li>
                <li>
                <a class="hover:text-black" href="">Investor Relations</a>
                </li>
                <li>
                <a class="hover:text-black" href="">Customer Service</a>
                </li>
                <li>
                <a class="hover:text-black" href="../../pages/contact-us/contact-us.html">Contact Us</a>
                </li>
                </ul>
            </div>
        <div class="mr-8">
            <h2 class="sodan text-xl">Careers</h2>
            <ul class="flex w-48 flex-col gap-3 my-4 manrope-sans text-gray-500 font-thin">
            <li>
            <a class="hover:text-black" href="../../pages/culture-and-values/culture-and-values.html">Culture and Values</a>
        </li>
        <li>
            <a class="hover:text-black" href="">Inclusion, Diversity, and Equity</a>
        </li>
        <li>
            <a class="hover:text-black" href="../../pages/college-achievement-plan/college-achievement-plan.html">College Achievement Plan</a>
        </li>
        <li>
            <a class="hover:text-black" href="">Alumni Community</a>
        </li>
        <li>
            <a class="hover:text-black" href="../../pages/u.s. careers/u.s.-careers.html">U.S. Careers</a>
        </li>
        <li>
            <a class="hover:text-black" href="../../pages/international-careers/international-careers.html">International Careers</a>
        </li>
    
            </ul>
        </div>
    
        <div class="mr-8">
            <h2 class="sodan text-xl">Social Impact</h2>
            <ul class="flex w-48 flex-col gap-3 my-4 manrope-sans text-gray-500 font-thin">
            <li>
                <a class="hover:text-black" href="../../pages/people/people.html">People</a>
            </li>
            <li>
                <a class="hover:text-black" href="../../pages/planet/planet.html">Planet</a>
            </li>
            <li>
                <a class="hover:text-black" href="">Environmental and Social Impact Reporting</a>
            </li>
            <li>
                <a class="hover:text-black" href="">For Business Partners</a>
            </li>
            </ul>
        </div>
        <div class="mr-8">
            <h2 class="sodan text-xl">For Business Partners</h2>
            <ul class="flex w-48 flex-col gap-3 my-4 manrope-sans text-gray-500 font-thin">
            <li>
                <a class="hover:text-black" href="">Landlord Support Center</a>
            </li>
            <li>
                <a class="hover:text-black" href="">Suppliers</a>
            </li>
            <li>
                <a class="hover:text-black" href="">Corporate Gift Card Sales</a>
            </li>
            <li>
                <a class="hover:text-black" href="">Office and Foodservice Coffee</a>
            </li>
            </ul>
        </div>
        <div class="mr-8">
            <h2 class="sodan text-xl"">Order and Pick Up</h2>
            <ul class="flex flex-col gap-3 my-4 manrope-sans text-gray-500 font-thin">
            <li>
                <a class="hover:text-black" href="../../pages/order-vai-app/order.html">Order on the App</a>
            </li>
            <li>
            <a class="hover:text-black" href="../../pages/menu/menu.html">Order on the Web</a>
            </li>
            <li>
                <a class="hover:text-black" href="../../pages/delivery/delivery.html">Delivery</a>
            </li>
            <li>
                <a class="hover:text-black" href="../../pages/pickup/pickup.html">Order and Pick Up Options</a>
            </li>
            <li>
                <a class="hover:text-black" href="https://athome.starbucks.com/?utm_source=starbucks.com&utm_medium=referral&utm_campaign=footer">Explore and Find Coffee for Home</a>
            </li>
            </ul>
        </div>
        </div>
        <hr class="block my-8" />
        <ul class="flex gap-2 flex-wrap">
        <li>
            <a class="w-12 justify-center items-center flex hover:bg-gray-200 duration-300 p-2 rounded-full" href="https://open.spotify.com/user/starbucks">
            <img src="../../images/layout/spotify.png" alt="" />
            </a>
        </li>
        <li>
            <a class="w-12 justify-center items-center flex hover:bg-gray-200 duration-300 p-2 rounded-full" href="https://facebook.com/starbucks">
            <img src="../../images/layout/facebook.png" alt="" />
            </a>
        </li>
        <li>
            <a class="w-12 justify-center items-center flex hover:bg-gray-200 duration-300 p-2 rounded-full" href="https://www.pinterest.com/starbucks/">
            <img src="../../images/layout/pinterest.png" alt="" />
            </a>
        </li>
        <li>
            <a class="w-12 justify-center items-center flex hover:bg-gray-200 duration-300 p-2 rounded-full" href="https://instagram.com/starbucks">
            <img src="../../images/layout/instagram.png" alt="" />
            </a>
        </li>
        <li>
            <a class="w-12 justify-center items-center flex hover:bg-gray-200 duration-300 p-2 rounded-full" href="https://www.youtube.com/starbucks">
            <img src="../../images/layout/youtube.png" alt="" />
            </a>
        </li>
        <li>
            <a class="w-12 justify-center items-center flex hover:bg-gray-200 duration-300 p-2 rounded-full" href="https://twitter.com/starbucks/">
            <img src="../../images/layout/twitter.png" alt="" />
            </a>
        </li>
        </ul>
    
        <ul class="flex flex-col gap-4 my-4 font-semibold">
        <li>
            <a class="hover:underline" href="../../pages/privacy/privacy-policy.html">Privacy Notice</a>
        </li>
        <li>
            <a class="hover:underline" href="../../pages/privacy/privacy-policy.html">Consumer Health Privacy Notice</a>
        </li>
        <li>
            <a class="hover:underline" href="../../pages/privacy/term.html">Terms of Use</a>
        </li>
        <li>
            <a class="hover:underline" href="">Do Not Share My Personal Information</a>
        </li>
        <li>
            <a class="hover:underline" href="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70076.pdf">CA Supply Chain Act</a>
        </li>
        <li>
            <a class="hover:underline" href="../../pages/privacy/accessibility.html">Accessibility</a>
        </li>
        <li>
            <a class="hover:underline" href="">Cookie Preferences</a>
        </li>
        </ul>
        </ul>
        <p class="text-md text-gray-600">
        © 2024 Starbucks Coffee Company. All rights reserved.
        </p>
    </footer>

    `
}
export class Footer extends HTMLElement {
    constructor() {
        super(); // Call the constructor of the HTMLElement class
    }

    connectedCallback() {
        // Retrieve attributes and generate the footer HTML when the component is added to the DOM
        const dropdown = this.getAttribute('dropdown');
        const maxWidth = this.getAttribute('maxWidth'); 
        this.innerHTML = createFooter(maxWidth, dropdown);
        this.setupDropdownListeners(); // Setup listeners for dropdown functionality
    }

    setupDropdownListeners() {
        try {
            // Query all elements needed for the dropdown functionality
            const btn1 = this.querySelectorAll(".btn1");
            const drop1 = this.querySelectorAll(".drop1");
            const imgArrow = this.querySelectorAll(".imgArrow");

            // Add click event listeners to all buttons
            for (let i = 0; i < btn1.length; i++) {
                btn1[i].addEventListener("click", () => {
                    btn1[i].classList.toggle("active");
                    if (btn1[i].classList.contains("active")) {
                        drop1[i].classList.add("max-h-screen");
                        drop1[i].classList.remove("max-h-0");
                        imgArrow[i].classList.add("rotate-180");
                    } else {
                        drop1[i].classList.remove("max-h-screen");
                        drop1[i].classList.add("max-h-0");
                        imgArrow[i].classList.remove("rotate-180");
                    }
                });
            }
        } catch (error) {
            console.error("Failed to toggle dropdown:", error);
        }

    }
}
customElements.define('footer-component', Footer);