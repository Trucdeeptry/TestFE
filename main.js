// hanlde header
const checkboxes = document.querySelectorAll(".nav_item_checkbox");
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            checkboxes.forEach((otherCheckbox) => {
                if (otherCheckbox !== this) {
                    otherCheckbox.checked = false;
                }
            });
        }
    });
});

// hanlde number in 'about'
const infoAnalytics = document.querySelector(".info_analytics");
const h1 = infoAnalytics.querySelectorAll("h1");
infoAnalytics.addEventListener("mouseenter", () => {
    h1.forEach((child) => {
        child.style.animationPlayState = "running";
    });
});

function handleService() {
    const serviceButton = document.querySelector(".service_button");
    const serviceImg = document.querySelector(".service_img");
    // hanlde image
    const overlay = document.querySelector(".overlay");
    const service = document.querySelector(".service");
    const images = [
        "/assets/imgs/service-1.jpg",
        "/assets/imgs/service-2.jpg",
        "/assets/imgs/service-3.jpg",
    ];

    let currentIndex = 0;

    serviceButton.addEventListener("click", () => {
        serviceImg.style.opacity = 0;
        overlay.style.opacity = 1;
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            serviceImg.src = images[currentIndex];
            service.style.backgroundImage = `url(${images[currentIndex]})`;
            serviceImg.style.opacity = 1;
            overlay.style.opacity = 0;
        }, 1000);
    });
    serviceButton.addEventListener("click", handleCircle);
    handleCircle();
    // hanlde circle
    function handleCircle() {
        const circle3 = document.querySelector(".circle_3");
        const circle2 = document.querySelector(".circle_2");
        const circle1 = document.querySelector(".circle_1");
        const content = document.querySelector(".content_sub");
        setTimeout(() => {
            if (serviceImg && serviceImg.src.includes("/assets/imgs/service-1.jpg")) {
                circle3.classList.add("active");
                content.textContent = "Cung cấp giải pháp về hậu cần";
            } else {
                circle3.classList.remove("active");
            }
            if (serviceImg && serviceImg.src.includes("/assets/imgs/service-3.jpg")) {
                circle2.classList.add("active");
                content.textContent = "Giải pháp hàng hóa quốc tế";
            } else {
                circle2.classList.remove("active");
            }
            if (serviceImg && serviceImg.src.includes("/assets/imgs/service-2.jpg")) {
                circle1.classList.add("active");
                content.textContent = "Outsourecing hàng hóa";
            } else {
                circle1.classList.remove("active");
            }
        }, 1000);
    }
}

handleService();

// handle img partner
const firstPartner = document.querySelector(".partner_img:first-child");
const lastPartner = document.querySelector(".partner_img:last-child");

firstPartner.addEventListener("mouseenter", () => {
    firstPartner.style.opacity = 1;
    lastPartner.style.opacity = 0;
});

firstPartner.addEventListener("mouseleave", () => {
    firstPartner.style.opacity = 0;
    lastPartner.style.opacity = 1;
});

lastPartner.addEventListener("mouseenter", () => {
    firstPartner.style.opacity = 0;
    lastPartner.style.opacity = 1;
});

lastPartner.addEventListener("mouseleave", () => {
    firstPartner.style.opacity = 1;
    lastPartner.style.opacity = 0;
});

// hanlde send email
const button_icon = document.querySelector(".button_icon");
const info_button = document.querySelector(".info_button");
const paths = info_button.querySelectorAll("path");
let isClickInfo = false;
info_button.addEventListener("click", () => {
    isClickInfo = true;
    if (isClickInfo) {
        info_button.style.backgroundColor = "#FAFAFA";
        info_button.style.color = "#f14b23";
        paths.forEach((path) => {
            path.setAttribute("fill", "#f14b23");
        });
    }
});
