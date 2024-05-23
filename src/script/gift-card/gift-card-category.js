const imgArr = [
    ["../../images/gift-card/feature-1.jpg", "../../images/gift-card/feature-2.jpg", "../../images/gift-card/feature-3.jpg", "../../images/gift-card/feature-4.jpg",
				"../../images/gift-card/feature-5.png", "../../images/gift-card/feature-6.jpg", "../../images/gift-card/feature-7.jpg", "../../images/gift-card/feature-8.png",
				"../../images/gift-card/feature-9.jpg", "../../images/gift-card/feature-10.png", "../../images/gift-card/feature-11.png", "../../images/gift-card/feature-12.jpg",
				"../../images/gift-card/feature-13.png", "../../images/gift-card/feature-14.png", "../../images/gift-card/feature-15.png", "../../images/gift-card/feature-16.jpg",
				"../../images/gift-card/feature-17.png", "../../images/gift-card/feature-18.png", "../../images/gift-card/feature-19.png", "../../images/gift-card/feature-20.jpg","../../images/gift-card/feature-21.jpg"],
    ["../../images/gift-card/image copy 5.png", "../../images/gift-card/image copy 6.png", "../../images/gift-card/image copy 7.png", "../../images/gift-card/image copy 8.png"],
    ["../../images/gift-card/bd-1.jpg","../../images/gift-card/bd-2.jpg","../../images/gift-card/bd-3.png","../../images/gift-card/bd-4.jpg","../../images/gift-card/bd-5.jpg", "../../images/gift-card/image copy 9.png", "../../images/gift-card/image copy 10.png", "../../images/gift-card/image copy 11.png", "../../images/gift-card/image copy 12.png"],
    ["../../images/gift-card/image copy 13.png", "../../images/gift-card/image copy 14.png", "../../images/gift-card/image copy 15.png", "../../images/gift-card/image copy 16.png"],
    ["../../images/gift-card/image copy 17.png", "../../images/gift-card/image copy 18.png", "../../images/gift-card/image copy 19.png", "../../images/gift-card/image copy 20.png", "../../images/gift-card/image copy 31.png", "../../images/gift-card/image copy 32.png", "../../images/gift-card/image copy 33.png"],
    ["../../images/gift-card/image copy 21.png", "../../images/gift-card/image copy 22.png", "../../images/gift-card/image copy 23.png"],
    ["../../images/gift-card/image copy 24.png", "../../images/gift-card/image copy 25.png", "../../images/gift-card/image copy 26.png"],
    ["../../images/gift-card/image copy 27.png", "../../images/gift-card/image copy 28.png", "../../images/gift-card/image copy 29.png", "../../images/gift-card/image copy 30.png"],
    ["../../images/gift-card/image copy 6.png", "../../images/gift-card/image copy 7.png", "../../images/gift-card/image copy 8.png"],
]
let cardCategory = window.location.href.split("?");
cardCategory = cardCategory[1];

const createCardCategory = (imgArr)=>{
    
        return `
        <div class="mx-2 my-4 rounded-lg md:rounded-2xl overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:-translate-y-4 duration-500">
            <a href="../../pages/gift-card/gift-card-detail.html?${item}" class="w-full">
                <img src="${item}" class="object-cover w-full h-full">
            </a>
        </div>`;
   
}

// class createCardCategoryComponent extends HTMLElement {
// 	connectedCallback() {
// 		const imgArr = this.getAttribute('imgArr');
// 		// Parse the imgUrl attribute as an array

// 		this.innerHTML = createCarousel(imgArr);
// 	}
// }

// customElements.define('gift-card-category-component', createCardCategoryComponent);

const giftCardCategory = document.querySelector("#giftCardCategory")

let html = ""
imgArr[cardCategory].forEach(item => {
    html +=`
    <div class="rounded-lg md:rounded-2xl overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:-translate-y-4 duration-500">
            <a href="../../pages/gift-card/gift-card-detail.html?${item}" class="w-full">
                <img src="${item}" class="object-cover w-full h-full">
            </a>
        </div>`
});
giftCardCategory.innerHTML = html;