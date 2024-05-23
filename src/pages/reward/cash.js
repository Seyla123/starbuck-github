const cashCard = () => {
    return `
    <!-- Cash or card, you earn Stars -->
    <section id="cash-rcard" class="w-full bg-[#f2f0eb] mt-[100px] p-6 2xl:px-0">
        <div class="max-w-screen-2xl mx-auto h-full py-[40px]">
            <!-- heading -->
            <div class="max-w-screen-sm mx-auto flex-col text-center">
                <h3 class="text-[26px] font-medium pb-[15px]">
                    Cash or card, you earn Stars
                </h3>
                <p>
                    No matter how you pay, you can earn Stars with your morning coffee.
                    Those Stars add up to (really delicious) Rewards.
                </p>
            </div>

            <!-- instruction 1 -->
            <div class="w-full mt-[50px] flex flex-col md:flex-row justify-between gap-2 px-4">
                <div class="max-w-[480px] md:pb-0 pb-6">
                    <h4 class="text-[20px] font-medium flex items-center">
                        1
                        <span class="pr-2">
                            <img class="size-[15px]" src="../../images/reward/star (1).png" alt="" />
                        </span>
                        per dollar
                    </h4>
                    <p class="md:text-[16px] text-[14px]">Pay as you go</p>
                </div>

                <div class="max-w-[480px] flex gap-4 md:pb-0 pb-10">
                    <div>
                        <img class="w-[112px] h-[158px] object-contain" src="../../images/reward/1A.png" alt="" />
                    </div>
                    <div class="w-[305px] h-[158px]">
                        <h4 class="md:text-[20px] text-[16px] font-medium">Scan and pay separately</h4>
                        <p class="my-[10px] md:text-[16px] text-[14px]">
                            Use cash or credit/debit card at the register.
                        </p>
                    </div>
                </div>
                <div class="max-w-[480px] flex gap-4">
                    <div>
                        <img class="w-[112px] h-[158px] object-contain" src="../../images/reward/1B.png" alt="" />
                    </div>
                    <div class="w-[305px] h-[158px]">
                        <h4 class="md:text-[20px] text-[16px] font-medium">Save payment in the app</h4>
                        <p class="my-[10px] md:text-[16px] text-[14px]">
                            Check-out faster by saving a credit/debit card or PayPal to your account.
                            You’ll be able to order ahead or scan and pay at the register in one step.
                        </p>
                    </div>
                </div>
            </div>

            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300 flex items-center justify-between gap-2" />

            <!-- instruction 2 -->
            <div class="w-full mt-[50px] flex flex-col md:flex-row justify-between gap-2 px-4">
                <div class="max-w-[480px] md:pb-0 pb-6">
                    <h4 class="text-[20px] font-medium flex items-center">
                        2
                        <span class="pr-2">
                            <img class="size-[15px]" src="../../images/reward/star (1).png" alt="" />
                        </span>
                        per dollar
                    </h4>
                    <p class="md:text-[16px] text-[14px]">Add funds in the app</p>
                </div>

                <div class="max-w-[480px] flex gap-4 md:pb-0 pb-10">
                    <div>
                        <img class="w-[112px] h-[158px] object-contain" src="../../images/reward/2A.png" alt="" />
                    </div>
                    <div class="w-[305px] h-[158px]">
                        <h4 class="md:text-[20px] text-[16px] font-medium">Preload</h4>
                        <p class="my-[10px] md:text-[16px] text-[14px]">
                            To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option.
                            Scan and pay in one step or order ahead in the app.
                        </p>
                    </div>
                </div>
                <div class="max-w-[480px] flex gap-4">
                    <div>
                        <img class="w-[112px] h-[158px] object-contain" src="../../images/reward/2B.png" alt="" />
                    </div>
                    <div class="w-[305px] h-[158px]">
                        <h4 class="md:text-[20px] text-[16px] font-medium">Register your gift card</h4>
                        <p class="my-[10px] md:text-[16px] text-[14px]">
                            Register your gift card Then use it to pay through the app.
                            You can even consolidate balances from multiple cards in one place.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}

   
class CashCard extends HTMLElement {
    connectedCallback() {
        this.innerHTML = cashCard();
    }
}

customElements.define('cash-card-component', CashCard)