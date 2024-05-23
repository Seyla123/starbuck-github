const endLess = () => {
    return `
    <!-- Endless Extras -->
<section class="py-10 w-full">
  <div class="w-full max-w-screen-2xl mx-auto text-center py-12">
    <div class="max-w-screen-sm mx-auto">
      <h1 class="text-[26px] pb-4 font-medium">Endless Extras</h1>
      <p class="md:text-[16px] text-[14px] text-center">
        Joining Starbucks® Rewards means unlocking access to exclusive benefits.
        Say hello to easy ordering, tasty Rewards and—yes, free coffee.
      </p>
    </div>
  </div>
  <div
    class="max-w-screen-2xl mx-auto px-4 grid md:grid-cols-3 grid-cols-1 gap-8">
    <!-- Card-1 -->
    <div
      class="flex md:gap-6 gap-4 md:flex-col md:items-center md:text-center md:text-[14px] text-[12px]">
      <img
        src="../../images/reward/1-fun-freebies.jpg"
        alt=""
        class="w-[112px] h-[112px] object-cover" />

      <div class="flex flex-col gap-3">
        <h2 class="md:text-[20px] text-[16px] font-medium">Fun freebies</h2>
        <p class="flex flex-col md:text-[16px] text-[14px]">
          Not only can you earn free coffee, look forward to a birthday treat
          plus coffee and tea refills.
          <a class="text-green-700 hover:underline pt-3" href="#">Learn more</a>
        </p>
      </div>
    </div>

    <!-- Card-2 -->
    <div
      class="flex md:gap-6 gap-4 md:flex-col md:items-center md:text-center md:text-[14px] text-[12px]">
      <img
        src="../../images/reward/2-order-and-pay-ahead.jpg"
        alt=""
        class="w-[112px] h-[112px] object-cover" />

      <div class="flex flex-col gap-3">
        <h2 class="md:text-[20px] text-[16px] font-medium">
          Order & pay ahead
        </h2>
        <p class="flex flex-col md:text-[16px] text-[14px]">
          Enjoy the convenience of in-store, curbside or drive-thru pickup at
          select stores.
          <a class="text-green-700 hover:underline pt-4" href="#">Learn more</a>
        </p>
      </div>
    </div>

    <!-- Card-3 -->
    <div
      class="flex md:gap-6 gap-4 md:flex-col md:items-center md:text-center md:text-[14px] text-[12px]">
      <img
        src="../../images/reward/3-get-to-free-faster.jpg"
        alt=""
        class="w-[112px] h-[112px] object-cover" />

      <div class="flex flex-col gap-3">
        <h2 class="md:text-[20px] text-[16px] font-medium">
          Get to free faster
        </h2>
        <p class="flex flex-col md:text-[16px] text-[14px]">
          Earn Stars even quicker with Bonus Star challenges, Double Star Days
          and exciting games.
          <a class="text-green-700 hover:underline pt-4" href="#">Learn more</a>
        </p>
      </div>
    </div>
  </div>
</section>
    
    `
}

class Endless extends HTMLElement {
    connectedCallback(){
        this.innerHTML = endLess();
    } 
}

customElements.define('endless-component', Endless);