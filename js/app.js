/**
 * 
 * JS for Landing Page Project
 * It is about manipulationg the DOM
 * 
*/

/**
 * Define Global Variables
 * 
*/

var sections = document.querySelectorAll('section');
var navHeight; // Height of Navigation
var myTimeout; // Timeout Handle
const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;

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

// Make Navigation visible/invisible
function navigationVisible(visibleYN) {

    var navMenu = document.querySelector('.navbar__menu');

    if (!visibleYN) {
        navMenu.classList.add('navbar__menu_invisible');
    } else { navMenu.classList.remove('navbar__menu_invisible'); }

    clearTimeout(myTimeout);

    myTimeout = setTimeout(function () {
        navigationVisible(false)
    },
        5000);

}

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
        navList.innerHTML += '<li class="menu__link" id="section__' + sectionName + '"><a href="#' + sectionName + '">' + navName + '</a></li>';
    }

    navHeight = document.querySelector('header').getBoundingClientRect().height;

}

// Add class 'active' to section when near top of viewport
function checkActiveSection() {

    for (var i = 0; i < sections.length; i++) {

        var sectionID = 'section__' + sections[i].getAttribute('id');
        var navSection = document.getElementById(sectionID);


        if (isInViewPort(sections[i])) {
            sections[i].classList.add('active');
            navSection.classList.add('menu__active');
        } else {
            sections[i].classList.remove('active');
            navSection.classList.remove('menu__active');
        }
    }



}



// Scroll to anchor ID using scrollTO event
function smoothScrollingTo(target) {
    var myLinkedElement = document.querySelector(target.getAttribute('href'));
    var scrollTop = myLinkedElement.offsetTop - navHeight;
    var scrollLeft = myLinkedElement.offsetLeft;

    if (supportsNativeSmoothScroll) {
        window.scrollTo({
            top: scrollTop,
            left: scrollLeft,
            behavior: 'smooth'
        })
    } else {
        window.scrollTo(scrollLeft, scrollTop);
    };
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
    navigationVisible(true);
    checkActiveSection();
})

