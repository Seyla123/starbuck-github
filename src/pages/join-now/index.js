        
        const accordingHeaders = document.querySelectorAll(".according-header");

        accordingHeaders.forEach((header) => {
            header.addEventListener("click", function () {
                const accordingContent = header.parentElement.querySelector(".according-content");
                let accordingMaxHeight = accordingContent.style.maxHeight;

                if (!accordingMaxHeight || accordingMaxHeight === "0px") {
                    accordingContent.style.maxHeight = `${accordingContent.scrollHeight + 44}px`;
                } else {
                    accordingContent.style.maxHeight = "0px";
                }
            });
        });
        const chevron = document.getElementById("chevron-button")
        const dropLetter = document.getElementById("drop-letter")
        dropLetter.addEventListener("click", () => {
            chevron.classList.toggle("rotate-180");
        })
        chevron.addEventListener("click", () => {
            chevron.classList.toggle("rotate-180");
        })
