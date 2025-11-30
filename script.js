const btns = document.querySelectorAll(".tabs-btn .btn");
const contents = document.querySelectorAll(".tabs-content .content");

// Sidebar Navigation
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        btns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        contents.forEach(content => {
            content.classList.remove("active");
        });

        const targetId = btn.getAttribute("data-btn");
        const targetContent = document.querySelector(`.content[data-content="${targetId}"]`);

        if (targetContent) {
            targetContent.classList.add("active");
        }

        // Ensure we go back to list view if sidebar is clicked
        document.getElementById("product-details").classList.add("hidden");
        document.querySelector(".content-area").classList.remove("hidden");
    });
});

// Product Details Logic
const productCards = document.querySelectorAll(".product-card");
const productDetails = document.getElementById("product-details");
const contentArea = document.querySelector(".content-area");
const backBtn = document.getElementById("back-btn");

// Mock Data for demonstration
const productData = {
    title: "محصول نمونه",
    price: "۲,۵۰۰,۰۰۰ تومان",
    desc: "این یک توضیحات نمونه برای محصول انتخاب شده است. این محصول دارای ویژگی‌های منحصر به فردی است.",
    specs: `<ul><li>ویژگی اول: عالی</li><li>ویژگی دوم: فوق‌العاده</li></ul>`
};

productCards.forEach(card => {
    card.addEventListener("click", function () {
        const title = this.querySelector("h3").innerText;
        const price = this.querySelector(".price").innerText;

        // Update Details View
        document.getElementById("detail-title").innerText = title;
        document.getElementById("detail-price").innerText = price;

        // Show Details, Hide Grid
        contentArea.classList.add("hidden");
        productDetails.classList.remove("hidden");
    });
});

backBtn.addEventListener("click", () => {
    productDetails.classList.add("hidden");
    contentArea.classList.remove("hidden");
});

// Quantity Selector
const qtyMinus = document.getElementById("qty-minus");
const qtyPlus = document.getElementById("qty-plus");
const qtyValue = document.getElementById("qty-value");

qtyMinus.addEventListener("click", () => {
    let val = parseInt(qtyValue.innerText);
    if (val > 1) qtyValue.innerText = val - 1;
});

qtyPlus.addEventListener("click", () => {
    let val = parseInt(qtyValue.innerText);
    qtyValue.innerText = val + 1;
});

// Color Selector
const colorOptions = document.querySelectorAll(".color-option");
colorOptions.forEach(opt => {
    opt.addEventListener("click", () => {
        colorOptions.forEach(o => o.classList.remove("selected"));
        opt.classList.add("selected");
    });
});

// Product Tabs (Desc, Specs, Comments)
const pTabBtns = document.querySelectorAll(".p-tab-btn");
const pContents = document.querySelectorAll(".p-content");

pTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        pTabBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        pContents.forEach(c => c.classList.remove("active"));
        const target = btn.getAttribute("data-ptab");
        document.querySelector(`.p-content[data-pcontent="${target}"]`).classList.add("active");
    });
});
