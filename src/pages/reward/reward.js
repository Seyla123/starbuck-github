
import "./hero.js";
import "./getting.js";
import "./endless.js";
import "./cash.js";
import "./keep.js";
import "./instruction.js";

const couponCard = () => {
  return `
      <section class="w-full bg-[#f1f8f5] mt-[50px]">
      <!-- heading -->
      <div
        class="max-w-screen-2xl mx-auto bg-[#f1f8f5] h-[80px] flex items-center justify-center">
        <h3 class="text-[26px] font-medium">Get your favorites for free</h3>
      </div>
    
      <!-- coupon-->
    
      <div class="flex items-center justify-center space-x-6">
        <!-- number 25 100 200 300 400 -->
        <button
          id="coupon25"
          class="py-2 max-w-[108px] text-[20px] font-medium justify-center cursor-pointer flex">
          25
          <img class="w-6" src="../../images/reward/star.png" alt="" />
        </button>
        <button
          id="coupon100"
          class="py-2 max-w-[108px] text-[20px] font-medium justify-center cursor-pointer flex">
          100
          <img class="w-6" src="../../images/reward/star.png" alt="" />
        </button>
        <button
          id="coupon200"
          class="py-2 max-w-[108px] text-[20px] font-medium justify-center cursor-pointer flex">
          200
          <img class="w-6" src="../../images/reward/star.png" alt="" />
        </button>
        <button
          id="coupon300"
          class="py-2 max-w-[108px] text-[20px] font-medium justify-center cursor-pointer flex">
          300
          <img class="w-6" src="../../images/reward/star.png" alt="" />
        </button>
        <button
          id="coupon400"
          class="py-2 max-w-[108px] text-[20px] font-medium justify-center cursor-pointer flex">
          400
          <img class="w-6" src="../../images/reward/star.png" alt="" />
        </button>
      </div>
    
      <!-- greenline -->
      <div class="max-w-[430px] mx-auto flex items-center">
        <span id="green-underline" class="w-20 flex h-[5px] bg-green-800"></span>
      </div>
    
      <!-- content image -->
      <div class="w-full bg-[#d4e9e2]">
        <div
          class="max-w-screen-2xl mx-auto md:h-[300px] h-auto flex flex-col md:flex-row">
          <div
            id="content-25"
            class="w-full mx-auto flex md:flex-row flex-col items-center justify-center gap-[50px] py-[40px]">
            <img
              class="md:w-[375px] w-full md:h-[210px] h-full"
              src="../../images/reward/25.png"
              alt="" />
            <div class="flex flex-col max-w-[300px]">
              <h1 class="text-[22px] font-medium">Customize your drink</h1>
              <p class="mt-[20px]">
                Make your drink just right with an extra espresso shot, nondairy
                milk or a dash of your favorite syrup.
              </p>
            </div>
          </div>
    
          <div
            id="content-100"
            class="w-full mx-auto flex md:flex-row flex-col items-center justify-center gap-[50px] py-[40px] hidden">
            <img
              class="md:w-[375px] w-full md:h-[210px] h-full"
              src="../../images/reward/100.png"
              alt="" />
            <div class="flex flex-col max-w-[300px]">
              <h1 class="text-[22px] font-medium">
                Brewed hot or iced coffee or tea, bakery item, packaged snack and
                more
              </h1>
              <p class="mt-[20px]">
                Treat yourself to an iced coffee, buttery croissant, bag of chips
                and more.
              </p>
            </div>
          </div>
    
          <div
            id="content-200"
            class="w-full mx-auto md:flex-row flex-col items-center justify-center gap-[50px] py-[40px] flex hidden">
            <img
              class="md:w-[375px] w-full md:h-[210px] h-full"
              src="../../images/reward/200.png"
              alt="" />
            <div class="flex flex-col max-w-[300px]">
              <h1 class="text-[22px] font-medium">
                Handcrafted drink (Cold Brew, lattes and more) or hot breakfast
              </h1>
              <p class="mt-[20px]">
                Turn good mornings great with a delicious handcrafted drink of your
                choice, breakfast sandwich or oatmeal on us.
              </p>
            </div>
          </div>
    
          <div
            id="content-300"
            class="w-full md:flex-row flex-col mx-auto flex items-center justify-center gap-[50px] py-[40px] hidden">
            <img
              class="md:w-[375px] w-full md:h-[210px] h-full"
              src="../../images/reward/300.png"
              alt="" />
            <div class="flex flex-col max-w-[300px]">
              <h1 class="text-[22px] font-medium">
                Sandwich, protein box or at-home coffee
              </h1>
              <p class="mt-[20px]">
                Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of
                coffee—including Starbucks VIA Instant®.
              </p>
            </div>
          </div>
    
          <div
            id="content-400"
            class="w-full md:flex-row flex-col mx-auto items-center justify-center gap-[50px] py-[40px] flex hidden">
            <img
              class="md:w-[375px] w-full md:h-[210px] h-full"
              src="../../images/reward/400.png"
              alt="" />
            <div class="flex flex-col max-w-[300px]">
              <h1 class="text-[22px] font-medium">Select Starbucks® merchandise</h1>
              <p class="mt-[20px]">
                Take home a signature cup, drink tumbler or your choice of coffee
                merch up to $20.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
      `;
};

class CouponCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = couponCard();

    // get element address according to the coupon
    const couPon25 = document.getElementById("coupon25");
    const couPon100 = document.getElementById("coupon100");
    const couPon200 = document.getElementById("coupon200");
    const couPon300 = document.getElementById("coupon300");
    const couPon400 = document.getElementById("coupon400");

    // get element address according to the image
    const conTent25 = document.getElementById("content-25");
    const conTent100 = document.getElementById("content-100");
    const conTent200 = document.getElementById("content-200");
    const conTent300 = document.getElementById("content-300");
    const conTent400 = document.getElementById("content-400");

    // get underline element address by id
    const underLine = document.getElementById("green-underline");

    // function action
    couPon25.addEventListener("click", () => {
      conTent25.classList.remove("hidden");
      conTent100.classList.add("hidden");
      conTent200.classList.add("hidden");
      conTent300.classList.add("hidden");
      conTent400.classList.add("hidden");
    });

    couPon100.addEventListener("click", () => {
      conTent25.classList.add("hidden");
      conTent100.classList.remove("hidden");
      conTent200.classList.add("hidden");
      conTent300.classList.add("hidden");
      conTent400.classList.add("hidden");
    });

    couPon200.addEventListener("click", () => {
      conTent25.classList.add("hidden");
      conTent100.classList.add("hidden");
      conTent200.classList.remove("hidden");
      conTent200.classList.add("duration-200");
      conTent300.classList.add("hidden");
      conTent400.classList.add("hidden");
    });

    couPon300.addEventListener("click", () => {
      conTent25.classList.add("hidden");
      conTent100.classList.add("hidden");
      conTent200.classList.add("hidden");
      conTent300.classList.remove("hidden");
      conTent400.classList.add("hidden");
    });

    couPon400.addEventListener("click", () => {
      conTent25.classList.add("hidden");
      conTent100.classList.add("hidden");
      conTent200.classList.add("hidden");
      conTent300.classList.add("hidden");
      conTent400.classList.remove("hidden");
    });

    // move the underline
    // Calculate the width of each coupon element
    const couponWidth = couPon25.offsetWidth;
    underLine.style.transition = "transform 0.5s ease";

    couPon25.addEventListener("click", () => {
      moveUnderline(0);
    });

    couPon100.addEventListener("click", () => {
      moveUnderline(4.3);
    });

    couPon200.addEventListener("click", () => {
      moveUnderline(8.5);
    });

    couPon300.addEventListener("click", () => {
      moveUnderline(13);
    });

    couPon400.addEventListener("click", () => {
      moveUnderline(17.6);
    });

    // move according to the width of the coupon
    function moveUnderline(index) {
      const offset = index * couponWidth;
      underLine.style.transform = `translateX(${offset}px)`;
    }
  }
}
customElements.define("get-favorite-component", CouponCard);
