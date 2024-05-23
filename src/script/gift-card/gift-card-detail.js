let giftCard = window.location.href.split("?");
giftCard = giftCard[1];
const giftCardImg = document.querySelector("#giftCardImg");
giftCardImg.setAttribute("src",giftCard)

const spanInput = document.querySelectorAll(".spanInput");
function test() {
    for (i = 0; i < spanInput.length; i++) {
        spanInput[i].classList.remove("left-3", "top-[14px]");
        spanInput[i].classList.add("bg-white");
    }
}
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
function req(input, label, labelText, rep) {
    label.classList.remove("left-3", "top-[-18%]", "md:text-sm", "text-[#00754a]");
    label.classList.add("text-red-500");
    labelText.classList.add("text-red-500");
    input.classList.add("border-2", "border-red-500");
    rep.classList.remove("hidden");
}
function unfocused(input, label, labelText, rep) {
    label.classList.add("left-3", "top-[-18%]", "md:text-sm", "text-[#00754a]");
    label.classList.remove("text-red-500");
    labelText.classList.remove("text-red-500");
    input.classList.remove("border-2", "border-red-500");
    rep.classList.add("hidden");
}
function focued(input, label, labelText, rep) {
    input.addEventListener("focus", () => {
        //!-- left-3 top-[-20%] text-sm text-red-500 || border-2 border-red-500-->
        label.classList.add("left-3", "top-[-18%]", "md:text-sm", "text-[#00754a]");
        input.addEventListener("focusout", () => {
            if (input.value.length <= 0) {
                req(input, label, labelText, rep)
            } else {
                label.classList.remove("text-[#00754a]")
            }
        })
    })
}
function required(input, label, labelText, rep) {
    focued(input, label, labelText, rep);
    input.addEventListener("input", () => {
        if (input.value.length !== 0) {

            label.classList.add("left-3", "top-[-18%]", "text-sm", "text-[#00754a]");
            label.classList.remove("text-red-500");
            labelText.classList.remove("text-red-500");
            input.classList.remove("border-2", "border-red-500");
            rep.classList.add("hidden");
        }
    })
}
const btn = document.querySelectorAll(".bt");
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", rippleEffect);
}

const createInputField = (title, req) => {
	return `
    <div class="bt w-full  min-w-max overflow-hidden relative  flex items-center justify-center">
                    <div class=" relative w-full flex items-center my-3" >
                        <input  type="text"
                            class=" inputField w-full px-6 border border-gray-400 outline-none rounded-xl text-base  py-4 ">
                        </input>
                        <label  class="label text-base md:text-[19px] pointer-events-none duration-300 absolute left-6 top-4   cursor-text   sodan tracking-[1px]">
                            <span class="bg-white px-1 "><span class="text-[#00754a]">*</span>${title}</span>
                        </label>
                    </div>
                </div>
                <div class="req hidden flex  items-center text-sm  text-red-600 gap-2 sodan font-medium">
                    <span>
                        <svg aria-hidden="true" class="valign-middle fieldStatus__icon" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="width: 20px; height: 20px; overflow: visible; fill: currentcolor;"><path d="M9.1005 3H14.8995C15.4299 3 15.9386 3.21071 16.3137 3.58579L20.4142 7.68629C20.7893 8.06136 21 8.57007 21 9.1005L21 14.8995C21 15.4299 20.7893 15.9386 20.4142 16.3137L16.3137 20.4142C15.9386 20.7893 15.4299 21 14.8995 21H9.10051C8.57007 21 8.06136 20.7893 7.68629 20.4142L3.58579 16.3137C3.21071 15.9386 3 15.4299 3 14.8995V9.10051C3 8.57007 3.21071 8.06136 3.58579 7.68629L7.68629 3.58579C8.06136 3.21071 8.57007 3 9.1005 3ZM16.7071 7.29289C16.3166 6.90237 15.6834 6.90237 15.2929 7.29289L12 10.5858L8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L10.5858 12L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L12 13.4142L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L13.4142 12L16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289Z"></path></svg>
                    </span>
                    <span>${req}</span>
        </div>
`;
};

class CarouselInputField extends HTMLElement {
	connectedCallback() {
		const title = this.getAttribute('title');
		const req = this.getAttribute('req');
		// Parse the imgUrl attribute as an array

		this.innerHTML = createInputField(title, req);
	}
}

customElements.define('input-component', CarouselInputField);

inputField = document.querySelectorAll(".inputField")
labelText = document.querySelectorAll(".label")
reqLabel = document.querySelectorAll(".req")
labelTextSpan = document.querySelectorAll(".label span span")

inputField.forEach((element,i) => 
inputFunction(inputField[i],labelText[i],labelTextSpan[i],reqLabel[i])
);

function inputFunction(input,label,span,req){
    input.addEventListener("focus", () => {
        label.classList.add("left-3", "top-[-18%]", "md:text-sm", "text-[#00754a]");
        input.addEventListener("focusout", () => {
            if (input.value.length <= 0) {
                label.classList.remove("left-3","top-[-18%]","md:text-sm","text-[#00754a]");
                label.classList.add("text-red-500");
                span.classList.add("text-red-500");
                input.classList.add("border-2","border-red-500");
                req.classList.remove("hidden");
            } else {
                label.classList.remove("text-[#00754a]")
            }
        })
        input.addEventListener("input", () => {
            if(input.value.length !==0){
                label.classList.add("left-3","top-[-18%]","text-sm","text-[#00754a]");
                label.classList.remove("text-red-500");
                span.classList.remove("text-red-500");
                input.classList.remove("border-2","border-red-500");
                req.classList.add("hidden");
            }
        })
    })
}


const textArea = document.querySelector(".textArea")

textArea.addEventListener("focusout", () => {
    if (textArea.value.length<=0){
        console.log('no')
    }else{
        console.log("yes")
    }
})


