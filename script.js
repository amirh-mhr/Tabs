


const btns = document.querySelectorAll(".tabs-btn .btn")
const contents = document.querySelectorAll(".tabs-content .content")



btns.forEach(btn => {
    btn.addEventListener("click",() => {
        btns.forEach(btn => {
            btn.classList.remove("active")
        })
    });
    btn.addEventListener("click", () => {
        contents.forEach(content => {
            content.classList.remove("active");
            if (btn.getAttribute("data-btn") === content.getAttribute("data-content")) {
            content.classList.add("active")
        }
        });
        
        btn.classList.add("active")
    });
});







