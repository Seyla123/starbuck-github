const instruction = () => {
    return `
    <!-- question -->
<section class="w-full">
  <div
    class="max-w-screen-2xl mx-auto my-[100px] flex-col flex justify-center items-center">
    <div class="max-w-screen-sm px-4">
      <h4 class="text-[26px]">Questions?</h4>
      <p class="pt-[10px]">
        We want to help in any way we can. You can ask your barista anytime or
        we’ve answered the most commonly asked questions
        <span class="inline-block">
          <a
            href="https://customerservice.starbucks.com/sbux"
            class="text-green-700 hover:underline flex items-center gap-1">
            right over here<img
              class="size-[15px]"
              src="../../images/reward/external-link.png"
              alt="" />
          </a> </span
        >.
      </p>
    </div>
  </div>
</section>

<!-- instruction -->
<section class="w-full bg-[#f9f9f9]">
  <!-- paragraph -->
  <div class="max-w-screen-2xl mx-auto text-[14px] p-6 2xl:px-0">
    <!-- paragraph -->

    <div class="">
      <p class="">
        1Excludes taxes and gratuities. At participating stores. Some
        restrictions apply. Flights purchased close to departure may not earn
        double Stars. Stars and miles may not be earned on purchases of alcohol,
        Starbucks Cards and Starbucks Card reloads. For details, visit

        <span class="inline-block">
          <a
            href="https://www.deltastarbucks.com/content/starbucks/en/terms-and-conditions.html"
            class="text-green-700 hover:underline flex items-center gap-1">
            deltastarbucks.com/terms<img
              class="size-[15px]"
              src="../../images/reward/external-link.png"
              alt="" />
          </a>
        </span>
      </p>
      <p class="pt-[10px]">
        2At participating stores only. Some restrictions apply. Linked Card
        members will earn 2% Cash Back on the full purchase price of every
        Qualifying Purchase. Extra Star offer excludes taxes and tips. Stars may
        not be earned on purchases of alcohol or on reloads of Starbucks Cards
        that are not registered. For details, visit
        <span class="inline-block">
          <a
            href="https://promotions.bankofamerica.com/starbucks#disclosure-1223753557"
            class="text-green-700 hover:underline flex items-center gap-1">
            Terms and Conditions
            <img
              class="size-[15px]"
              src="../../images/reward/external-link.png"
              alt="" />
          </a> </span
        >. Bank of America, N.A. Member FDIC.
      </p>
    </div>

    <!-- paragrap section -->
    <div class="pt-4">
      <!-- paragraph top -->
      <div class="flex justify-between flex-col md:flex-row">
        <!-- head-text-1 -->
        <div class="flex flex-col md:w-[50%] w-auto">
          <h4 class="text-[#8f8f8f]">EARNING STARS</h4>
          <p class="py-[10px]">
            Stars cannot be earned on purchases of alcohol, Starbucks Cards or
            Starbucks Card reloads.
          </p>
          <p class="py-[10px]">
            Earn 1 Star per $1 spent when you scan your member barcode in the
            app, then pay with cash, credit/debit cards or mobile wallets at
            participating stores. You can also earn 1 Star per $1 spent when you
            link a payment method and pay directly through the app.
          </p>
          <p class="py-[10px]">
            Earn 2 Stars per $1 spent when you load funds and pay with your
            digital Starbucks Card in the app. You can also earn 2 Stars per $1
            spent when you pay in-person at a participating store with your
            registered physical Starbucks Card or scan your member barcode in
            the app, and then use any physical Starbucks Card (regardless of
            whether it is registered) to complete the purchase.
          </p>
        </div>
        <!-- head-text-2 -->
        <div class="md:w-[50%] w-auto">
          <h4 class="text-[#8f8f8f]">TERMS OF USE</h4>
          <p class="py-[10px]">
            For full program details visit
            <span class="inline-block">
              <a
                href="../../pages/privacy/term.html"
                class="text-green-700 hover:underline flex items-center gap-1">
                starbucks.com/rewards/terms
                <img
                  class="size-[15px]"
                  src="../../images/reward/external-link.png"
                  alt=""
              /></a>
            </span>
          </p>
          <p>
            Starbucks® Rewards benefits are available at participating Starbucks
            stores. Not all stores have the ability to honor Rewards at this
            time. Visit the
            <span class="inline-block">
              <a
                href="../../pages/find-a-store/find-a-store.html"
                class="text-green-700 hover:underline flex items-center gap-1">
                Starbucks Store Locator

                <img
                  class="size-[15px]"
                  src="../../images/reward/external-link.png"
                  alt="" />
              </a> </span
            >, and search for locations honoring “Redeem Rewards”.
          </p>
        </div>
      </div>
      <!-- paragraph-bottom -->
      <div class="flex justify-between flex-col md:flex-row">
        <div class="flex flex-col md:w-[50%] w-auto">
          <h4 class="text-[#8f8f8f] md:pt-0 pt-[10px]">BENEFITS</h4>
          <p class="py-[10px]">
            Free refills available during same in-store visit only. To qualify
            for the Birthday Reward, you must have made at least one
            Star-earning transaction.
          </p>
        </div>
        <!-- head-text-2 -->
        <div class="md:w-[50%] w-auto">
          <h4 class="text-[#8f8f8f]">REDEEMING REWARDS</h4>
          <p class="py-[10px]">
            Rewards cannot be redeemed for alcoholic beverages or multi-serve
            items. You pay the difference for any beverage customization over $1
            and/or merchandise item over $20. Not all stores honor tiered
            Rewards. Select stores redeem 200 Stars for free food or drink items
            only.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    `
}
class Instruction extends HTMLElement {
    connectedCallback() {
        this.innerHTML = instruction()
    }
}

customElements.define('instruction-component', Instruction)