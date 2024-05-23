const createSubNav = (page)=>{
    return `
    <!-- subnav -->
    <div class="bg-[#F9F9F9] w-full flex justify-center border to-black overflow-hidden">
        <div class="w-full md:ml-[78px] pl-6 ">
            <ul class="flex text-[13px] ">
                <li class="py-4 mr-8 ${page == 'menu'? 'underline-offset-8 underline' : ''}"><a href="../../pages/menu/menu.html">Menu</a></li>
                <li class="py-4 mr-8 "><a href="../../pages/featured/feature-menu.html">Featured</a></li>
                <li class="py-4 mr-8 ${page == 'previous'? 'underline-offset-8 underline' : ''}"><a href="../../pages/previous/previous-page.html">Previous</a></li>
                <li class="py-4 mr-8 ${page == 'favorite'? 'underline-offset-8 underline' : ''}"><a href="../../pages/favorite/favorite.html">Favorites</a></li>
            </ul>
        </div>
    </div>
    `
}

export class SubNav extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        const page = this.getAttribute('page');

        this.innerHTML = createSubNav(page);
    }
}

customElements.define('sub-navbar-component', SubNav)