// Select all card elements
const cards = document.querySelectorAll(".card-location");

// Function to remove styles from all cards and hide "Order Here" button
const resetCardsAndButton = () => {
  cards.forEach((card) => {
    card.classList.remove("border-[#00754a]", "bg-[#e9f0ee]", "border-2");
  });
  // Hide "Order Here" button
  const orderButtons = document.querySelectorAll(".order-btn");
  orderButtons.forEach((button) => {
    button.classList.add("hidden");
  });
};

// Loop through each card and add event listener
cards.forEach((card) => {
  card.addEventListener("click", () => {
    // Reset styles and hide "Order Here" button for all cards
    resetCardsAndButton();

    // Toggle the classes to change the style for the clicked card
    card.classList.add("border-[#00754a]", "bg-[#e9f0ee]", "border-2");

    // Show "Order Here" button for the clicked card
    const orderButton = card.querySelector(".order-btn");
    orderButton.classList.remove("hidden");
  });
});

// Scrolling action
const section = document.querySelector(".overflow-y-auto"); // Update class name
const buttons = document.querySelectorAll("#button-up");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonHeight = button.offsetHeight; // Get the height of the clicked button
    const currentScrollHeight = section.scrollTop; // Get the current scroll height
    const newScrollHeight = currentScrollHeight + buttonHeight; // Calculate the new scroll height
    section.scrollTo({
      top: newScrollHeight,
      behavior: "smooth",
    });
  });
});

// click and show filter
const filterBTN = document.querySelector("#filter-btn");
const closeBTN = document.querySelector("#close-btn");
const filterContent = document.querySelector("#filter-content");
const externalContent = document.querySelector("#external-content");
const componentHide = document.querySelector("#component-hide");
const findBTN = document.querySelector("#find-btn");

function showFilter() {
  filterContent.classList.remove("scale-[120%]", "opacity-0", "pointer-events-none");
  componentHide.classList.add("hidden");
  externalContent.classList.add("hidden");
  filterContent.classList.add("scale-[100%]", "opacity-100", "pointer-events-auto");
}
filterBTN.addEventListener("click", () => {
  showFilter()
});

findBTN.addEventListener("click", () => {
  showFilter()
});
closeBTN.addEventListener("click", () => {
  filterContent.classList.add("scale-[120%]", "opacity-0", "pointer-events-none");
  filterContent.classList.remove("scale-[100%]", "opacity-100", "pointer-events-auto");
  componentHide.classList.remove("hidden");
  externalContent.classList.remove("hidden");
});
