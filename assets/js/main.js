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
    navigation: {
        prevEl: '.slider-prev',
        nextEl: '.slider-next',
    }
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
    navigation: {
        prevEl: '.slider-prev-2',
        nextEl: '.slider-next-2',
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
        arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";

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