const createSidebar = ()=>{
    return `
    <sidebar id="minMenuDropdown" class="bg-white duration-300 w-[80%] md:invisible h-screen fixed right-[-100%] z-40">
        <div class="flex mt-10 flex-col">
            <ul class="flex flex-col text-xl ">
                <li><a class="px-8 py-4 block" href="../../pages/menu/menu.html">Menu</a></li>
                <li><a class="px-8 py-4 block " href="../../pages/reward/reward.html>Rewards</a></li>
                <li><a class="px-8 py-4 block " href="../../pages/gift-card/gift-card.html">Gift Cards</a></li>
            </ul>
            <hr class="mx-8 my-4">
            <div class="mx-8 my-4">
                <div class="flex gap-4 items-center text-md font-bold">
                    <a href="../../pages/log-in/log-in.html" class="h-3 p-4 items-center flex justify-center rounded-full outline outline-1 hover:bg-gray-200 ">Sign in</a>
                    <a href="../../pages/join-now/join-now.html" class="h-3 p-4 items-center flex justify-center text-white  bg-black hover:bg-gray-600 rounded-full">Join now</a>
            </div>
                <div class="flex manrope-sans font-semibold text-md items-center mt-4">
                    <a class="flex items-center gap-2 hover:text-green-700  " href="../../pages/find-a-store/find-a-store.html">
                        <i class="fa-solid fa-location-dot"></i>
                        <p>Find a Store</p>
                        </a>
                        
                </div>
            </div>
        </div>
    </sidebar>
    `;
}
export class Sidebar extends HTMLElement {
    constructor(){
        super()
    }
    connectedCallback() {
        // Set the inner HTML of the sidebar component
        this.innerHTML = createSidebar();
    }
}
// Define a custom element named 'sidebar-component'
customElements.define('sidebar-component', Sidebar);