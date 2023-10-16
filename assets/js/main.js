// Get a reference to the window object
var windowOn = window;

// Add a scroll event listener to the window
windowOn.addEventListener('scroll', function () {
    var scroll = windowOn.scrollY; // Get the vertical scroll position
    var headerSticky = document.getElementById("header-sticky");

    if (scroll < 100) {
        // Remove the "header-sticky" class
        headerSticky.classList.remove("header-sticky");
        document.getElementById("header-sticky").style.display = "block";
    } else {
        // Add the "header-sticky" class
        headerSticky.classList.add("header-sticky");
        document.getElementById("header-sticky").style.display = "block";
    }
});

// slider slider
const serviceSwiper = new Swiper('.tp-slider__active', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
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

// products page dropdown menu js
document.querySelectorAll(".dropdown .option-btn").forEach(function (button) {
    button.addEventListener("click", function () {
        const menu = this.nextElementSibling;
        menu.classList.toggle("active");
        menu.style.display = menu.classList.contains("active") ? "block" : "none";
    });
});

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
const categoryMenuToggle = document.querySelector(".tp-category-menu-toggle");
const categoryMenuNav = document.querySelector(".tp-category-menu > nav > ul");

categoryMenuToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    categoryMenuNav.style.display = (categoryMenuNav.style.display === "block") ? "none" : "block";
});

document.addEventListener("click", (event) => {
    if (event.target !== categoryMenuToggle && !categoryMenuNav.contains(event.target)) {
        categoryMenuNav.style.display = "none";
    }
});

document.querySelectorAll(".tp-category-menu > nav > ul > li").forEach(item => {
    item.addEventListener("click", () => {
        categoryMenuNav.style.display = "none";
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
