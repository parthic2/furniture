// sticky header and preloader
// window.addEventListener("load", function () {
//     var loader = document.getElementById("preloader");
//     var headerSticky = document.getElementById("header-sticky");

//     // Hide the preloader after a delay
//     setTimeout(() => {
//         // loader.style.display = "none";
//         headerSticky.style.display = "block";

//         // Add scroll event listener only after preloader is hidden
//         window.addEventListener('scroll', function () {
//             if (loader.style.display === "none") {
//                 var scroll = window.scrollY;
//                 headerSticky.classList.toggle("header-sticky", scroll >= 100);
//             }
//         });
//     }, 100);
// });

window.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    const tableIcon = document.getElementById("table");
    const chairIcon = document.getElementById("chair");
    let isAnimationRunning = true;

    // Start table/chair switch every 3 seconds
    const switchInterval = setInterval(() => {
        if (isAnimationRunning) {
            tableIcon.classList.toggle("hidden");
            chairIcon.classList.toggle("hidden");
        }
    }, 600); // Toggle animations every 3 seconds

    // Hide preloader and stop animation after 3 seconds
    setTimeout(() => {
        preloader.style.display = "none";
        isAnimationRunning = false; // Stop the animation
        clearInterval(switchInterval); // Clear the interval
    }, 3000);
});

// slider slider
const serviceSwiper = new Swiper('.tp-slider__active', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2000, // Adjust the delay (in milliseconds) as needed
        disableOnInteraction: false, // Prevent auto-play from stopping on user interaction
    },
    navigation: {
        prevEl: '.slider-prev',
        nextEl: '.slider-next',
    }
});

// feature slider
const featureSwiper = new Swiper('.tp-feature__active', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 2000, // Adjust the delay (in milliseconds) as needed
        disableOnInteraction: false, // Prevent auto-play from stopping on user interaction
    },
    // navigation: {
    //     prevEl: '.slider-prev',
    //     nextEl: '.slider-next',
    // }
});

const feature2Swiper = new Swiper('.tp-feature-2__active', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 2000, // Adjust the delay (in milliseconds) as needed
        disableOnInteraction: false, // Prevent auto-play from stopping on user interaction
    },
    // navigation: {
    //     prevEl: '.slider-prev-2',
    //     nextEl: '.slider-next-2',
    // }
});

// testimoinal slider
const testiSwiper = new Swiper('.tp-testi__active', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 2000, // Adjust the delay (in milliseconds) as needed
        disableOnInteraction: false, // Prevent auto-play from stopping on user interaction
    },
    navigation: {
        prevEl: '.slider-prev-test',
        nextEl: '.slider-next-test',
    }
});

// header js
// for open sidebar
document.querySelector('.tp-menu-bar').addEventListener('click', function () {
    document.querySelector('.tpoffcanvas').classList.add('opened');
    document.querySelector('.body-overlay').classList.add('apply');
});

document.querySelector('.close-btn').addEventListener('click', function () {
    document.querySelector('.tpoffcanvas').classList.remove('opened');
    document.querySelector('.body-overlay').classList.remove('apply');
});

document.querySelector('.body-overlay').addEventListener('click', function () {
    document.querySelector('.tpoffcanvas').classList.remove('opened');
    document.querySelector('.body-overlay').classList.remove('apply');
});


// for mobile menu to display menu item
if (document.querySelectorAll('.tp-main-menu-content').length && document.querySelectorAll('.tp-main-menu-mobile').length) {
    let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
    let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
    mobileNavContainer.innerHTML = navContent;

    let arrow = document.querySelectorAll(".tp-main-menu-mobile .has-dropdown > a");

    arrow.forEach(function (arrowItem) {
        let arrowBtn = document.createElement("button");
        arrowBtn.classList.add("dropdown-toggle-btn");
        arrowBtn.innerHTML = "<i class='fa-solid fa-angle-right'></i>";

        arrowItem.appendChild(arrowBtn);

        arrowBtn.addEventListener("click", function (e) {
            e.preventDefault();
            let self = this;
            self.classList.toggle("dropdown-opened");
            self.parentElement.classList.toggle("expanded");
            self.parentElement.parentElement.classList.add("dropdown-opened");
            let siblings = self.parentElement.parentElement.parentElement.children;
            for (let sibling of siblings) {
                if (sibling !== self.parentElement.parentElement) {
                    sibling.classList.remove("dropdown-opened");
                }
            }
            self.parentElement.parentElement.querySelector(".tp-submenu").style.display = self.classList.contains("dropdown-opened") ? "block" : "none";
        });
    });
}

// add product plus minus js
// const cartPlusMinus = document.querySelectorAll(".cart-plus-minus");
// cartPlusMinus.innerHTML = '<div class="dec qtybutton">-</div>';
// cartPlusMinus.innerHTML += '<div class="inc qtybutton">+</div>';

document.querySelectorAll(".qtybutton").forEach(function (element) {
    element.addEventListener("click", function () {
        const parent = this.parentElement;
        const input = parent.querySelector("input");
        let value = parseFloat(input.value);
        if (this.textContent === "+") {
            value += 1;
        } else if (value > 1) {
            value -= 1;
        } else {
            value = 1;
        }
        input.value = value;
    });
});

// index2.html js
// for index2.html file all categories menu in desktop
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (event) => {
        const categoryMenuNav = document.querySelector(".tp-category-menu > nav > ul");

        // Handle click events using event delegation
        if (event.target.classList.contains("tp-category-menu-toggle")) {
            // Toggle menu visibility when the toggle button is clicked
            categoryMenuNav.style.display = (categoryMenuNav.style.display === "block") ? "none" : "block";
        } else if (event.target.tagName === "LI" && categoryMenuNav.contains(event.target)) {
            // Handle click on menu items
            categoryMenuNav.style.display = "none"; // Hide menu after selecting an item
        } else {
            // Handle clicks outside the menu by closing the menu
            categoryMenuNav.style.display = "none";
        }
    });
});

// for mobile menu to open all categories
const categoryMenuContent = document.querySelector(".tp-category-menu-content");
const mobileMenu = document.querySelector(".tp-category-mobile-menu");

if (categoryMenuContent && mobileMenu) {
    mobileMenu.innerHTML = categoryMenuContent.outerHTML;

    document.querySelector('.tp-offcanvas-category-toggle').addEventListener('click', function () {
        const nav = this.nextElementSibling;
        if (nav) {
            nav.style.display = (nav.style.display === "block") ? "none" : "block";
        }
    });

    document.querySelectorAll(".tp-category-mobile-menu .has-dropdown > a").forEach(function (arrowLink) {
        const arrowBtn = document.createElement("button");
        arrowBtn.classList.add("dropdown-toggle-btn");
        arrowBtn.innerHTML = "<i class='fa-regular fa-angle-right'></i>";
        arrowLink.appendChild(arrowBtn);

        arrowBtn.addEventListener("click", function (e) {
            e.preventDefault();
            const parentListItem = arrowLink.parentElement;
            const grandparentListItem = parentListItem.parentElement;
            parentListItem.classList.toggle("expanded");
            parentListItem.classList.toggle("dropdown-opened");
            Array.from(grandparentListItem.children).forEach(sibling => {
                if (sibling !== parentListItem) {
                    sibling.classList.remove("dropdown-opened");
                }
            });
            const submenu = grandparentListItem.querySelector(".tp-submenu");
            if (submenu) {
                submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
            }
        });
    });
}

// price range slider
const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);
        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});