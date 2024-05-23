// Importing the layout component from the components directory
import * as Layout from "../../script/components/layout.js"

// Define an array of product objects, each containing details for display on the home page
const product = [{
  title: "Hope into half of",
  img: "../../images/home/home (1).jpg",
  description: "This week, play the Spring It On Scavenger Hunt game to earn 50% off a spring treat—like a refreshing Lavender Lemonade.",
  buttonTitle: "join the fun",
  buttonLink: "../../pages/join-now/join-now.html",
  backgroundColor: "bg-[#d3e8e1]",
  textColor: "text-[#1e3932]"
},
{
  title: "Ooh la lavende",
  img: "../../images/home/home (3).jpg",
  description: "Vibe into spring with the new caffeine-free Lavender Oatmilk Chill, featuring subtle floral notes and real dragonfruit pieces. Here for a limited time.",
  buttonTitle: "Order now",
  buttonLink: "../../pages/featured/feature-menu.html",
  backgroundColor: "bg-[#fdd8f7]",
  textColor: "text-[#1e3932]"
},
{
  title: "Personal cups for good",
  img: "../../images/home/home (4).jpg",
  description: "Your choice is a positive and responsible one—because bringing your clean reusable cup helps our planet.",
  buttonTitle: "join the fun",
  buttonLink: "../../pages/join-now/join-now.html",
  backgroundColor: "bg-[#97d8b1]",
  textColor: "text-[#1e3932]"
},
{
  title: "Positively delicious",
  img: "../../images/home/home (2).jpg",
  description: "Go for a nondairy pick-me-up with 150 calories or less in a grande. Choose the new Hazelnut Oatmilk Shaken Espresso or classic Brown Sugar Oatmilk Shaken Espresso.",
  buttonTitle: "Order now",
  buttonLink: "../../pages/featured/feature-menu.html",
  backgroundColor: "bg-[#cee8c9]",
  textColor: "text-[#1e3932]"
},
{
  title: "Satisfying favorite",
  img: "../../images/home/home (6).jpg",
  description: "The protein-packed Turkey Bacon, Cheddar & Egg White Sandwich is such a tasty way to power your day.",
  buttonTitle: "join the fun",
  buttonLink: "../../pages/join-now/join-now.html",
  backgroundColor: "bg-[#006241]",
  textColor: "text-[#ffffff]"
},
{
  title: "Relax with a refreshing delivery deal",
  img: "../../images/home/home (5).jpg",
  description: "Get up? Please! Stay right where you are and enjoy 25% off Starbucks orders of $20+ on Uber Eats, 4/8-4/14. Enjoy unlimited redemptions, up to $7 off per order.*",
  buttonTitle: "Order now",
  buttonLink: "../../pages/featured/feature-menu.html",
  backgroundColor: "bg-[#d4e9e2]",
  textColor: "text-[#1e3932]"
}
]

// Define a custom web component for looping through product data and creating product cards
class loopProductCard extends HTMLElement {
  connectedCallback() {
    let html =''
    let isTrue = false;
    product.forEach((element,i) => {
      // Extract product details from the current element in the loop
      const img = element.img
      const isRevers = isTrue ? 'flex-row-reverse' : 'flex-row';
      const backgroundColor = element.backgroundColor;
      const textColor = element.textColor
      const title = element.title
      const customTitle =  i == 5  ? 'lg:text-[24px] text-[24px]' : " " ;
      const customDesc = i == 5 ? "lg:text-xl" : " " ;
      const description = element.description
      const buttonTitle = element.buttonTitle;
      const buttonLink = element.buttonLink;

      // Generate HTML for each product card using the layout component
      html += Layout.createProductCard(img, isRevers, backgroundColor, textColor, title, description, buttonTitle, buttonLink,customTitle,customDesc);
      // Toggle isTrue to alternate card styles (flex reverse or not)
      isTrue = !isTrue;
    });
    // Set the inner HTML of the custom element to the generated product cards
    this.innerHTML=html;

  }
}
// Define the custom element for the home page content product card
customElements.define('home-content-product-card', loopProductCard);