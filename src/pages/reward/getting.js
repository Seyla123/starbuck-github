const gettingStart = () => {
    return `
    <section class="py-20 w-full">
  <div class="w-full max-w-screen-2xl mx-auto text-center py-12">
    <h1 class="text-[26px] pb-4 font-medium">Getting started is easy</h1>
    <p class="md:text-[16px] text-[14px]">
      Earn Stars and get rewarded in a few easy steps.
    </p>
  </div>

  <div
    class="max-w-screen-2xl mx-auto px-4 grid md:grid-cols-3 grid-cols-1 gap-8">
    <!-- Card-1 -->
    <div
      class="flex md:gap-6 gap-4 md:flex-col md:items-center md:text-center md:text-[14px] text-[12px]">
      <img
        src="../../images/reward/getting-started-1@2x.jpg"
        alt=""
        class="w-10 h-10 object-cover" />

      <div class="flex flex-col gap-3">
        <h2 class="md:text-[20px] text-[16px] font-medium">
          Create an account
        </h2>
        <p class="md:text-[16px] text-[14px]">
          To get started,
          <a class="text-green-700 hover:underline" href="../../pages/join-now/join-now.html">join now</a>. You
          can also
          <a class="text-green-700 hover:underline" href="../../pages/order/order.html">join in the app</a>
          to get access to the full range of Starbucks® Rewards benefits.
        </p>
      </div>
    </div>

    <!-- Card-2 -->
    <div
      class="flex md:gap-6 gap-4 md:flex-col md:items-center md:text-center md:text-[14px] text-[12px]">
      <img
        src="../../images/reward/getting-started-2@2x.jpg"
        alt=""
        class="w-10 h-10 object-cover" />

      <div class="flex flex-col gap-3">
        <h2 class="md:text-[20px] text-[16px] font-medium">
          Order and pay how you’d like
        </h2>
        <p class="md:text-[16px] text-[14px]">
          Use cash, credit/debit card or save some time and pay right through
          the app. You’ll collect Stars all ways.
          <a class="text-green-700 hover:underline" href="#cashOrcard">Learn how</a>
        </p>
      </div>
    </div>

    <!-- Card-3 -->
    <div
      class="flex md:gap-6 gap-4 md:flex-col md:items-center md:text-center md:text-[14px] text-[12px]">
      <img
        src="../../images/reward/getting-started-3@2x.jpg"
        alt=""
        class="w-10 h-10 object-cover" />

      <div class="flex flex-col gap-3">
        <h2 class="text-[20px] font-medium">Earn Stars, get Rewards</h2>
        <p>
          As you earn Stars, you can redeem them for Rewards—like free food,
          drinks, and more. Start redeeming with as little as 25 Stars!
        </p>
      </div>
    </div>
  </div>
</section>
    `
}

class GettingStart extends HTMLElement {
    connectedCallback() {
        this.innerHTML = gettingStart();
    }
}

customElements.define('getting-start-component', GettingStart);