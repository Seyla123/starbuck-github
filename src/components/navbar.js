import './layout.js'; 

const createNavbar = (maxWidth, isMenuHidden,isRewardPage,isGiftCardPage,isMenuPage) => {
    return `<nav class=" w-full flex justify-between gap-4 bg-white px-8 h-[83px] lg:h-[99px] shadow-lg p-4 ${isMenuHidden ? "md:justify-start" : "md:justify-center"} outline outline-1 outline-none relative z-50">
    <a href="../home/home.html" class="max-w-14">
        <img src="../../images/layout/starkbuck-logo.png" alt="">
    </a>
    <div class="w-full ${maxWidth ?  "max-w-screen-2xl" : ""} justify-between items-center hidden relative ${isMenuHidden ? "md:hidden" : "md:flex"} ">
        <div>
            <ul class="flex gap-4 sodan font-bold tracking-widest text-sm">
                <li><a class="hover:text-green-700"  href="../../pages/menu/menu.html">MENU</a></li>
                <li><a class="hover:text-green-700"  href="../../pages/reward/reward.html">REWARDS</a></li>
                <li><a class="hover:text-green-700"  href="../../pages/gift-card/gift-card.html">GIFT CARDS</a></li>
            </ul>
            <span class="w-24 bottom-[-17px] bg-green-700 h-[6px] absolute  left-[63px] ${!isRewardPage ? "hidden" : ""}"></span>
            <span class="w-24 bottom-[-17px] bg-green-700 h-[6px] left-[160px] absolute ${!isGiftCardPage ? "hidden" : ""}"></span>
            <span class="w-12 bottom-[-17px] bg-green-700 h-[6px]  absolute ${!isMenuPage ? "hidden" : ""}"></span>
        </div>

        <div>
            <ul class="flex gap-12 manrope-sans font-semibold text-sm items-center">
                <li >
                    <a class="flex items-center gap-2 hover:text-green-700  " href="../../pages/find-a-store/find-a-store.html">
                        <i class="fa-solid fa-location-dot"></i>
                        <p>Find a Store</p>
                        </a>
                </li>
                <li class="flex gap-4 items-center">

                    <button-component
                    btnLink = "../../pages/log-in/log-in.html"
                    ></button-component>   
                    <button-component
                    title = "Join now"
                    btnColor = "bg-black"
                    hoverColor = "bg-gray-600"
                    textColor = "text-white"
                    btnLink = "../../pages/join-now/join-now.html"
                    ></button-component>                </li>
            </ul>
        </div>

    </div>
    <button class="menu-button max-w-5 flex items-center ${isMenuHidden ? "hidden" : ""} md:hidden " id="menuButton">
        <!-- Hamburger icon or menu icon -->
        <span class="menu-icon" id="menuIcon">
          <img src="../../images/layout/menu.png" alt="Menu">
        </span>
      </button>
    <a class="invisible  max-w-14 hidden  2xl:${maxWidth ? "flex" : "invisible"} ${isMenuHidden ? "2xl:hidden" : ""}">
        <img src="../../images/layout/starkbuck-logo.png" alt="">
    </a>
</nav> 
<!-- sidebar will be append below -->

    `;
}

export class navbar extends HTMLElement {
    connectedCallback() {
        // to get value from attribute 
        const maxWidth = this.getAttribute("maxWidth") === 'true';
        const isMenuHidden = this.getAttribute("isMenuHidden") === 'true';
        const isRewardPage = this.getAttribute("isRewardPage") === 'true';
        const isGiftCardPage = this.getAttribute("isGiftCardPage") === 'true';
        const isMenuPage = this.getAttribute("isMenuPage") === 'true';
        // Set the inner HTML of the component to the navbar created by createNavbar function
        this.innerHTML = createNavbar(maxWidth, isMenuHidden, isRewardPage, isGiftCardPage, isMenuPage);
        // Append a new 'sidebar-component' to this component
        this.appendChild(document.createElement('sidebar-component'));
        //call addMenuButtonListener
        this.addMenuButtonListener();
    }
    
     //Adds a click event listener to the menu button to toggle the sidebar and menu icon.
     
    addMenuButtonListener() {
        const menuButton = this.querySelector('#menuButton');
        const minMenuDropdown = this.querySelector("#minMenuDropdown");
        menuButton?.addEventListener("click", () => {
            const isActive = menuButton.classList.toggle("active");
            this.querySelector('#menuIcon').innerHTML = isActive ? '<img src="../../images/layout/close.png" alt="Close">' :'<img src="../../images/layout/menu.png" alt="Menu">';
            minMenuDropdown.style.right = isActive ? "0%" : "-100%";
            isActive ? this.querySelector('#menuIcon').classList.add("rotate-90") : this.querySelector('#menuIcon').classList.remove("rotate-90");
            document.body.classList.toggle("overflow-hidden", isActive);
        });
    }
}
customElements.define('navbar-component', navbar);

