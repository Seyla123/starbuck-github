function rippleEffect(event) {
    const btn = event.currentTarget;
  
    const circle = document.createElement("span");
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    circle.classList.add("z-10");
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (btn.offsetTop + radius)}px`;
    circle.classList.add("ripple");
  
    const ripple = btn.getElementsByClassName("ripple")[0];
  
    if (ripple) {
      ripple.remove();
    }
  
    btn.appendChild(circle);
  }
  function req(input,label,labelText,rep) {
            label.classList.remove("left-3","top-[-18%]","md:text-sm","text-[#00754a]");
             label.classList.add("text-red-500");
             labelText.classList.add("text-red-500");
             input.classList.add("border-2","border-red-500");
             rep.classList.remove("hidden");
}
function unfocused(input,label,labelText,rep) {
    label.classList.add("left-3","top-[-18%]","md:text-sm","text-[#00754a]");
     label.classList.remove("text-red-500");
     labelText.classList.remove("text-red-500");
     input.classList.remove("border-2","border-red-500");
     rep.classList.add("hidden");
}
  function focued(input,label,labelText,rep){
    input.addEventListener("focus", () => {
        //!-- left-3 top-[-20%] text-sm text-red-500 || border-2 border-red-500-->
        label.classList.add("left-3","top-[-18%]","md:text-sm","text-[#00754a]");
        input.addEventListener("focusout", () => {
         if (input.value.length <=0){
            req(input,label,labelText,rep)
         }else{
            label.classList.remove("text-[#00754a]")
         }
        })
     })
  }
  function required(input,label,labelText,rep){
    focued(input,label,labelText,rep);
    input.addEventListener("input", () => {
        if(input.value.length !==0){
    
            label.classList.add("left-3","top-[-18%]","text-sm","text-[#00754a]");
            label.classList.remove("text-red-500");
            labelText.classList.remove("text-red-500");
            input.classList.remove("border-2","border-red-500");
            rep.classList.add("hidden");
        }
    })
}

    
      
      const btn = document.querySelectorAll(".bt");
      for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", rippleEffect);
      }
    const userInput = document.querySelector("#userInput");
    const userLabel = document.querySelector("#userLabel");
    const userLabelText = document.querySelector("#userLabel span span");
    const reqUser = document.querySelector("#reqUser");
    required(userInput,userLabel,userLabelText,reqUser);

    const passInput = document.querySelector("#passInput");
    const passLabel = document.querySelector("#passLabel");
    const passLabelText = document.querySelector("#passLabel span span");
    const reqPass = document.querySelector("#reqPass");
    required(passInput,passLabel,passLabelText,reqPass);
    

    
    let isOpen = false;
    const showPassBtn = document.querySelector("#showPass");
    const openEye = document.querySelector(".openEye");
    const closeEye = document.querySelector(".closeEye");

    showPassBtn.addEventListener("click", () => {

        if (isOpen) {
            isOpen = false;
            passInput.setAttribute("type", "text");
            openEye.classList.remove("hidden");
            closeEye.classList.add("hidden");
        }else{
            isOpen = true;
            passInput.setAttribute("type", "password");
            openEye.classList.add("hidden");
            closeEye.classList.remove("hidden");
        }
    })
