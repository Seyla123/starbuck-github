// Footer
export const footer = document.querySelector(".footer-layout");
fetch("../../components/layout/footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
    
    const btn1 = document.querySelectorAll(".btn1");
    const drop1 = document.querySelectorAll(".drop1");
    const imgArrow = document.querySelectorAll(".imgArrow");
  
    for (let i = 0; i < btn1.length; i++) {
      btn1[i].addEventListener("click", () => {
        btn1[i].classList.toggle("active");
        if (btn1[i].classList.contains("active")) {
          drop1[i].classList.add("max-h-screen");
          drop1[i].classList.remove("max-h-0");
          imgArrow[i].classList.add("rotate-180");
        } else {
          drop1[i].classList.remove("max-h-screen");
          drop1[i].classList.add("max-h-0");
          imgArrow[i].classList.remove("rotate-180");
        }
      });
    }    
  })
  .catch((error) => console.error("Error fetching included file:", error));
