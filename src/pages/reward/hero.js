export const heroSection = () => {
    return `
    <section class="w-full sticky top-0 z-[48] bg-[#1e3932] py-4 md:px-20 px-4">
        <div class="w-full max-w-screen-2xl mx-auto flex justify-between items-center">
            <p class="text-white">STARBUCKS® REWARDS</p>
            <a href="../../pages/join-now/join-now.html">
                <button class="hover:opacity-80 flex md:hidden h-2 p-3 items-center justify-center outline outline-1 outline-offset-2 text-white rounded-full">
                    Join in the app
                </button>
            </a>
        </div>
    </section>

    <!-- hero section -->
    <section class="md:flex relative w-full bg-[#d4e9e2] xl:h-[50vh] h-[35vh] hidden items-center justify-start">
        <div class="max-w-screen-2xl z-[47] mx-auto px-4 w-full">
            <!-- content -->
            <div class="flex flex-col gap-3 items-start">
                <h2 class="uppercase text-[36px] font-medium">
                    Free Coffee<br />is a tap away
                </h2>
                <p class="text-[18px]">Join now to start earning Rewards.</p>
                <a href="../../pages/join-now/join-now.html" class="bg-green-700 hover:opacity-90 cursor-pointer text-white px-4 py-1.5 rounded-full">
                    Join now
                </a>
                <p class="text-[18px]">
                    Or <span><a href="../../pages/order/order.html" class="underline cursor-pointer hover:no-underline">Join in the app </a></span>for the best experience
                </p>
            </div>
        </div>
        <img class="absolute left-0 w-full h-full object-cover" src="../../images/reward/xl-hero-desktop_2021.png" alt="" />
    </section>

    <!-- responsive hero section -->
    <section class="relative flex md:hidden md:py-10 w-full">
        <div class="w-full">
            <img src="../../images/reward/hero-mobile_2021.jpg" alt="" />
        </div>
        <div class="absolute md:w-auto w-full top-0 justify-center mx-auto items-center flex md:hidden">
            <div class="text-center flex flex-col pt-10">
                <h1 class="text-[26px] font-medium">
                    FREE COFFEE <br />IS A TAP AWAY
                </h1>
                <p class="mt-2 text-[14px]">Join now to start earning Rewards.</p>
                <div class="flex items-center justify-center">
                    <a href="../../pages/join-now/join-now.html">
                        <button class="hover:opacity-90 h-3 p-4 my-4 items-center flex text-white bg-green-700 rounded-full">
                            Join the app
                        </button>
                    </a>
                </div>
                <a class="underline hover:no-underline" href="../../pages/join-now/join-now.html">Or join online</a>
            </div>
        </div>
    </section>
    `
}

export class Hero extends HTMLElement {
    connectedCallback() {
        this.innerHTML = heroSection();
    }
}
customElements.define('hero-section-component', Hero)