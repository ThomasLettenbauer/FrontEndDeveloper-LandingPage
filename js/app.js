/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

var sections = document.querySelectorAll("section");
var navHeight; // Height of Navigation

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Check if element is in Viewport
function isInViewPort(testElement) {
    var boundingElement = testElement.getBoundingClientRect();
    return (
        boundingElement.left >= 0 &&
        boundingElement.top >= 0 &&
        boundingElement.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        boundingElement.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildMenu() {

    var navName;
    var sectionName;
    var navList = document.querySelector("#navbar__list");

    for (var i = 0; i < sections.length; i++) {
        navName = sections[i].getAttribute('data-nav');
        sectionName = sections[i].getAttribute('id');
        navList.innerHTML += '<li class="menu__link"><a href="#' + sectionName + '">' + navName + '</a></li>';
    }

    navHeight = document.querySelector('header').getBoundingClientRect().height;
}

// Add class 'active' to section when near top of viewport
function checkActiveSection() {

    for (var i = 0; i < sections.length; i++) {

        if (isInViewPort(sections[i])) {
            sections[i].classList.add('active');
        } else {
            sections[i].classList.remove('active');
        }
    }

}



// Scroll to anchor ID using scrollTO event
function smoothScrollingTo(target) {
    var myLinkedElement = document.querySelector(target.getAttribute('href'));
    var scrollTop = myLinkedElement.offsetTop - navHeight;
    var scrollLeft = myLinkedElement.offsetLeft;
    window.scrollTo({
        top: scrollTop,
        left: scrollLeft,
        behavior: 'smooth'
    });
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 
addEventListener('load', function () {
    buildMenu();
})

// Scroll to section on link click
addEventListener("click", function (event) {
    event.preventDefault();
    myTarget = event.target;
    smoothScrollingTo(myTarget);
});


// Set sections as active
addEventListener('scroll', function () {
    checkActiveSection();
})

