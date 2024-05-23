import { createProductCard } from "../../script/components/product-card.js";

// Array containing product details for the feature menu page
const product = [{
    id:0,
    title: "New Spicy Dragonfruit Lemonade Refreshers<sup class='text-xl'>®</sup>",
    img: "../../images/menu/feature-menu-6.jpg",
    description: "Zesty lemonade and real dragonfruit pieces shaken with a three-pepper chili blend.",
    backgroundColor: "bg-[#fe7bbf]",
    textColor: "text-black"
},
{
    id:1,
    title: "New Spicy Strawberry Lemonade Refreshersas<sup class='text-base'>®</sup>",
    img: "../../images/menu/feature-menu-7.jpg",
    description: "Refreshingly sweet with strawberry pieces and a spicy twist.",
    backgroundColor: "bg-[#ffbd03]",
    textColor: "text-[#1e3932]"
},
{
    id:2,
    title: "New Spicy Pineapple Lemonade Refreshers<sup class='text-base'>®</sup>",
    img: "../../images/menu/feature-menu-1.jpg",
    description: "Real pieces of pineapple shaken with lemonade and our three-pepper chili blend for a spicy-meets-sweet kick.",
    backgroundColor: "bg-[#ffbd03]",
    textColor: "text-[#1e3932]"
},
{
    id:3,
    title: "New Lavender Crème Frappuccino<sup class='text-base'>®</sup> blended beverage",
    img: "../../images/menu/feature-menu-2.jpg",
    description: "Refreshingly sweet with strawberry pieces and a spicy twist.",
    backgroundColor: "bg-[#d5d0ea]",
    textColor: "text-[#1e3932]"
},
{
    id:4,
    title: "New Spicy Dragonfruit Lemonade Refreshers",
    img: "../../images/menu/feature-menu-3.jpg",
    description: "Real pieces of pineapple shaken with lemonade and our three-pepper chili blend for a spicy-meets-sweet kick.",
    backgroundColor: "bg-[#d5d0ea]",
    textColor: "text-[#1e3932]"
},
{
    id:5,
    title: "New Iced Lavender Oatmilk Latte",
    img: "../../images/menu/feature-menu-4.jpg",
    description: "Starbucks<sup class='text-base'>®</sup> Blonde espresso and oatmilk with subtle floral accents and sweetness served over ice.",
    backgroundColor: "bg-[#d5d0ea]",
    textColor: "text-[#1e3932]"
},
{
    id:6,
    title: "New Lavender Oatmilk Chill",
    img: "../../images/menu/feature-menu-5.jpg",
    description: "A caffeine-free blend of creamy oatmilk and subtle floral notes, hand-shaken with ice and real dragonfruit pieces.",
    backgroundColor: "bg-[#d5d0ea]",
    textColor: "text-[#1e3932]"
},
]

// Custom web component that loops through product data to create product cards
class loopProductCard extends HTMLElement {
    connectedCallback() {
        let html= ''

        // Loop through each product and generate HTML for product cards
        for (let i = 0; i < product.length; i++) {
            const img = product[i].img;
            const isRevers = i == 0 ? 'flex-row' :'';
            const backgroundColor = product[i].backgroundColor;
            const textColor = product[i].textColor;
            const title = product[i].title;
            const customTitle = i ==0 ? " " : "lg:text-[24px] text-[24px]";
            const customDesc = i ==0 ? " " :"lg:text-xl";
            const description = product[i].description;
            const buttonTitle = 'Order Now';
            const buttonLink =  `../../pages/product/product_detail.html?${product[i].id}`;

            // Use the layout component to create the product card
            html += createProductCard(img, isRevers, backgroundColor, textColor, title, description, buttonTitle, buttonLink,customTitle,customDesc);
            html += i == 0 ? '<section class=" gap-4 my-5 grid grid-cols-1 md:grid-cols-2">' : '';
        }
        html += '</section>'
        this.innerHTML = html;
    }
}
// Define the custom element for the feature content product card
customElements.define('feature-content-product-card', loopProductCard);