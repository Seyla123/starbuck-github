// input bar on the picture
const whatYourName = document.querySelector("#whatYourName");
const whatYourNameInput = document.querySelector("#whatYourNameInput");

whatYourNameInput.addEventListener("focus",()=>{
  whatYourName.classList.remove("text-black/90")
  whatYourName.classList.add("left-3", "-top-2", "text-xs", "bg-white", "px-1" ,"text-[#00754a]")
})
whatYourNameInput.addEventListener("focusout",()=>{
  if(whatYourNameInput.value.length == 0){
    whatYourName.classList.remove("left-3", "-top-2", "text-xs", "bg-white", "px-1" ,"text-[#00754a]")
  }
})
