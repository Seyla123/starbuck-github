const keepReward = () => {
    return `
    <!-- keep the Rewards Coming -->
<section
  class="remove-bg md:p-10 p-0 w-full bg-[url('../../images/reward/reward-bg.webp')] flex justify-center items-center">
  <div class="w-full flex justify-center bg-[#d4e9e2]">
    <!-- inner box -->
    <div
      class="2xl:px-0 my-[50px] w-full md:max-w-screen-2xl flex items-center justify-center flex-col md:flex-row">
      <!-- star left -->
      <div class="flex justify-start w-full">
        <img
          class="hidden md:flex md:w-auto w-20"
          src="../../images/reward/stars.png"
          alt="" />
        <img
          class="flex md:hidden md:w-auto w-20"
          src="../../images/reward/stars.png"
          alt="" />
      </div>
      <!-- heading -->
      <div class="bg-[#d4e9e2] pt-[20px]">
        <div class="max-w-screen-sm mx-auto flex-col text-center">
          <h3 class="text-[26px] font-medium pb-[15px]">
            Keep the Rewards Coming
          </h3>
          <p>
            The Rewards don't stop at your morning coffee. Join Starbucks®
            Rewards and unlock perks from our partners, all while earning more
            Stars.
          </p>
        </div>
        <!-- content 2 boxes -->
        <div class="flex flex-col md:flex-row justify-between gap-6 p-[50px]">
          <!-- box 1 -->
          <div class="w-full flex justify-center items-center flex-row md:flex-col md:gap-0 gap-8">
            <!-- image -->
            <div class="flex max-w-[350px] md:max-w-[190px] h-auto justify-center">
              <img
                class="w-full h-full object-contain"
                src="../../images/reward/delta-skymiles.webp"
                alt="" />
            </div>
            <!-- text -->
            <div class="pt-6">
              <p class="md:text-center text-left pl-4">
                <a class="text-green-700 hover:underline" href="https://www.deltastarbucks.com/content/starbucks/en/overview.html?mkcpgn=dipd-sbux7042"
                  >Link your Delta SkyMiles®</a
                >
                and Starbucks® Rewards accounts to earn 1 mile per $1 spent at
                Starbucks and double Stars on Delta travel days.1
              </p>
            </div>
          </div>
          <!-- box 2 -->
          <div class="w-full flex justify-center items-center flex-row md:flex-col md:gap-0 gap-8">
            <!-- image -->
            <div class="max-w-[350px] md:max-w-[190px] h-auto">
              <img
                class="w-full h-full object-contain"
                src="../../images/reward/bank-of-america.png"
                alt="" />
            </div>
            <!-- text -->
            <div class="pt-6">
              <p class="md:text-center text-left pl-4">
                <a class="text-green-700 hover:underline" href="https://promotions.bankofamerica.com/starbucks?cm_mmc=ESZ-EnterpriseSales-_-Cobrand_Site-_-ES35LT0004_StarbucksRewardsModuleBofA_SRModuleBofA-_-StarbucksPartnerMktg"
                  >Link your Bank of America</a
                >
                eligible card and Starbucks® Rewards account to earn 2% Cash
                Back and Bonus Stars on qualifying Starbucks in-app purchases.2
              </p>
            </div>
          </div>
        </div>
        <!-- join btn -->
        <a href="../../pages/join-now/join-now.html" class="flex justify-center items-center md:mt-[35px] mt-0 cursor-pointer">
          <button
            class="hover:opacity-90 h-3 p-4 my-4 items-center flex justify-center text-white bg-green-700 rounded-full">
            Join Startbuck® Rewards
          </button>
        </a>
      </div>
      <!-- star right -->
      <div class="flex justify-end w-full">
        <img
          class="hidden md:flex md:w-auto w-20"
          src="../../images/reward/starsright.png"
          alt="" />
        <img
          class="flex md:hidden md:w-auto w-20"
          src="../../images/reward/starsright.png"
          alt="" />
      </div>
    </div>
  </div>
</section>
    `
}

class Keep extends HTMLElement {
    connectedCallback() {
        this.innerHTML = keepReward();
    }
}

customElements.define('keep-reward-component', Keep)